import { IoPersonSharp } from "react-icons/io5";
import { IProject } from "../util/types";

function ProjectCard({
  name,
  description,
  tags,
  mentor,
  secondary_mentor,
  comm_channel,
  repo_link,
}: IProject) {
  return (
    <>
      <div className="px-4 py-4 w-80 rounded-md bg-[#2a2a2aa3] flex flex-col justify-between">
        <div>
          <div className="flex flex-col mb-4 gap-1">
            <h3 className="font-semibold text-2xl">{name}</h3>
            <div className="flex gap-2.5">
              {tags.map((tag) => (
                <p className="rounded-md px-2.5 py-0.5 bg-primary-800 text-sm">
                  {tag}
                </p>
              ))}
            </div>
          </div>

          <p className="mb-4">{description}</p>
        </div>
        <div>
          <div className="mb-5 space-y-1">
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center text-sm font-semibold">
                <IoPersonSharp />
                Mentor:
              </div>
              <a
                href={`https://github.com/${mentor.username}`}
                className="font-bold text-base hover:underline"
              >
                @{mentor.username}
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center text-sm font-semibold">
                <IoPersonSharp />
                Secondary Mentor:
              </div>
              <a
                href={
                  secondary_mentor.username !== ""
                    ? `https://github.com/${secondary_mentor.username}`
                    : undefined
                }
                className={`font-bold text-base ${
                  secondary_mentor.username !== "" ? "hover:underline" : ""
                }`}
              >
                {secondary_mentor.username !== ""
                  ? `@${secondary_mentor.username}`
                  : "None"}
              </a>
            </div>
          </div>
          <div className="mb-2 flex justify-around font-semibold gap-2">
            <a
              href={repo_link}
              target="_blank"
              className="text-center font-semibold text-lg w-full p-1 bg-primary-700 rounded-md hover:bg-primary-800"
            >
              View Project
            </a>
            <a
              href={comm_channel}
              target="_blank"
              className="text-center font-semibold text-lg w-full p-1 bg-primary-700 rounded-md hover:bg-primary-800"
            >
              Join Channel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
