import { IProjectDashboardInfo } from "../../util/types";
import Button from "../Button";
import { FaUsers } from "react-icons/fa";
import { FaCodeCommit, FaCodePullRequest } from "react-icons/fa6";
import "../../styles/MentorProjectCard.css";
import LinesChanged from "../LinesChanged";

interface MentorProjectCardProps extends IProjectDashboardInfo {}

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
}: MentorProjectCardProps) {
  // Calculate total activity score
  const totalActivity = commit_count + pull_count;
  const isActiveProject = totalActivity > 0;
  
  return (
    <div key={id} className="mentor-project-card">
      <div className="top">
        <h3>{name}</h3>
        <div className="status-badges">
          <span className={"status-badge " + (project_status ? "approved" : "")}>
            {project_status ? "Approved" : "Awaiting Approval"}
          </span>
          {isActiveProject && (
            <span className="activity-badge">
              Active
            </span>
          )}
        </div>
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
        <div className={`stat ${isActiveProject ? "active" : "inactive"}`}>
          <FaCodeCommit className="icon" />
          <h4 className="stat-label">Commits</h4>
          <div className="stat-value">{commit_count}</div>
        </div>
        <div className={`stat ${isActiveProject ? "active" : "inactive"}`}>
          <FaCodePullRequest className="icon" />
          <h4 className="stat-label">Pull Requests</h4>
          <div className="stat-value">{pull_count}</div>
        </div>
      </div>

      <LinesChanged lines_added={lines_added} lines_removed={lines_removed} />

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
