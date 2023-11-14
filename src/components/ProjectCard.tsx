import { IProject, IProjectTags } from "../util/types";
import projectTags from "../data/projectTags.json";

function ProjectCard({
  name,
  description,
  tags,
  mentor,
  comm_channel,
  repo_link,
  isStudentView,
}: IProject & { isStudentView: boolean }) {
  function getColor(tag: string) {
    if (tag in projectTags) {
      return (projectTags as IProjectTags)[tag];
    } else {
      const randomColorIndex = Math.floor(
        Math.random() * Object.keys(projectTags as IProjectTags).length,
      );
      const randomKey = Object.keys(projectTags as IProjectTags)[
        randomColorIndex
      ];
      return (projectTags as IProjectTags)[randomKey];
    }
  }
  return (
    <>
      <div className="p-4 rounded-md w-full h-full bg-[#0f0f27]">
        <h2 className="text-3xl font-bold text-center mb-1">{name}</h2>
        <h3 className="text-lg text-center mb-3">
          <span className="font-bold">Mentor</span>:{" "}
          <a
            className="text-primary font-semibold hover:text-primary-600 hover:underline"
            href={`https://github.com/${mentor.username}`}
          >
            {mentor.name}
          </a>
        </h3>
        <p className="mb-4 break-words line-clamp-4" title={description}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tags
            .sort()
            .slice(0, 6)
            .map((tag, i) => (
              <span
                key={i}
                style={{ backgroundColor: getColor(tag) }}
                className="px-3 py-1 cursor-pointer text-xs font-bold rounded-md"
              >
                {tag}
              </span>
            ))}
        </div>
        <div className="flex justify-center gap-2 align-bottom">
          <button
            onClick={() => window.open(repo_link, "_blank")}
            className="px-4 py-2 rounded-md bg-primary-950 hover:bg-primary-900 text-lg font-bold flex justify-center items-center"
          >
            View Project
          </button>
          {isStudentView ? (
            <button
              onClick={() => {
                window.open(comm_channel, "_blank");
              }}
              className="px-4 py-2 rounded-md bg-primary-950 hover:bg-primary-900 text-lg font-bold flex justify-center items-center"
            >
              Join Channel
            </button>
          ) : (
            <button
              onClick={() => {
                // TODO
              }}
              className="px-4 py-2 rounded-md bg-primary-950 hover:bg-primary-900 text-lg font-bold flex justify-center items-center"
            >
              Edit Project
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
