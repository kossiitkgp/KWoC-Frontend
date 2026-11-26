import { milestones } from "./timeline";

/**
 * The "flying over the dunes" choreography. Pure functions, no DOM.
 *
 * Camera distance c runs 0 .. DUNES * strength for the full journey (c = scroll progress x DUNES x strength).
 * Stage j (0 = nearest dune) occupies c in [j, j+1):
 *   - the visitor is standing on dune j, and milestone j is shown,
 *   - trees on that dune slide sideways out of view first,
 *   - then dune j drops down and sideways past the camera, revealing dune j+1,
 *     which has been growing closer the whole time and is now the new foreground.
 * Nearer layers have a larger zoom rate (parallax), so they always move faster than the ones behind.
 * The last dune stays underfoot at the foot of the mountain (c = DUNES), then passes to reveal the mountain for any remaining stage before the scene dissolves into the void.
 */
export const DUNES = 6;
export const STAGES = milestones.length;
export const ORIGIN = { x: 0.5, y: 0.55 }; // vanishing point; must match transform-origin in timeline-page.css

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** CSS-style cubic Bézier easing: solve x(u) = progress, then return y(u). */
export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  if (
    ![x1, y1, x2, y2].every(Number.isFinite) ||
    x1 < 0 ||
    x1 > 1 ||
    x2 < 0 ||
    x2 > 1
  ) {
    throw new Error(
      "Cubic Bézier requires finite controls and x values in [0, 1]",
    );
  }
  const sample = (u: number, a: number, b: number) =>
    3 * (1 - u) ** 2 * u * a + 3 * (1 - u) * u ** 2 * b + u ** 3;

  return (progress: number) => {
    const x = clamp(progress);
    if (x === 0 || x === 1) return x;
    let lo = 0,
      hi = 1;
    // Bisection is robust even when the curve has a nearly vertical tangent.
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (sample(mid, x1, x2) < x) lo = mid;
      else hi = mid;
    }
    return sample((lo + hi) / 2, y1, y2);
  };
}

export const ease = cubicBezier(0.45, 0, 0.35, 1);
const cardEase = cubicBezier(0.42, 0, 0.58, 1);

const easedRange = (start: number, end: number, c: number) =>
  cardEase(clamp((c - start) / (end - start)));

type Spec = {
  zoom: number;
  exit?: [number, number];
  dx?: number;
  dy?: number;
  boost?: number;
};

// Layer indices (see data/layers.ts), nearest dune first, with the ridge height (fraction of scene) and exit side.
const DUNE_STAGES = [
  { idx: 15, ridge: 0.73, dir: 1 }, // dune-06 front-right
  { idx: 14, ridge: 0.71, dir: -1 }, // dune-05 front-left
  { idx: 13, ridge: 0.62, dir: -1 }, // dune-04 middle-left
  { idx: 11, ridge: 0.52, dir: 1 }, // dune-03 middle-right
  { idx: 4, ridge: 0.48, dir: -1 }, // dune-02 back-left
  { idx: 3, ridge: 0.45, dir: 1 }, // dune-01 back-right
];
// Things standing on a dune leave sideways with it: [layer idx, stage, direction]
const TREES: [number, number, number][] = [
  [16, 0, -1],
  [17, 0, 1], // foreground trees
  [12, 3, 1], // cabin
  [10, 4, 1],
  [9, 4, -1],
  [8, 4, -1],
  [7, 5, 1],
  [6, 5, -1],
  [5, 5, -1],
];

const zoomOf = (idx: number) => 0.015 + 0.1 * (idx / 17) ** 2; // nearer = faster

const SPECS: Record<number, Spec> = (() => {
  const s: Record<number, Spec> = {
    0: { zoom: 0.004 }, // sky
    1: { zoom: 0.006 }, // moon / sun
    2: {
      zoom: 0.16,
      exit: [STAGES + 0.5, STAGES + 1.7],
      dx: -0.2,
      dy: 0.95,
      boost: 1,
    }, // mountains: grow, then pass
  };
  DUNE_STAGES.forEach(({ idx, ridge, dir }, j) => {
    const zoom = zoomOf(idx);
    const boost = 1.2 - 0.12 * j;
    const exit: [number, number] =
      j === DUNES - 1 ? [DUNES + 0.2, DUNES + 1.2] : [j + 0.2, j + 1];
    const endScale = (1 + zoom * exit[1]) * (1 + boost);
    const ridgeOnScreen = ORIGIN.y + (ridge - ORIGIN.y) * endScale;
    s[idx] = {
      zoom,
      exit,
      boost,
      dx: dir * 0.4 * boost,
      dy: 1 - ridgeOnScreen + 0.1,
    };
  });
  for (const [idx, j, dir] of TREES)
    s[idx] = {
      zoom: zoomOf(idx),
      exit: [j + 0.3, j + 0.85],
      dx: dir * 0.75,
      dy: 0.12,
    };
  return s;
})();

/** CSS transform for layer `idx` at camera distance c. `hidden` once it has fully left the view. */
export function layerPose(idx: number, c: number) {
  const sp = SPECS[idx] ?? { zoom: 0 };
  const q = sp.exit
    ? ease(clamp((c - sp.exit[0]) / (sp.exit[1] - sp.exit[0])))
    : 0;
  const x = q * (sp.dx ?? 0) * 100;
  const y = q * (sp.dy ?? 0) * 100;
  const scale = (1 + sp.zoom * c) * (1 + q * (sp.boost ?? 0));
  return {
    transform: `translate3d(${x}%,${y}%,0) scale(${scale})`,
    hidden: q >= 1,
    q,
  };
}

/** 0..1 visibility of milestone card `i` (fades in once on its dune, fades out as the stage leaves). */
export function cardVisibility(i: number, c: number) {
  const enter =
    i === 0 ? easedRange(0.04, 0.25, c) : easedRange(i - 0.18, i + 0.18, c);
  const leave =
    i === STAGES - 1
      ? easedRange(STAGES + 0.15, STAGES + 0.65, c)
      : easedRange(i + 0.82, i + 1.18, c);
  return enter * (1 - leave);
}

/** 0..1 visibility of the final centered "Thank you" message after the last milestone. */
export function thanksVisibility(c: number) {
  return easedRange(STAGES + 0.6, STAGES + 1.05, c);
}
