import { useEffect, useState } from "react";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function OAuth() {
  const authContext = useAuthContext();
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginHandler = async (oauthCode: string) => {
    // Assuming type is already set when login is started
    const userType = authContext.userData.type;
    try {
      const authRes = await makeRequest("oauth", "post", {
        code: oauthCode,
        type: userType,
      });

      if (!authRes.is_ok) {
        setErr(authRes.response.message);
      } else {
        const auth = authRes.response;

        authContext.onLogin({
          jwt: auth.jwt,
          isRegistered: !auth.is_new_user,
          userData: {
            username: auth.username,
            name: auth.name,
            email: auth.email,
            type: auth.type,
            college: auth.college,
          },
        });

        console.log(auth);
        console.log(authContext.formLink, authContext.dashboardLink);
        navigate(
          auth.is_new_user ? authContext.formLink : authContext.dashboardLink,
        );
      }
    } catch (e) {
      setErr("Error connecting to the server. Please try again later.");
      console.log(e);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    if (urlParams.get("code") === null) {
      setErr("No OAuth code found. Redirecting to home page.");
      navigate("/");
    } else {
      loginHandler(urlParams.get("code") as string);
    }
  });

  return (
    <div>{err !== null ? <div>redirecting...</div> : <div>{err}</div>}</div>
  );
}

export default OAuth;
