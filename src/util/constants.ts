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
export const DISCORD_INVITE = "https://discord.gg/efFwh6fnjk";
export const SLACK_INVITE =
  "https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ";

export const GH_OAUTH_CLIENT_ID = "70bd1016c30ac53696a2";
export const GH_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GH_OAUTH_CLIENT_ID}&state=replacethiswithrandomtextlater`;
