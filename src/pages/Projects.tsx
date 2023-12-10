import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import ProjectCard from "../components/ProjectCard";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { shuffle } from "../util/shuffle";
import Fuse from "fuse.js";
import SpinnerLoader from "../components/SpinnerLoader";
import { IconContext } from "react-icons";

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
    <div className="flex flex-col items-center pt-28">
      <h1 className=" font-display text-5xl md:text-7xl font-bold text-center">
        Projects
      </h1>
      <div className="p-4 my-4 mx-0">
        <div className="flex py-4 px-6 rounded-md outline-none w-[80vw] max-w-3xl border-none text-white bg-slate-900 font-semibold bg-none">
          <input
            className="rounded-md outline-none w-full border-none text-white bg-slate-900 font-semibold bg-none"
            type="text"
            placeholder="Search for projects by name or topic"
            onChange={onQueryChangeHandler}
            value={query}
          ></input>
          {/* button only display while query is not empty */}
          {
            query !== "" && (
              <button onClick={() => setQuery("")}>
                <IconContext.Provider value={{ size: "1.8rem" }}>
                  <MdCancel />
                </IconContext.Provider>
              </button>
            )
          }
        </div>
      </div>

      {error !== null ? (
        <p className="text-center text-red-500">{error}</p>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 pb-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-4 px-8">
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
