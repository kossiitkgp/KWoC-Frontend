import { useEffect, useState } from "react";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function OAuth(): JSX.Element {
  const authContext = useAuthContext();
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

 
  const validateState = (incomingState: string | null): boolean => {
    const storedState = sessionStorage.getItem("oauth_state");
    if (!incomingState || !storedState || incomingState !== storedState) {
      setErr("Invalid OAuth state. Possible security issue.");
      sessionStorage.removeItem("oauth_state");
      return false;
    }
    sessionStorage.removeItem("oauth_state"); 
    return true;
  };

  const loginHandler = async (oauthCode: string) => {
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
      }
    } catch (e) {
      setErr("Error connecting to the server. Please try again later.");
      console.log(e);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    
    if (!validateState(state)) {
      navigate("/");
      return;
    }

    if (code === null) {
      setErr("No OAuth code found. Redirecting to home page.");
      navigate("/");
    } else {
      loginHandler(code);
    }
  }, []);

  useEffect(() => {
    if (authContext.isAuthenticated) {
      if (authContext.isRegistered) {
        navigate(authContext.dashboardLink);
      } else {
        navigate(authContext.formLink);
      }
    }
  }, [authContext.isAuthenticated, authContext.isRegistered, authContext.dashboardLink, authContext.formLink, navigate]);

  return (
    <div role="status" aria-live="polite">
      {err !== null ? (
        <div className="error-message" role="alert">
          {err}
        </div>
      ) : (
        <div>Authenticating...</div>
      )}
    </div>
  );
}

export default OAuth;
