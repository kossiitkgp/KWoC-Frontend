export type Milestone = {
  stage: string;
  date: string;
  title: string;
  text: string;
};

export const milestones: Milestone[] = [
  {
    stage: "Stage 01",
    date: "2026-12-01",
    title: "Mentor Registration Begins",
    text: "Mentors submit their open-source projects and ideas for KWoC.",
  },
  {
    stage: "Stage 02",
    date: "2026-12-05",
    title: "Student Registration Begins",
    text: "Students sign up, explore the project catalogue, and connect with mentors.",
  },
  {
    stage: "Stage 03",
    date: "2026-12-10",
    title: "Coding Period Starts",
    text: "Contribute, open pull requests, and work closely with your mentors.",
  },
  {
    stage: "Stage 04",
    date: "2026-12-31",
    title: "Mid Evaluations",
    text: "Mentors review your progress and share feedback for the second half.",
  },
  {
    stage: "Stage 05",
    date: "2027-01-15",
    title: "End Evaluations",
    text: "Wrap up your contributions and submit your final report before the deadline.",
  },
  {
    stage: "Stage 06",
    date: "2027-01-20",
    title: "Reports Submission",
    text: "Wrap up your contributions and submit your final report before the deadline.",
  },
  {
    stage: "Stage 07",
    date: "2027-01-31",
    title: "Results Declaration",
    text: "Final evaluations, contribution stats, and completion certificates.",
  },
];
