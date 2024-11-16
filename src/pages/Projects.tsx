import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import ProjectCard from "../components/ProjectCard";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { shuffle } from "../util/shuffle";
import Fuse from "fuse.js";
import SpinnerLoader from "../components/SpinnerLoader";
import { IconContext } from "react-icons";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState<
    IEndpointTypes["project"]["response"]
  >([]);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");

  const onQueryChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const fuse = new Fuse(projects, {
    keys: ["name", "description", "tags"],
  });

  const results = fuse.search(query);

  const searchResults =
    query !== "" ? results.map((result) => result.item) : projects;

  useEffect(() => {
    makeRequest("project", "get")
      .then((response) => {
        if (response.is_ok) {
          setProjects(shuffle(response.response));
        } else {
          setError("Error fetching projects.");
          console.log(response.response);
        }
      })
      .catch((e) => {
        setError("Error fetching projects.");
        console.log(e);
      });
  }, []);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="search-container">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search for projects by name or topic"
            onChange={onQueryChangeHandler}
            value={query}
          />
          {query !== "" && (
            <button onClick={() => setQuery("")} className="search-cancel">
              <IconContext.Provider value={{ size: "1.6rem" }}>
                <MdCancel />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </div>

      {error !== null ? (
        <p className="error-message">{error}</p>
      ) : projects.length > 0 ? (
        <div className="projects-grid">
          {searchResults.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              setQuery={(query) => setQuery(query)}
            />
          ))}
        </div>
      ) : (
        <SpinnerLoader />
      )}
    </div>
  );
}

export default Projects;
