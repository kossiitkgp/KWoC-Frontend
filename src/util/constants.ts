const CLIENT_ID = import.meta.env.VITE_GH_OAUTH_CLIENT_ID;
const SCOPE = "read:user user:email";

export const GITHUB_OAUTH_URL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPE)}`;
export const KOSS_CONTACT_EMAIL = "mailto:contact@kossiitkgp.org";
