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

export const MENTOR_MANUAL_LIGHT = `https://drive.google.com/file/d/1iXDPfQEHPsB2uoihaQSsoHnW-CX1O00l/view?usp=sharing`;
export const MENTOR_MANUAL_DARK = `https://drive.google.com/file/d/15G1FL7dN8RhcO_rH_APYL78BOX-JexaR/view?usp=sharing`;
export const STUDENT_MANUAL_DARK = `https://drive.google.com/file/d/1aATiJBfuSxvz-0SjnheVAvdOyAhlXqQJ/view?usp=sharing`;
export const STUDENT_MANUAL_LIGHT = `https://drive.google.com/file/d/1DrU_dwahTulN2KepJKKE3fx1PX9KAh98/view?usp=sharing`;
export const BLOG_FORMID = `1FAIpQLSd0faRqE1c9zQrdKUvkjyP7zsS6L4GgNjRSgXfm3kBRPBtuGw`;
