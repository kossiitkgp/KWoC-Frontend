import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import SpinnerLoader from "../components/SpinnerLoader";

function OAuth() {
  const authContext = useAuthContext();
  const [error, setError] = useState<string | null>(null);
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
        setError(authRes.response.message);
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

        navigate(
          auth.is_new_user ? authContext.formLink : authContext.dashboardLink,
        );
      }
    } catch (e) {
      setError("Error connecting to the server. Please try again later.");
      console.log(e);
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

  return (
    <div className="pt-32 flex justify-center">
      {error === null ? (
        <SpinnerLoader />
      ) : (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
}

export default OAuth;
