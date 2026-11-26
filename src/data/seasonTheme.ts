import { KWOC_MILESTONES } from "./kwocTimeline";

/**
 * Date → normalized position along the 2026 scroll-driven timeline → seasonal
 * theme position. The actual event dates and normalized progress positions are
 * read from kwocTimeline.ts once at app startup. The fallback date map below is
 * retained only until at least two real milestone dates have been entered.
 *
 * Dates use ISO-8601 calendar form (YYYY-MM-DD). The 2026 demo archive does not
 * include the official event schedule, so the initial dates remain explicitly
 * provisional; no dates are inferred from the old 2025 schedule.
 */
export const PROGRAM_YEAR = 2026;

export type NormalizedCoordinate = Readonly<{ x: number; y: number }>;
export type SeasonPoint = Readonly<{ date: string; position: number }>;

/**
 * Legacy/fallback date anchors, used only while fewer than two milestones in
 * kwocTimeline.ts have ISO dates. x is retained for compatibility with the
 * previous 2D timeline map; the new dune journey uses the normalized `progress`
 * field from each milestone as its one-dimensional coordinate.
 */
export const DATE_TO_TIMELINE_COORDINATE: Readonly<
  Record<string, NormalizedCoordinate>
> = {
  "2026-10-26": { x: 0.08125, y: 0 },
  "2026-10-30": { x: 0.84875, y: 0.170082 },
  "2026-11-05": { x: 0.14375, y: 0.336066 },
  "2026-11-31": { x: 0.94625, y: 0.502732 },
  "2027-12-15": { x: 0.15625, y: 0.669399 },
  "2027-12-20": { x: 0.96125, y: 0.834699 },
  "2027-12-31": { x: 0.13625, y: 1 },
};

/**
 * Additional curve-shaping points. They need not be visible timeline events;
 * use them to soften or sharpen how quickly the scene changes between events.
 * Edit/remove these freely without changing the actual timeline component.
 */
export const SEASON_SPLINE_GUIDES: readonly SeasonPoint[] = [
  { date: "2026-11-18", position: 0.418 },
  { date: "2027-12-07", position: 0.584 },
  { date: "2027-12-18", position: 0.752 },
];

/** 1 = use the full timeline range; <1 softens it; >1 reaches the end sooner. */
export const THEME_EFFECT_STRENGTH = 1;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

function dateToDay(date: string): number {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return Number.NaN;
  const [year, month, day] = date.split("-").map(Number);
  const value = new Date(Date.UTC(year, month - 1, day));
  if (
    value.getUTCFullYear() !== year ||
    value.getUTCMonth() !== month - 1 ||
    value.getUTCDate() !== day
  ) {
    return Number.NaN;
  }
  return value.getTime() / 86_400_000;
}

function getDatedMilestonePoints(): SeasonPoint[] {
  const entries = KWOC_MILESTONES.map((milestone, index) => ({
    date: milestone.date,
    position: milestone.progress ?? index / Math.max(1, KWOC_MILESTONES.length),
  })).filter(
    (point): point is { date: string; position: number } =>
      typeof point.date === "string" && Number.isFinite(dateToDay(point.date)),
  );

  if (entries.length < 2) return [];

  // Map the first and last dated events to 0 and 1, independently of how much
  // of the six-dune scroll range is occupied by the final card.
  const positions = entries.map((entry) => clamp(entry.position));
  const minimum = Math.min(...positions);
  const maximum = Math.max(...positions);
  const span = maximum - minimum;

  return entries.map((entry) => ({
    date: entry.date,
    position: span > 0 ? clamp((entry.position - minimum) / span) : 0,
  }));
}

/** True until at least two dated milestones are configured in kwocTimeline.ts. */
export const SEASON_DATES_ARE_PROVISIONAL = getDatedMilestonePoints().length < 2;

function getEventPoints(): SeasonPoint[] {
  const datedMilestones = getDatedMilestonePoints();
  const useMilestoneDates = datedMilestones.length >= 2;
  const sourcePoints = useMilestoneDates
    ? datedMilestones
    : Object.entries(DATE_TO_TIMELINE_COORDINATE).map(([date, coordinate]) => ({
        date,
        position: clamp(coordinate.y),
      }));

  const pointsByDate = new Map<string, SeasonPoint>();
  const firstDay = dateToDay(sourcePoints[0]?.date ?? "");
  const lastDay = dateToDay(sourcePoints[sourcePoints.length - 1]?.date ?? "");
  SEASON_SPLINE_GUIDES.forEach((point) => {
    const guideDay = dateToDay(point.date);
    // Stale guide dates outside the active event range must not bend the curve.
    if (!useMilestoneDates || (guideDay >= firstDay && guideDay <= lastDay)) {
      pointsByDate.set(point.date, point);
    }
  });

  sourcePoints.forEach((point) => {
    // A real milestone date takes precedence over an optional guide point.
    pointsByDate.set(point.date, point);
  });

  return Array.from(pointsByDate.values())
    .filter((point) => Number.isFinite(dateToDay(point.date)))
    .sort((a, b) => dateToDay(a.date) - dateToDay(b.date));
}

