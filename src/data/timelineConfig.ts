import { DUNES, STAGES } from "./journey";

/**
 * TRAVEL_STRENGTH: how far the full scroll carries you.
 *   0.3  a short hop: you only get over the first dune or two
 *   1    default: over every dune, ending at the foot of the mountain
 *   3    keep going: past the mountain and out beyond the horizon
 *   6+   deep into the void
 */
export const TRAVEL_STRENGTH = (STAGES + 1.2) / DUNES;

export const VOID_START = STAGES + 1.1;
export const VOID_RANGE = 1.5;

export function getStrength(): number {
  const q = new URLSearchParams(window.location.search).get("strength");
  const v = q === null ? TRAVEL_STRENGTH : Number(q);
  return Number.isFinite(v) ? Math.min(20, Math.max(0, v)) : TRAVEL_STRENGTH;
}
