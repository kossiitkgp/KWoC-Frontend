import { useEffect } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { ROUTER_PATHS } from "../util/constants";
import { useNavigate } from "react-router-dom";

function StudentForm() {
  const authContext = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type !== 'student') {
      navigate(ROUTER_PATHS.HOME);
    }
  })

  return <Form
    title="Your Information"
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
    onSubmit={console.log}
  />
}

export default StudentForm;