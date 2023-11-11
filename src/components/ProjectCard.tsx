import projectTags from "../data/projectTags.json";
import { IProject, IProjectTags } from "../util/types";

function ProjectCard({ name, description, tags, mentor }: IProject) {
  return (
    <>
      <div className="p-4 rounded-md w-full h-full bg-[#0f0f27]">
        <h2 className="text-3xl font-bold text-center mb-1">{name}</h2>
        <h3 className="text-lg text-center mb-3">
          <span className="font-bold">Mentor</span>:{" "}
          <a
            className="text-blue-500 font-semibold hover:text-blue-600 hover:underline"
            href={`https://github.com/${mentor.username}`}
          >
            {mentor.name}
          </a>
        </h3>
        <p className="mb-4 break-words">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tags.sort().slice(0, 6).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 cursor-pointer text-s font-bold rounded-md bg-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-2 align-bottom">
          <button className="px-4 py-2 rounded-md bg-blue-950 hover:bg-blue-900 text-lg font-bold flex justify-center items-center">
            View Project
          </button>
          <button className="px-4 py-2 rounded-md bg-blue-950 hover:bg-blue-900 text-lg font-bold flex justify-center items-center">
            Join Channel
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
