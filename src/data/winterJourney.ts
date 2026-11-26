/**
 * Scroll choreography for the 2026 winter landscape.
 *
 * Camera distance c travels from 0 to DUNES. Each dune becomes the foreground
 * in sequence while nearer layers move faster than the layers behind them.
 * This module is intentionally pure: it contains no DOM or React code.
 */
export const DUNES = 6;
export const ORIGIN = { x: 0.5, y: 0.55 } as const;

export const clamp = (value: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, value));

/** CSS-style cubic Bézier easing, solving x(u) = progress before returning y(u). */
export function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  if (
    ![x1, y1, x2, y2].every(Number.isFinite) ||
    x1 < 0 || x1 > 1 || x2 < 0 || x2 > 1
  ) {
    throw new Error("Cubic Bézier requires finite controls and x values in [0, 1]");
  }

  const sample = (u: number, a: number, b: number) =>
    3 * (1 - u) ** 2 * u * a + 3 * (1 - u) * u ** 2 * b + u ** 3;

  return (progress: number) => {
    const x = clamp(progress);
    if (x === 0 || x === 1) return x;

    let low = 0;
    let high = 1;
    // Bisection remains stable when the curve has an almost vertical tangent.
    for (let iteration = 0; iteration < 24; iteration += 1) {
      const middle = (low + high) / 2;
      if (sample(middle, x1, x2) < x) low = middle;
      else high = middle;
    }
    return sample((low + high) / 2, y1, y2);
  };
}

// Tune these separately from the page-level scroll smoothing.
const layerEase = cubicBezier(0.45, 0, 0.35, 1);
const cardEase = cubicBezier(0.42, 0, 0.58, 1);
const easedRange = (start: number, end: number, camera: number) =>
  cardEase(clamp((camera - start) / (end - start)));

type LayerSpec = {
  zoom: number;
  exit?: readonly [number, number];
  dx?: number;
  dy?: number;
  boost?: number;
};

// Layer indices match the back-to-front order in src/theme/layers.ts.
const DUNE_STAGES = [
  { index: 15, ridge: 0.73, direction: 1 },
  { index: 14, ridge: 0.71, direction: -1 },
  { index: 13, ridge: 0.62, direction: -1 },
  { index: 11, ridge: 0.52, direction: 1 },
  { index: 4, ridge: 0.48, direction: -1 },
  { index: 3, ridge: 0.45, direction: 1 },
] as const;

// Trees/cabin leave sideways with the dune they stand on.
const TREES: readonly (readonly [number, number, number])[] = [
  [16, 0, -1], [17, 0, 1],
  [12, 3, 1],
  [10, 4, 1], [9, 4, -1], [8, 4, -1],
  [7, 5, 1], [6, 5, -1], [5, 5, -1],
];

const zoomOf = (index: number) => 0.015 + 0.1 * (index / 17) ** 2;

const LAYER_SPECS: Record<number, LayerSpec> = (() => {
  const specs: Record<number, LayerSpec> = {
    0: { zoom: 0.004 },
    1: { zoom: 0.006 },
    2: { zoom: 0.16, exit: [DUNES + 0.5, DUNES + 1.7], dx: -0.2, dy: 0.95, boost: 1 },
  };

  DUNE_STAGES.forEach(({ index, ridge, direction }, stage) => {
    const zoom = zoomOf(index);
    const boost = 1.2 - 0.12 * stage;
    const exit: readonly [number, number] =
      stage === DUNES - 1 ? [DUNES + 0.2, DUNES + 1.2] : [stage + 0.2, stage + 1];
    const endScale = (1 + zoom * exit[1]) * (1 + boost);
    const ridgeOnScreen = ORIGIN.y + (ridge - ORIGIN.y) * endScale;
    specs[index] = {
      zoom,
      exit,
      boost,
      dx: direction * 0.4 * boost,
      dy: 1 - ridgeOnScreen + 0.1,
    };
  });

  TREES.forEach(([index, stage, direction]) => {
    specs[index] = {
      zoom: zoomOf(index),
      exit: [stage + 0.3, stage + 0.85],
      dx: direction * 0.75,
      dy: 0.12,
    };
  });

  return specs;
})();

/** Return the CSS transform and visibility for one landscape layer. */
export function layerPose(index: number, camera: number) {
  const spec = LAYER_SPECS[index] ?? { zoom: 0 };
  const exitStart = spec.exit?.[0] ?? 0;
  const exitEnd = spec.exit?.[1] ?? 1;
  const q = spec.exit
    ? layerEase(clamp((camera - exitStart) / (exitEnd - exitStart)))
    : 0;
  const x = q * (spec.dx ?? 0) * 100;
  const y = q * (spec.dy ?? 0) * 100;
  const scale = (1 + spec.zoom * camera) * (1 + q * (spec.boost ?? 0));

  return {
    transform: `translate3d(${x}%,${y}%,0) scale(${scale})`,
    hidden: q >= 1,
    q,
  };
}

/**
 * Cross-fade an arbitrary number of milestone cards along the journey.
 * Event count and positions are data-driven; the six physical dunes do not
 * limit how many milestones can be listed.
 */
export function cardVisibility(
  index: number,
  camera: number,
  positions: readonly number[],
) {
  const position = positions[index];
  if (position === undefined) return 0;

  // Each new card fades in around its own milestone position. The previous
  // card fades out over that exact same window, producing a true cross-fade.
  const transitionWindow = (milestoneIndex: number): readonly [number, number] => {
    if (milestoneIndex === 0) return [0.04, 0.25];
    const current = positions[milestoneIndex];
    const previous = positions[milestoneIndex - 1];
    const gap = Math.max(0.001, current - previous);
    const halfWidth = Math.min(0.18, gap * 0.35);
    return [current - halfWidth, current + halfWidth];
  };

  const [enterStart, enterEnd] = transitionWindow(index);
  const enter = easedRange(enterStart, enterEnd, camera);
  const leave = index === positions.length - 1
    ? easedRange(DUNES + 0.5, DUNES + 1.1, camera)
    : easedRange(...transitionWindow(index + 1), camera);

  return enter * (1 - leave);
}
