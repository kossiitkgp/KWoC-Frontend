import { useEffect, useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { DISCORD_INVITE, ROUTER_PATHS } from "../util/constants";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
  const authContext = useAuthContext();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
	if (!authContext.isAuthenticated) {
		navigate(ROUTER_PATHS.HOME);
	}
	else if (!authContext.isRegistered) {
		navigate(authContext.formLink);
	}
	else if (authContext.userData.type !== "mentor") {
		navigate(authContext.dashboardLink);
	}
  });

  return (
    <>
      <Form
        title="Register A Project"
        error={error}
        info={info}
        fields={{
			name: {
				field: 'Project Name',
				required: true,
				type: 'text',
				placeholder: 'My Awesome App'
			},
			description: {
				field: 'Description',
				required: true,
				type: 'text',
				placeholder: 'A short description for the project.'
			},
			repo_link: {
				field: 'Repository Link',
				required: true,
				type: 'url',
				placeholder: 'https://github.com/kossiitkgp/KWoC-Frontend'
			},
			comm_channel: {
				field: 'Communication Channel',
				required: true,
				type: 'url',
				placeholder: DISCORD_INVITE
			},
			tags: {
				field: 'Tags (Optional)',
				type: 'text',
				placeholder: 'javascript,html,css'
			},
			secondary_mentor: {
				field: 'Secondary Mentor Username (Optional)',
				type: 'text',
				placeholder: 'proffapt'
			}
        }}
        onCancel={() => {
          navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
        }}
        onSubmit={async (responses) => {
          setError(null);
          setInfo(null);

		  console.log(responses);

		  return true;
        }}
      />
    </>
  );
}

export default ProjectForm;
