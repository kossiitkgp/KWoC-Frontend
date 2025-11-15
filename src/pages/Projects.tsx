import { useEffect, useState } from "react";
import "../styles/projects.css";
import { IProject } from "../util/types";
import { makeRequest } from "../util/backend";

const PROJECTS_STARTED = import.meta.env.VITE_PROJECTS_STARTED === "true";

function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [status, setStatus] = useState<"loading" | "fetched" | "failed">(
    "loading",
  );

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await makeRequest("project", "get");
        if (response.is_ok) {
          setProjects(response.response);
          setStatus("fetched");
        } else {
          console.error("Error fetching projects:", response.response);
          setStatus("failed");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setStatus("failed");
      }
    }

    if (PROJECTS_STARTED) {
      fetchProjects();
    } else {
      setStatus("fetched");
    }
  }, []);
  
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      
      {PROJECTS_STARTED ? (
        <>
          {status === "loading" && <p>Loading projects...</p>}
          {status === "failed" && <div className="error-message"><p>Failed to load projects. Please try again later.</p></div>}
          {status === "fetched" && projects.length === 0 && <p>No projects available at the moment.</p>}
          {status === "fetched" && projects.length > 0 && (
            <ul className="projects-list">
              {projects.map((project) => (
                <li key={project.id} className="project-item">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                  <p><strong>Mentor:</strong> {project.mentor.name}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="stay-tuned">Stay Tuned!</p>
      )}
    </div>
  );
}

export default Projects;
