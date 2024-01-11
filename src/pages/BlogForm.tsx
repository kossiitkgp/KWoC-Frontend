import { useEffect, useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { ROUTER_PATHS } from "../util/constants";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function BlogForm({ isStudent }: { isStudent: boolean }) {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [isRegistering, setIsRegistering] = useState(false);

  const userType = isStudent ? "student" : "mentor";

  useEffect(() => {
    setIsRegistering(!authContext.isRegistered);

    if (authContext.userData.type !== userType) {
      navigate(ROUTER_PATHS.HOME);
    }
  });

  const fields: any = {
    name: {
      field: "Submission Link",
      placeholder: "",
      type: "url",
      required: true,
    },
  };

  return (
    <>
      <Form
        title="Blog Submission Form"
        error={error}
        info={info}
        loading={loading}
        disabled={loading}
        submitWithoutChange={isRegistering}
        staticMessage="Note: The name on your profile will be used for the certificate. So change it accordingly"
        fields={fields}
        onCancel={() => {
          isRegistering
            ? authContext.onLogout()
            : navigate(authContext.dashboardLink);
        }}
        onSubmit={async (responses) => {
          setError(null);
          setInfo(null);

          const userData = {
            username: authContext.userData.username,
            name: responses.name,
            email: responses.email,
            college: responses.college,
          };

          try {
            setLoading(true);
            const res = await makeRequest(
              `${userType}/form`,
              isRegistering ? "post" : "put",
              userData,
              authContext.jwt,
            );

            if (!res.is_ok) setError(res.response.message);
            else {
              if (isRegistering) {
                authContext.onRegister({ ...userData, type: userType });

                navigate(authContext.dashboardLink);
              } else {
                authContext.updateUserData(
                  responses.name,
                  responses.email,
                  responses?.college,
                );
                setInfo("Blog submitted successfully!");
              }
            }

            setLoading(false);
            return res.is_ok;
          } catch (e) {
            setError("Error sending the request. Please try again later.");
            setLoading(false);

            console.log(e);
            return false;
          }
        }}
      />
    </>
  );
}

export default BlogForm;
