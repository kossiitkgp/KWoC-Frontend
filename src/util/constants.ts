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
export const REPORT_SUBMISSION_OPEN =
  import.meta.env.VITE_REPORT_SUBMISSION_OPEN == "true";
export const DISCORD_INVITE = "https://discord.gg/N5mbR2RDyw";

export const MENTOR_MANUAL_LIGHT = `https://drive.google.com/file/d/1aycdxrY3Hky24Yh_2ZuUttJ9hdraz8UV/view?usp=sharing`;
export const MENTOR_MANUAL_DARK = `https://drive.google.com/file/d/15J3Aasmd-X8xC_j4iVzldmQjAgXsI6Hk/view?usp=sharing`
export const STUDENT_MANUAL_DARK = `https://drive.google.com/file/d/1b1KlFpJICiy6r3JVCulmeJ50zQAW7ZHA/view?usp=sharing`
export const STUDENT_MANUAL_LIGHT = `https://drive.google.com/file/d/1Teev6o6uFs6Jy3TbXpHe_l3PUi_yjp--/view?usp=sharing`;
export const BLOG_FORMID = `1FAIpQLSd0faRqE1c9zQrdKUvkjyP7zsS6L4GgNjRSgXfm3kBRPBtuGw`;
