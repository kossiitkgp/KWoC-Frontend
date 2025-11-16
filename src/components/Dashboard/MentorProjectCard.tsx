import { IProjectDashboardInfo } from "../../util/types";
import { useMemo } from "react";
import { useAuthContext } from "../../util/auth";
import Button from "../Button";
import { FaUsers } from "react-icons/fa";
import { FaCodeCommit, FaCodePullRequest } from "react-icons/fa6";
import "../../styles/MentorProjectCard.css";

function MentorProjectCard({
  id,
  name,
  project_status,
  lines_added = 0,
  lines_removed = 0,
  commit_count = 0,
  pull_count = 0,
  repo_link,
  mentor,
  tags,
  description,
  secondary_mentor,
}: IProjectDashboardInfo) {
  const totalLinesChanged = useMemo(
    () => lines_added + lines_removed,
    [lines_added, lines_removed],
  );
  const addedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 0 : (lines_added / totalLinesChanged) * 100,
    [lines_added, totalLinesChanged],
  );
  const removedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 0 : (lines_removed / totalLinesChanged) * 100,
    [lines_removed, totalLinesChanged],
  );

  const authContext = useAuthContext();

  return (
    <div key={id} className="project-card">
      <div className="top">
        <h3>{name}</h3>
        <span
          className={
            "status-badge " + (project_status ? "approved" : "")
          }
        >
          {project_status ? "Approved" : "Awaiting Approval"}
        </span>
      </div>
      <p className="description">{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="mentors">
        <div className="mentor">
          <FaUsers className="icon" />
          <div className="label">Mentor:</div>
          <a
            href={"https://github.com/" + mentor.username}
            target="_blank"
            className="name"
          >
            @{mentor.username}
          </a>
        </div>

        <div className="mentor">
          <FaUsers className="icon" />
          <div className="label">Co-Mentor:</div>
          {secondary_mentor.username ? (
            <a
              href={"https://github.com/" + secondary_mentor.username}
              target="_blank"
              className="name"
            >
              @{secondary_mentor.username}
            </a>
          ) : (
            "None"
          )}
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <FaCodeCommit className="icon" />
          <h4 className="stat-label">Commits</h4>
          <div className="stat-value">{commit_count}</div>
        </div>
        <div className="stat">
          <FaCodePullRequest className="icon" />
          <h4 className="stat-label">Pull Requests</h4>
          <div className="stat-value">{pull_count}</div>
        </div>
      </div>

      {/* line visual of lines changed */}

      <div className="actions">
        <Button
          className="edit-button"
          variant="blue"
          to={`/project/form/${id}`}
        >
          Edit
        </Button>
        <a href={repo_link} className="open-button" target="_blank">
          <Button variant="green">Open</Button>
        </a>
      </div>
    </div>
  );
}

export default MentorProjectCard;
