export type Milestone = {
  stage: string;
  date: string;
  title: string;
  text: string;
};

export const milestones: Milestone[] = [
  {
    stage: "Stage 01",
    date: "1 Dec 2026",
    title: "Mentor Registration Begins",
    text: "Mentors submit their open-source projects and ideas for KWoC.",
  },
  {
    stage: "Stage 02",
    date: "5 Dec 2026",
    title: "Student Registration Begins",
    text: "Students sign up, explore the project catalogue, and connect with mentors.",
  },
  {
    stage: "Stage 03",
    date: "10 Dec 2026",
    title: "Coding Period Starts",
    text: "Contribute, open pull requests, and work closely with your mentors.",
  },
  {
    stage: "Stage 04",
    date: "31 Dec 2026",
    title: "Mid Evaluations",
    text: "Mentors review your progress and share feedback for the second half.",
  },
  {
    stage: "Stage 05",
    date: "15 Jan 2027",
    title: "End Evaluations",
    text: "Wrap up your contributions and submit your final report before the deadline.",
  },
  {
    stage: "Stage 06",
    date: "20 Jan 2027",
    title: "Reports Submission",
    text: "Wrap up your contributions and submit your final report before the deadline.",
  },
  {
    stage: "Stage 07",
    date: "31 Jan 2027",
    title: "Results Declaration",
    text: "Final evaluations, contribution stats, and completion certificates.",
  },
];
