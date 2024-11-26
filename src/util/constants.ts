export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export const REGISTRATIONS_OPEN =
  import.meta.env.VITE_REGISTRATIONS_OPEN == "true";
export const MID_EVALS_ENDED = import.meta.env.VITE_MID_EVALS_ENDED == "true";
export const END_EVALS_ENDED = import.meta.env.VITE_END_EVALS_ENDED == "true";
export const REPORT_SUBMISSION_OPEN =
  import.meta.env.VITE_REPORT_SUBMISSION_OPEN == "true";
export const PROJECTS_STARTED = import.meta.env.VITE_PROJECTS_STARTED == "true";

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
  ORGANISOR_DASHBOARD = "/dashboard/organiser",

  // Stats routes
  ALL_STUDENT_STATS = "/stats/students",
  ALL_PROJECT_STATS = "/stats/projects",
  ONE_STUDENT_STATS = "/stats/student/:id",
  ONE_MENTOR_STATS = "/stats/mentor/:id",
  ONE_PROJECT_STATS = "/stats/project/:id",
}
export const DISCORD_INVITE = "https://discord.gg/efFwh6fnjk";
export const KOSS_WEBSITE_URL = "https://kossiitkgp.org";
export const KOSS_CONTACT_EMAIL = "mailto:contact@kossiitkgp.org";
export const KOSS_LINKEDIN_URL =
  "https://www.linkedin.com/company/kharagpur-open-source-society/";
export const KOSS_TWITTER_URL = "https://twitter.com/kossiitkgp";
export const FOSSU_WEBSITE_URL = "https://fossunited.org";

export const MENTOR_MANUAL_LINK =
  "https://drive.google.com/file/d/1XUGfHygE3_KYX_qhcpvw8jhKLlcRkzHP/view?usp=drive_link";
export const STUDENT_MANUAL_LINK =
  "https://drive.google.com/file/d/1gc2NWeMDA3ZFzH4RWVspuerduRdfY9yu/view?usp=drive_link";

export const GH_OAUTH_CLIENT_ID = import.meta.env.VITE_GH_OAUTH_CLIENT_ID;
export const GH_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GH_OAUTH_CLIENT_ID}&state=replacethiswithrandomtextlater&scope=read:org`;

export const PAGENATION_LEN = 4;