// export const BACKEND_URL = `https://kwoc.metamehta.me`;
export const BACKEND_URL = `https://kwoc-2022.fly.dev`;
export const STATS_API = `https://kwoc21-stats.herokuapp.com/`;
export const MID_EVAL_DATE = "2022-12-24";
export const END_EVAL_DATE = "2023-01-04";
const GITHUB_AUTH_CLIENT_ID =
  process.env.NODE_ENV === "production"
    ? `3d91471f2966bcd6e6c3`
    : `d46d572a8e9fe53f6c14`;
export const STUDENT_REGISTRATION_LINK = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_AUTH_CLIENT_ID}&state=student`;
export const MENTOR_REGISTRATION_LINK = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_AUTH_CLIENT_ID}&state=mentor`;
export const STUDENT_MANUAL =
  "https://drive.google.com/file/d/1Bq_1tEgjBZo7g2Pi-BWuHsiCIc3aYRMe/view?usp=sharing";
export const MENTOR_MANUAL =
  "https://drive.google.com/file/d/1imOG7oR_4XINVqPQ7ZiocYuEHwM84CzG/view?usp=sharing";
export const GA_MEASUREMENT_ID = "G-EV5E5WJCFL";
