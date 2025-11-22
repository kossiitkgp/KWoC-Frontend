import { useEffect, useState } from "react";
import "../styles/admin.css";
import { makeRequest } from "../util/backend";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import { IProject } from "../util/types";
import Button from "../components/Button";

function AdminDashboard() {
  const [unapproved, setUnapproved] = useState<IProject[]>([]);
  const [errMessage, setErrMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const auth = useAuthContext();
  const navigate = useNavigate();

  const updateUnapprovedProjects = () => {
    makeRequest("project/unapproved", "get", null, auth.jwt)
      .then((data) => {
        if (data.is_ok) {
          setUnapproved(data.response);
        } else {
          console.error("Failed to fetch unapproved users");
        }
      })
      .catch((error) => {
        console.error("Error fetching unapproved users:", error);
      });
  };

  const approveProject = async (projectId: number) => {
    const res = await makeRequest(
      `project/${projectId}/approve`,
      "post",
      null,
      auth.jwt,
    );
    if (res.is_ok) {
      updateUnapprovedProjects();
      setSuccessMessage("Project approved successfully.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      console.error("Failed to approve project", res.response.message);
      setErrMessage(res.response.message);
    }
  };

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/");
      return;
    }

    updateUnapprovedProjects();
  }, [auth]);

  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      <p className="subtitle">Approve newly registered projects.</p>

      {errMessage && <p className="error-message">{errMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="project-list">
        {unapproved.length === 0 ? (
          <p>No unapproved projects.</p>
        ) : (
          unapproved.map((project) => (
            <div key={project.id} className="project-card">
              <div className="info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>
                  <strong>Mentor:</strong> {project.mentor.name} (
                  <a
                    className="mentor-link"
                    href={"https://github.com/" + project.mentor.username}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @{project.mentor.username}
                  </a>
                  )
                </p>
              </div>
              <div className="actions">
                <a href={project.repo_link} target="_blank" rel="noreferrer">
                  <Button className="blue">View Repo</Button>
                </a>
                <Button
                  className="green"
                  onClick={() => approveProject(project.id)}
                >
                  Approve
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
