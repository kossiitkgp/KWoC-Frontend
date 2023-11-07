import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../util/constants";

function OAuth() {
  const authContext = useAuthContext();
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginHandler = async (oauthCode: string) => {
    // Assuming type is already set when login is started
    const userType = authContext.userData.type;
    const authRes = await makeRequest("oauth", "post", {
      code: oauthCode,
      type: userType,
    });

    if (!authRes.is_ok) {
      setError(authRes.response.message);
    } else {
      const auth = authRes.response;

      authContext.onLogin({
        jwt: auth.jwt,
        userData: {
          username: auth.username,
          name: auth.name,
          email: auth.email,
          type: auth.type,
        },
      });

      switch (auth.type) {
        case 'student':
          navigate(auth.is_new_user ? ROUTER_PATHS.STUDENT_FORM : ROUTER_PATHS.STUDENT_DASHBOARD);
          break;

        case 'mentor':
          navigate(auth.is_new_user ? ROUTER_PATHS.MENTOR_FORM : ROUTER_PATHS.MENTOR_DASHBOARD);
          break;
      }
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    if (urlParams.get("code") === null) {
      setError("No OAuth code found. Redirecting to home page.");
      navigate("/");
    } else {
      loginHandler(urlParams.get("code") as string);
    }
  });

  return <div>{error ?? ""}</div>;
}

export default OAuth;
