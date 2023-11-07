import { useEffect, useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { ROUTER_PATHS } from "../util/constants";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../util/backend";

function StudentForm() {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setIsRegistering(urlParams.get('register') !== null);

    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type !== 'student') {
      navigate(ROUTER_PATHS.HOME);
    }
  }, [authContext])

  return <>
    <Form
      title={isRegistering ? 'Complete Registration' : 'Edit Your Information'}
      error={error}
      info={info}
      fields={{
        name: {
          field: 'Name',
          placeholder: 'Jane Doe',
          type: 'text',
          defaultValue: authContext.userData.name ?? '',
          required: true
        },
        email: {
          field: 'Email',
          placeholder: 'jane.doe@example.com',
          type: 'email',
          defaultValue: authContext.userData.email ?? '',
          required: true
        },
        college: {
          field: 'College',
          placeholder: 'IIT Kharagpur (Optional)',
          type: 'text'
        }
      }}
      onSubmit={async (responses) => {
        setError(null);
        setInfo(null);

        try {
          const res = await makeRequest(
            'student/form',
            isRegistering ? 'post' : 'put',
            {
              username: authContext.userData.username,
              name: responses.name,
              email: responses.email,
              college: responses.college
            },
            authContext.jwt
          )

          if (!res.is_ok) setError(res.response.message);
          else {
            if (isRegistering) {
              navigate(authContext.dashboardLink);
            }
            else setInfo('Information successfully changed.');
          }

          return res.is_ok;
        }
        catch(e) {
          setError('Error sending the request. Please try again later.');
          console.log(e);
          return false;
        }
      }}
    />
  </>
}

export default StudentForm;