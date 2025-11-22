const CLIENT_ID = import.meta.env.VITE_GH_OAUTH_CLIENT_ID;
const SCOPE = "read:user user:email";

export const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPE)}`;
export const KOSS_CONTACT_EMAIL = "contact@kossiitkgp.org";

export enum ROUTER_PATHS {
  STUDENT_FORM = "/form/student",
  MENTOR_FORM = "/form/mentor",
  STUDENT_DASHBOARD = "/dashboard/student",
  MENTOR_DASHBOARD = "/dashboard/mentor",
}

export const REG_OPEN = import.meta.env.VITE_REGISTRATIONS_OPEN == "true";
export const MID_EVALS_ENDED = import.meta.env.VITE_MID_EVALS_ENDED == "true";
export const END_EVALS_ENDED = import.meta.env.VITE_END_EVALS_ENDED == "true";
export const DISCORD_INVITE = "https://discord.gg/N5mbR2RDyw";

export const STUDENT_MANUAL = `https://drive.google.com/file/d/1VgDyagBGBxGS9tM-9WeoDJXqS9p5G5Cf/view?usp=drive_link`;
export const MENTOR_MANUAL = `https://drive.google.com/file/d/1eCsTBrt80h61z97XYhlk0Mmt4Y0odsxV/view?usp=drive_link`;
