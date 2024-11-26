import { IoPersonSharp } from "react-icons/io5";
import { IProject } from "../util/types";
import "../styles/ProjectCard.css";

function ProjectCard({
  project,
  setQuery,
}: {
  project: IProject;
  setQuery: (query: string) => void;
}) {
  const {
    name,
    description,
    tags,
    mentor,
    secondary_mentor,
    comm_channel,
    repo_link,
  } = project;

  return (
    <div className="project-card">
      <div>
        <div className="flex flex-col mb-4 gap-1">
          <h3>{name}</h3>
          <div className="tags">
            {tags
              .filter((tag) => tag.length > 0)
              .map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(tag)}
                  className="tag-button"
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>

        <p>{description}</p>
      </div>
      <div>
        <div className="mentor-section">
          <div className="mentor">
            <IoPersonSharp />
            <span>Mentor:</span>
            <a href={`https://github.com/${mentor.username}`}>
              @{mentor.username}
            </a>
          </div>
          <div className="co-mentor">
            <IoPersonSharp />
            <span>Co-Mentor:</span>
            <a
              href={
                secondary_mentor.username !== ""
                  ? `https://github.com/${secondary_mentor.username}`
                  : undefined
              }
              className={secondary_mentor.username === "" ? "disabled" : ""}
            >
              {secondary_mentor.username !== ""
                ? `@${secondary_mentor.username}`
                : "None"}
            </a>
          </div>
        </div>
        <div className="buttons">
          <a href={repo_link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={comm_channel} target="_blank" rel="noopener noreferrer">
            Join Channel
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
