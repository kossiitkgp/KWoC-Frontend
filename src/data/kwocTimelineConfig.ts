import { DUNES } from "./winterJourney";

/** Overall scroll travel. Keep at 1 for the intended one-pass, six-dune journey. */
export const TRAVEL_STRENGTH = 1;

/** Camera distance where the landscape starts dissolving into the final void. */
export const VOID_START = DUNES + 1.1;
export const VOID_RANGE = 1.5;

/** Optional live tuning: /?strength=2. Values are clamped to 0..20. */
export function getTravelStrength(): number {
  const queryValue = new URLSearchParams(window.location.search).get("strength");
  const value = queryValue === null ? TRAVEL_STRENGTH : Number(queryValue);
  return Number.isFinite(value) ? Math.min(20, Math.max(0, value)) : TRAVEL_STRENGTH;
}
