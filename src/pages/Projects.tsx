import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import Fuse from "fuse.js";

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
          setProjects(response.response);
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
    <div className="flex flex-col items-center pt-28">
      <h1 className=" font-display text-5xl md:text-7xl font-bold text-center">
        Projects
      </h1>
      <div className="p-4 my-4 mx-0">
        <div className="w-full bg-none border-none">
          <input
            className="py-4 px-6 rounded-md outline-none w-[80vw] max-w-3xl border-none text-white bg-slate-900 font-semibold bg-none"
            type="text"
            placeholder="Search for projects by name or topic"
            onChange={onQueryChangeHandler}
            value={query}
          ></input>
        </div>
      </div>

      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8 items-start">
        {searchResults.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
