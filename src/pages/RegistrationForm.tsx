import { useEffect, useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { REGISTRATIONS_OPEN, ROUTER_PATHS } from "../util/constants";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function RegistrationForm({ isStudent }: { isStudent: boolean }) {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [isRegistering, setIsRegistering] = useState(false);

  const userType = isStudent ? "student" : "mentor";

  useEffect(() => {
    setIsRegistering(!authContext.isRegistered);

    if (isRegistering && !REGISTRATIONS_OPEN) {
      // Redirect if registrations are closed and is registering
      navigate(ROUTER_PATHS.HOME);
    }

    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type !== userType) {
      navigate(ROUTER_PATHS.HOME);
    }
  });

  const fields: any = {
    name: {
      field: "Name",
      placeholder: "Jane Doe",
      type: "text",
      defaultValue: authContext.userData.name ?? "",
      required: true,
    },
    email: {
      field: "Email",
      placeholder: "jane.doe@example.com",
      type: "email",
      defaultValue: authContext.userData.email ?? "",
      required: true,
    },
  };

  if (isStudent) {
    fields["college"] = {
      field: "College (Optional)",
      placeholder: "IIT Kharagpur",
      type: "text",
      defaultValue: authContext.userData?.college ?? "",
      required: false,
    };
  }

  return (
    <div className="pt-28 w-[80%] md:w-[60%] md:max-w-full lg:w-[50%] mx-auto">
      <Form
        title={
          isRegistering
            ? `Complete ${
                userType[0].toUpperCase() + userType.slice(1)
              } Registration`
            : "Edit Your Information"
        }
        error={error}
        info={info}
        loading={loading}
        disabled={loading}
        submitWithoutChange={isRegistering}
        staticMessage={
          isStudent
            ? "Note: Students cannot register as mentors"
            : "Note: Mentors cannot register as students"
        }
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
                setInfo("Information successfully changed.");
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
    </div>
  );
}

export default RegistrationForm;
