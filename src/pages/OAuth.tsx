import { useEffect, useState } from "react";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function OAuth() {
  const authContext = useAuthContext();
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

  // Validate OAuth state (CSRF protection)
  const validateOAuthState = (): boolean => {
    const urlParams = new URLSearchParams(location.search);
    const receivedState = urlParams.get("state");
    const storedState = localStorage.getItem("oauthState");
    const timestamp = localStorage.getItem("oauthStateTimestamp");

    // Check 1: State received from URL
    if (!receivedState) {
      setErr("No state parameter in OAuth callback. Please try logging in again.");
      return false;
    }

    // Check 2: State was stored in localStorage
    if (!storedState) {
      setErr("No stored OAuth state found. Your session may have expired.");
      return false;
    }

    // Check 3: States match (prevents CSRF attacks)
    if (receivedState !== storedState) {
      console.error("CSRF ATTACK DETECTED: OAuth state mismatch!", {
        received: receivedState,
        stored: storedState,
      });
      setErr("CSRF attack detected! OAuth state mismatch. Please try logging in again.");
      return false;
    }

    // Check 4: State not expired (10 minutes = 600000 ms)
    const stateAge = Date.now() - parseInt(timestamp!);
    const STATE_EXPIRY_TIME = 600000; // 10 minutes

    if (stateAge > STATE_EXPIRY_TIME) {
      console.warn("OAuth state expired", {
        age: `${Math.round(stateAge / 1000)}s`,
        maxAge: `${Math.round(STATE_EXPIRY_TIME / 1000)}s`,
      });
      setErr(
        `OAuth state expired (${Math.round(stateAge / 1000)}s old). Please try logging in again.`
      );
      return false;
    }

    console.log("✅ OAuth state validation passed");
    return true;
  };

  // Cleanup OAuth state from localStorage
  const cleanupOAuthState = () => {
    localStorage.removeItem("oauthState");
    localStorage.removeItem("oauthStateTimestamp");
    console.log("OAuth state cleaned up");
  };

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

        // Cleanup OAuth state after successful login
        cleanupOAuthState();
      }
    } catch (e) {
      setErr("Error connecting to the server. Please try again later.");
      console.log(e);
      // Cleanup on error too
      cleanupOAuthState();
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    // Check for code
    if (urlParams.get("code") === null) {
      setErr("No OAuth code found. Redirecting to home page.");
      cleanupOAuthState();
      navigate("/");
      return;
    }

    // Validate OAuth state (NEW - prevents CSRF attacks)
    if (!validateOAuthState()) {
      // Error message is already set by validateOAuthState()
      cleanupOAuthState();
      // Redirect to home after 2 seconds to let user see error
      setTimeout(() => navigate("/"), 2000);
      return;
    }

    // State is valid, proceed with login
    loginHandler(urlParams.get("code") as string);
  }, []);

  useEffect(() => {
    if (authContext.isAuthenticated) {
      if (authContext.isRegistered) {
        navigate(authContext.dashboardLink);
      } else {
        navigate(authContext.formLink);
      }
    }
  }, [authContext.isAuthenticated, authContext.isRegistered]);

  return (
    <div>{err !== null ? <div>{err}</div> : <div>Redirecting...</div>}</div>
  );
}

export default OAuth;
