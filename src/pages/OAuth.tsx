import { useEffect, useState } from "react";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function OAuth() {
  const authContext = useAuthContext();
  const [err, setErr] = useState<string | null>(null);
  const navigate = useNavigate();

 
  const validateOAuthState = (): boolean => {
    const urlParams = new URLSearchParams(location.search);
    const receivedState = urlParams.get("state");
    const storedState = localStorage.getItem("oauthState");
    const timestamp = localStorage.getItem("oauthStateTimestamp");

    
    if (!receivedState) {
      setErr("Please try logging in again.");
      return false;
    }

   
    if (!storedState) {
      setErr("Please try logging in again. Your session may have expired.");
      return false;
    }


    if (receivedState !== storedState) {
      console.error("CSRF ATTACK DETECTED: OAuth state mismatch!", {
        received: receivedState,
        stored: storedState,
      });
      setErr("Something went wrong. Please try logging in again.");
      return false;
    }

  
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


  const cleanupOAuthState = () => {
    localStorage.removeItem("oauthState");
    localStorage.removeItem("oauthStateTimestamp");
    console.log("OAuth state cleaned up");
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

       
        cleanupOAuthState();
      }
    } catch (e) {
      setErr("Error connecting to the server. Please try again later.");
      console.log(e);
    
      cleanupOAuthState();
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

   
    if (urlParams.get("code") === null) {
      setErr("No OAuth code found. Redirecting to home page.");
      cleanupOAuthState();
      navigate("/");
      return;
    }

   
    if (!validateOAuthState()) {
     
      cleanupOAuthState();
      
      setTimeout(() => navigate("/"), 2000);
      return;
    }


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
