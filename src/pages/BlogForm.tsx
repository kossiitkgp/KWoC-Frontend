import { useEffect, useState } from "react";
import Form from "../components/Form";
import { useAuthContext } from "../util/auth";
import {  
  ROUTER_PATHS,
} from "../util/constants";
import { useNavigate, useParams } from "react-router-dom";
import { makeRequest } from "../util/backend";
import { IProject } from "../util/types";
import SpinnerLoader from "../components/SpinnerLoader";

function BlogForm(props: { isEditing?: boolean }) {
  const isEditing = props.isEditing ?? false;

  const authContext = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [projectInfo, setProjectInfo] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isEditing) {
      // Redirect if registrations are closed and not editing.
      navigate(ROUTER_PATHS.HOME);
    }

    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    } else if (!authContext.isRegistered) {
      navigate(authContext.formLink);
    } else if (authContext.userData.type !== "student") {
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
    <>
      {!isEditing || projectInfo !== null || error !== null ? (
        <Form
          title={isEditing ? "Edit Blog" : "Blog Submission"}
          error={error}
          info={info}
          loading={loading}
          disabled={loading}
          fields={{
            blog_link: {
              field: "Blog Link",
              required: true,
              type: "url",
              placeholder: "",
              defaultValue: isEditing ? projectInfo?.repo_link : undefined,
            },
          }}
          onCancel={() => {
            navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
          }}
          onSubmit={async (responses) => {
            setError(null);
            setInfo(null);

            try {
              setLoading(true);
              const res = await makeRequest(
                "project",
                isEditing ? "put" : "post",
                {
                  ...responses,
                  student_username: authContext.userData.username,
                  id: isEditing ? (id ? parseInt(id) : undefined) : undefined,
                },
                authContext.jwt,
              );

              if (res.is_ok) {
                navigate(ROUTER_PATHS.STUDENT_DASHBOARD);
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
        <div className="pt-32">
          <SpinnerLoader />
        </div>
      )}
    </>
  );
}

export default BlogForm;
