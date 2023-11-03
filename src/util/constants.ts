export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export enum ROUTER_PATHS {
  HOME = "/",
  FAQ = "/faq",
  TESTIMONIALS = "/testimonials",
  OAUTH = "/oauth",

  // Project routes
  PROJECTS_LIST = "/projects",
  PROJECT_FORM = "/form/project/:id",

  // Registration routes
  STUDENT_FORM = "/form/student",
  MENTOR_FORM = "/form/mentor",

  // Dashboards
  STUDENT_DASHBOARD = "/dashboard/student",
  MENTOR_DASHBOARD = "/dashboard/mentor",

  // Stats routes
  ALL_STUDENT_STATS = "/stats/students",
  ALL_PROJECT_STATS = "/stats/projects",
  ONE_STUDENT_STATS = "/stats/student/:id",
  ONE_MENTOR_STATS = "/stats/mentor/:id",
  ONE_PROJECT_STATS = "/stats/project/:id",
}
