import projectTags from "../data/projectTags.json";
import { IProjectCard, IProjectTags } from "../util/types";

function ProjectCard({ name, description, tags, mentor }: IProjectCard) {
  return (
    <>
      <div className="p-4 rounded-md w-full h-full bg-[#0f0f27]">
        <h2 className="text-3xl font-bold text-center mb-1">{name}</h2>
        <h3 className="text-lg text-center mb-3">
          <span className="font-bold">Mentored By</span>: {mentor}
        </h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.sort().map((tag: string) => (
            <span
              style={{ backgroundColor: (projectTags as IProjectTags)[tag] }}
              className="px-3 py-1 cursor-pointer text-xs font-bold rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-2">
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
