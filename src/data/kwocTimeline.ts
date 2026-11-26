import { DUNES, clamp } from "./winterJourney";

/**
 * Timeline content is separate from its animation. Add/remove milestones here;
 * no JSX, SVG coordinates or animation code needs to change.
 *
 * progress is a normalized position (0..1) along the complete scroll journey.
 * Keep entries in ascending progress order. If omitted, positions are spread
 * evenly using the current event count. Optional dates can be filled once the
 * official schedule is confirmed.
 */
export type KwocMilestone = Readonly<{
  id: string;
  label: string;
  title: string;
  text: string;
  date?: string; // Optional event date in ISO calendar form: YYYY-MM-DD.
  progress?: number; // Normalized position along the full journey: 0..1.
}>;

export const KWOC_MILESTONES: readonly KwocMilestone[] = [
  {
    id: "project-listings",
    label: "Stage 01",
    title: "Project listings open",
    text: "Mentors submit their open-source projects and ideas.",
    progress: 0,
  },
  {
    id: "student-registration",
    label: "Stage 02",
    title: "Student registrations",
    text: "Students sign up and explore the project catalogue.",
    progress: 1 / 6,
  },
  {
    id: "coding-period",
    label: "Stage 03",
    title: "Coding period begins",
    text: "Contribute, open pull requests and work with your mentors.",
    progress: 2 / 6,
  },
  {
    id: "mid-evaluation",
    label: "Stage 04",
    title: "Mid-evaluation",
    text: "Mentors review progress and share feedback.",
    progress: 3 / 6,
  },
  {
    id: "final-submissions",
    label: "Stage 05",
    title: "Final submissions",
    text: "Wrap up your contributions and submit your final work.",
    progress: 4 / 6,
  },
  {
    id: "results-wrap-up",
    label: "Stage 06",
    title: "Results & wrap-up",
    text: "Final evaluations, stats and certificates.",
    progress: 5 / 6,
  },
];

/** Resolve custom positions or evenly distribute entries that omit progress. */
export function getMilestoneCameraPositions(
  milestones: readonly KwocMilestone[] = KWOC_MILESTONES,
): number[] {
  const count = milestones.length;
  return milestones.map((milestone, index) => {
    const progress = milestone.progress ?? (count === 0 ? 0 : index / count);
    return clamp(progress) * DUNES;
  });
}
