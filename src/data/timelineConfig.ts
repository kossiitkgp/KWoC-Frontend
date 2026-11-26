import { clamp, cubicBezier, STAGES } from "./journey";
import { milestones } from "./timeline";

// Midnight in Kharagpur. Each dated stop lands on its own visible card.
const day = 86_400_000;
const times = milestones.map(({ date }) => Date.parse(date + "T00:00:00+05:30"));
const start = times[0];
const end = times[times.length - 1] + day; // Include results day.
const stops = [...times, end].map(time => (time - start) / (end - start));
export const CAMERA_END = STAGES + 1.05; // Final reveal, with no travel beyond it.
const positions = milestones.map((_, i) => i + 0.35).concat(CAMERA_END);
const segmentEase = cubicBezier(0.42, 0, 0.58, 1);
export const FOLLOW_RATE = 8;

export function eventProgress(now = Date.now()) {
  return clamp((now - start) / (end - start));
}

export function cameraDistance(progress: number) {
  const p = clamp(progress);
  const next = stops.findIndex(stop => stop > p);
  if (next < 1) return CAMERA_END;
  const i = next - 1;
  const fraction = (p - stops[i]) / (stops[next] - stops[i]);
  return positions[i] + segmentEase(fraction) * (positions[next] - positions[i]);
}

export const VOID_START = STAGES + 0.6;
export const VOID_RANGE = CAMERA_END - VOID_START;
