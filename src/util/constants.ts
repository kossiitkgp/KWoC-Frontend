export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const REGISTRATIONS_OPEN =
  import.meta.env.VITE_REGISTRATIONS_OPEN == "true";
export const MID_EVALS_ENDED = import.meta.env.VITE_MID_EVALS_ENDED == "true";
export const END_EVALS_ENDED = import.meta.env.VITE_END_EVALS_ENDED == "true";
export const REPORT_SUBMISSION_OPEN =
  import.meta.env.VITE_REPORT_SUBMISSION_OPEN == "true";

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
export const DISCORD_INVITE = "https://discord.gg/efFwh6fnjk";
export const SLACK_INVITE =
  "https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ";
export const KOSS_WEBSITE_URL = "https://kossiitkgp.org";
export const KOSS_CONTACT_EMAIL = "contact@kossiitkgp.org";
export const KOSS_LINKEDIN_URL =
  "https://www.linkedin.com/company/kharagpur-open-source-society/";
export const KOSS_TWITTER_URL = "https://twitter.com/kossiitkgp";
export const FOSSU_WEBSITE_URL = "https://fossunited.org";

export const MENTOR_MANUAL_LINK =
  "https://drive.google.com/file/d/1qNl6RGQ6dnkFu20L3LwC4bcBFOOpd_vV/view?usp=drive_link";
export const STUDENT_MANUAL_LINK =
  "https://drive.google.com/file/d/18RqKEQnyS9YDKyaVQB8rvnqJtbxejf0M/view?usp=drive_link";

export const GH_OAUTH_CLIENT_ID = import.meta.env.VITE_GH_OAUTH_CLIENT_ID;
export const GH_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GH_OAUTH_CLIENT_ID}&state=replacethiswithrandomtextlater`;