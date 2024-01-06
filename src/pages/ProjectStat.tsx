import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Import useParams for accessing route parameters
import { makeRequest } from "../util/backend";
import { useAuthContext } from "../util/auth";
import { IEndpointTypes } from "../util/types";
//import { Console } from "console";

function ProjectStats() {
  console.log("abcd") 
  const authContext = useAuthContext();
  const [projectStats, setProjectStats] = useState<
    IEndpointTypes["stats/projects"]["response"] | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  // Access the project ID from the route parameters
  const { } = useParams();

  useEffect(() => {
    // Make a request to the specific project stats endpoint
    makeRequest("stats/projects", "get", null, authContext.jwt)
      .then((response) => {
        console.log(response)
        if (response.is_ok) {
          setProjectStats(response.response);
        } else {
          setError("Error fetching project stats.");
          console.log(response.response);
        }
      })
      .catch((e) => {
        setError("Error fetching project stats.");
        console.log(e);
      });
  }, []);  

  return (
    <div className="flex flex-col items-center pt-28">
      <h1 className="font-display text-5xl md:text-7xl font-bold text-center">
        Project Stats
      </h1>
      {error !== null ? (
        <p className="text-center text-red-500">{error}</p>
      ) : projectStats !== null ? (
        <div className="max-w-7xl px-8 py-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Repository Link</th>
                <th>Commit Count</th>
                <th>Pull Count</th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {projectStats.projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.repo_link}</td>
                  <td>{project.commit_count}</td>
                  <td>{project.pull_count}</td>
                  {/* Add more cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        null
      )}
    </div>
  );
}

export default ProjectStats;