/**
 * Fritsch–Carlson/PCHIP-style tangents produce a smooth monotone cubic spline.
 * Unlike a plain Catmull–Rom curve, this will not overshoot between milestones.
 */
function endpointTangent(h0: number, h1: number, d0: number, d1: number) {
  let tangent = ((2 * h0 + h1) * d0 - h0 * d1) / (h0 + h1);
  if (Math.sign(tangent) !== Math.sign(d0)) return 0;
  if (Math.sign(d0) !== Math.sign(d1) && Math.abs(tangent) > 3 * Math.abs(d0)) {
    tangent = 3 * d0;
  }
  return tangent;
}

function monotoneTangents(xs: number[], ys: number[]): number[] {
  const count = xs.length;
  if (count < 2) return [0];

  const widths: number[] = [];
  const slopes: number[] = [];
  for (let i = 0; i < count - 1; i += 1) {
    const width = xs[i + 1] - xs[i];
    widths.push(width);
    slopes.push(width > 0 ? (ys[i + 1] - ys[i]) / width : 0);
  }

  if (count === 2) return [slopes[0], slopes[0]];

  const tangents = new Array<number>(count);
  tangents[0] = endpointTangent(widths[0], widths[1], slopes[0], slopes[1]);
  tangents[count - 1] = endpointTangent(
    widths[count - 2],
    widths[count - 3],
    slopes[count - 2],
    slopes[count - 3],
  );

  for (let i = 1; i < count - 1; i += 1) {
    const before = slopes[i - 1];
    const after = slopes[i];
    if (before === 0 || after === 0 || Math.sign(before) !== Math.sign(after)) {
      tangents[i] = 0;
      continue;
    }
    const w1 = 2 * widths[i] + widths[i - 1];
    const w2 = widths[i] + 2 * widths[i - 1];
    tangents[i] =
      (w1 + w2) / (w1 / before + w2 / after);
  }

  return tangents;
}

function interpolateMonotoneSpline(day: number, points: SeasonPoint[]): number {
  if (points.length === 0) return 0;

  const xs = points.map((point) => dateToDay(point.date));
  const ys = points.map((point) => clamp(point.position));
  if (day <= xs[0]) return ys[0];
  if (day >= xs[xs.length - 1]) return ys[ys.length - 1];

  const tangents = monotoneTangents(xs, ys);
  let index = 0;
  while (index < xs.length - 2 && day > xs[index + 1]) index += 1;

  const width = xs[index + 1] - xs[index];
  const t = (day - xs[index]) / width;
  const t2 = t * t;
  const t3 = t2 * t;
  const h00 = 2 * t3 - 3 * t2 + 1;
  const h10 = t3 - 2 * t2 + t;
  const h01 = -2 * t3 + 3 * t2;
  const h11 = t3 - t2;

  const value =
    h00 * ys[index] +
    h10 * width * tangents[index] +
    h01 * ys[index + 1] +
    h11 * width * tangents[index + 1];

  // Numerical guard: the output cannot escape the neighbouring milestones.
  return clamp(value, Math.min(ys[index], ys[index + 1]), Math.max(ys[index], ys[index + 1]));
}

export function getSeasonPosition(date: string): number {
  const day = dateToDay(date);
  if (!Number.isFinite(day)) return 0;
  const points = getEventPoints();
  const rawPosition = interpolateMonotoneSpline(day, points);
  return clamp(rawPosition * THEME_EFFECT_STRENGTH);
}

export function getLocalISODate(now = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const NIGHT_ACCENTS = ["#b8e3ff", "#a8c8ff", "#c6b6ff", "#9be0ed", "#d0e6ff"];
const DAY_ACCENTS = ["#245c71", "#2c7180", "#5e698a", "#3d777d", "#245a69"];

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace("#", "");
  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ];
}

export function getSeasonAccent(position: number, theme: "night" | "day"): string {
  const palette = theme === "night" ? NIGHT_ACCENTS : DAY_ACCENTS;
  const scaled = clamp(position) * (palette.length - 1);
  const index = Math.min(palette.length - 2, Math.floor(scaled));
  const amount = scaled - index;
  const from = hexToRgb(palette[index]);
  const to = hexToRgb(palette[index + 1]);
  const rgb = from.map((value, i) => Math.round(value + (to[i] - value) * amount));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}
