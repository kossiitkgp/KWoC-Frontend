import { useEffect, useState, useMemo } from "react";
import "../styles/projects.css";
import { IProject } from "../util/types";
import { makeRequest } from "../util/backend";
import { FaUsers } from "react-icons/fa";
import Button from "../components/Button";

const PROJECTS_STARTED = import.meta.env.VITE_PROJECTS_STARTED === "true";

function Projects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [status, setStatus] = useState<"loading" | "fetched" | "failed">(
    "loading",
  );

  const [searchText, setSearchText] = useState('');

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

  
  const filteredProjects = useMemo(() => {
    if (!searchText) {
      return projects; 
    }

    const lowercasedSearchText = searchText.toLowerCase().trim();

    return projects.filter(project => {
      // a. प्रोजेक्ट के tags (टैग्स) में सर्च करें
      const tagsMatch = project.tags.some((tag: string) => 
        tag.toLowerCase().includes(lowercasedSearchText)
      );

     
      const nameMatch = project.name.toLowerCase().includes(lowercasedSearchText);

      return tagsMatch || nameMatch;
    });
  }, [projects, searchText]);


  return (
    <div className="projects-page">
      <h1>Projects</h1>

      {PROJECTS_STARTED ? (
        <>
         
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search by tag, language, or name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="project-search-input" 
            />
          </div>
       

          {status === "loading" && <p>Loading projects...</p>}
          {status === "failed" && (
            <div className="error-message">
              <p>Failed to load projects. Please try again later.</p>
            </div>
          )}
        
          {status === "fetched" && filteredProjects.length === 0 && (
            <p>No projects found matching your search term.</p>
          )}
          
          {/* filteredProjects को रेंडर करें */}
          {status === "fetched" && filteredProjects.length > 0 && (
            <div className="projects-list">
           
              {filteredProjects.map((project) => ( 
                <div key={project.id} className="project-item">
                  <h2>{project.name}</h2>
                  <p className="description">{project.description}</p>
                  <div className="mentors">
                    <div className="mentor">
                      <FaUsers className="icon" />
                      <div className="label">Mentor:</div>
                      <a
                        href={"https://github.com/" + project.mentor.username}
                        target="_blank"
                        className="name"
                      >
                        @{project.mentor.username}
                      </a>
                    </div>

                    <div className="mentor">
                      <FaUsers className="icon" />
                      <div className="label">Co-Mentor:</div>
                      {project.secondary_mentor.username ? (
                        <a
                          href={
                            "https://github.com/" +
                            project.secondary_mentor.username
                          }
                          target="_blank"
                          className="name"
                        >
                          @{project.secondary_mentor.username}
                        </a>
                      ) : (
                        "None"
                      )}
                    </div>
                  </div>

                  <div className="tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="actions">
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="blue">View Repo</Button>
                    </a>
                    <a
                      href={project.comm_channel}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button className="green">Communication Channel</Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="stay-tuned">Stay Tuned!</p>
      )}
    </div>
  );
}

export default Projects;
