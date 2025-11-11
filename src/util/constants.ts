const CLIENT_ID = import.meta.env.VITE_GH_OAUTH_CLIENT_ID;
const SCOPE = "read:user user:email";

export const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPE)}`;
export const KOSS_CONTACT_EMAIL = "contact@kossiitkgp.org";

export enum ROUTER_PATHS {
  HOME = "/",
  FAQ = "/faq",
  TESTIMONIALS = "/testimonials",
  PASTPROGRAMS = "/pastprograms",
  OAUTH = "/oauth",

  // Project routes
  PROJECTS_LIST = "/projects",
  PROJECT_FORM = "/form/project/",
  PROJECT_EDIT_FORM = "/form/project/edit/:id",
  PROJECT_EDIT_FORM_NOSUFFIX = "/form/project/edit/",

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
