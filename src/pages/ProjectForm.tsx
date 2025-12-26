import { useEffect, useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import { DISCORD_INVITE, ROUTER_PATHS } from "../util/constants";
import { useNavigate, useParams } from "react-router-dom";
import { makeRequest } from "../util/backend";
import { IProject } from "../util/types";

const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN == "true";

function ProjectForm(props: { isEditing?: boolean }) {
  const isEditing = props.isEditing ?? false;

  const authContext = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [projectInfo, setProjectInfo] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isEditing && !MENTOR_REG_OPEN) {
      navigate("/");
    }

    if (!authContext.isAuthenticated) {
      navigate("/");
    } else if (!authContext.isRegistered) {
      navigate(authContext.formLink);
    } else if (authContext.userData.type !== "mentor") {
      navigate(authContext.dashboardLink);
    }
  });

  useEffect(() => {
    if (isEditing && id !== undefined) {
      setLoading(true);

      makeRequest(`project/${parseInt(id)}`, "get", null, authContext.jwt)
        .then((response) => {
          if (response.is_ok) {
            setProjectInfo(response.response);
          } else {
            setError(response.response.message);
          }

          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setError("An unexpected error occurred.");
          setLoading(false);
        });
    }
  }, [navigate, id, isEditing]);

  return (
    <div className="project-form-container">
      {!isEditing || projectInfo !== null || error !== null ? (
        <Form
          title={isEditing ? "Edit Project" : "Register A Project"}
          error={error}
          info={info}
          loading={loading}
          disabled={loading}
          fields={{
            name: {
              field: "Project Name",
              required: true,
              type: "text",
              placeholder: "My Awesome App",
              defaultValue: isEditing ? projectInfo?.name : undefined,
            },
            description: {
              field: "Description",
              required: true,
              type: "text",
              placeholder: "A short description for the project.",
              defaultValue: isEditing ? projectInfo?.description : undefined,
            },
            repo_link: {
              field: "Repository Link",
              required: true,
              type: "url",
              placeholder: "https://github.com/kossiitkgp/KWoC-Frontend",
              defaultValue: isEditing ? projectInfo?.repo_link : undefined,
            },
            comm_channel: {
              field: "Communication Channel",
              required: true,
              type: "url",
              placeholder: DISCORD_INVITE,
              defaultValue: isEditing ? projectInfo?.comm_channel : undefined,
            },
            readme_link: {
              field: "README Link",
              required: true,
              type: "url",
              placeholder: "https://github.com/kossiitkgp/KWoC-Frontend#readme",
              defaultValue: isEditing ? projectInfo?.readme_link : undefined,
            },
            tags: {
              field: "Tags (Optional)",
              type: "text",
              placeholder: "javascript,html,css",
              defaultValue: isEditing ? projectInfo?.tags.join(",") : undefined,
            },
            secondary_mentor_username: {
              field: "Secondary Mentor Username (Optional)",
              type: "text",
              placeholder: "proffapt",
              defaultValue: isEditing
                ? projectInfo?.secondary_mentor.username
                : undefined,
            },
          }}
          onCancel={() => {
            navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
          }}
          onSubmit={async (responses) => {
            setError(null);
            setInfo(null);

            // Ensure minimum 3 tags when tags are provided
            const tagsArray =
              responses.tags
                ? responses.tags
                    .split(",")
                    .map((t) => t.trim())
                    .filter((t) => t.length > 0)
                : [];

            if (tagsArray.length > 0 && tagsArray.length < 3) {
              setError(
                "Minimum 3 tags required! (e.g: javascript, html, css)",
              );
              return false;
            }

            try {
              setLoading(true);
              const res = await makeRequest(
                "project",
                isEditing ? "put" : "post",
                {
                  ...responses,
                  secondary_mentor_username:
                    responses.secondary_mentor_username ?? "",
                  tags: tagsArray,
                  mentor_username: authContext.userData.username,
                  id: isEditing
                    ? id
                      ? parseInt(id)
                      : undefined
                    : undefined,
                },
                authContext.jwt,
              );

              if (res.is_ok) {
                navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
                setLoading(false);
                return true;
              } else {
                setError(
                  `${res.response.status_code} Error: ${res.response.message}`,
                );
                setLoading(false);
                return false;
              }
            } catch (e) {
              console.log(e);
              setError("An unexpected error occurred.");
              setLoading(false);
              return false;
            }
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectForm;
