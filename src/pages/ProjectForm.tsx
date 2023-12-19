import { useEffect, useState } from "react";
import Form from "../components/Form"; // Assuming Form and FormField types/interfaces exist
import { useAuthContext } from "../util/auth";
import {
  DISCORD_INVITE,
  REGISTRATIONS_OPEN,
  ROUTER_PATHS,
} from "../util/constants";
import { useNavigate, useParams } from "react-router-dom";
import { makeRequest } from "../util/backend";
import { IProject } from "../util/types";
import SpinnerLoader from "../components/SpinnerLoader";

interface ProjectFormProps {
  isEditing?: boolean;
}

function ProjectForm({ isEditing }: ProjectFormProps) {
  const editing = isEditing ?? false;

  const authContext = useAuthContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [projectInfo, setProjectInfo] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Existing useEffect logic remains unchanged
  }, [navigate, id, editing]);

  return (
    <>
      {!editing || projectInfo !== null || error !== null ? (
        <Form
          title={editing ? "Edit Project" : "Register A Project"}
          error={error}
          info={info}
          loading={loading}
          disabled={loading}
          fields={{
            // Define the structure for each field
            name: {
              field: "Project Name",
              required: true,
              type: "text",
              placeholder: "My Awesome App",
              defaultValue: editing ? projectInfo?.name : undefined,
            },
            // Add definitions for other fields similarly
            // ...
          }}
          onCancel={() => {
            navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
          }}
          onSubmit={async (responses: Record<string, any>) => {
            setError(null);
            setInfo(null);

            try {
              setLoading(true);
              // Perform submission logic with proper typing
              // ...

              return false; // Update this based on submission logic
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

export default ProjectForm;
