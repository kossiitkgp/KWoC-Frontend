import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { useMemo } from "react";
import { IProjectDashboardInfo } from "../util/types";
import { ROUTER_PATHS } from "../util/constants";
import { Link } from "react-router-dom";
import { useAuthContext } from "../util/auth";

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
    <div className="mentor-project-card">
      {/* Project Title and Status */}
      <div className="project-header">
        <h4 className="project-title">{name}</h4>
        {project_status ? (
          <span className="status-approved">Approved</span>
        ) : (
          <span className="status-awaiting">Awaiting Approval</span>
        )}
      </div>

      {/* Mentor and Commit Info Section */}
      <div className="info-container">
          <div className="mentor">
            <IoPersonSharp size={16} />
            <span>Mentor:</span>
            <a
              href={`https://github.com/${mentor.username}`}
              className="mentor-link"
            >
              @{mentor.username}
            </a>
          </div>

          <div className="mentor">
            <IoPersonSharp size={16} />
            <span>Co-Mentor:</span>
            <a
              href={
                secondary_mentor.username !== ""
                  ? `https://github.com/${secondary_mentor.username}`
                  : "#"
              }
              className={`co-mentor-link ${
                secondary_mentor.username === "" ? "no-co-mentor" : ""
              }`}
            >
              {secondary_mentor.username !== ""
                ? `@${secondary_mentor.username}`
                : "None"}
            </a>
          </div>

        {/* Commit and Pull Request Info */}
        <div className="commit-pull-info">
          <div className="info-item">
            <BiGitCommit size={16} />
            <span>Merged Commits:</span>
            <p>{commit_count}</p>
          </div>
          <div className="info-item">
            <BiGitPullRequest size={16} />
            <span>Merged PRs:</span>
            <p>{pull_count}</p>
          </div>
        </div>
      </div>

      {/* Lines Added/Removed */}
      <div className="lines-changed">
        <div className="lines-bar">
          <span className="lines-added">+{lines_added}</span>
          <div className="bar">
            <div
              style={{ flex: addedPercentage + "%" }}
              className="added-bar"
            ></div>
            <div
              style={{ flex: removedPercentage + "%" }}
              className="removed-bar"
            ></div>
          </div>
          <span className="lines-removed">-{lines_removed}</span>
        </div>
      </div>

      {/* Project Links */}
      <div className="project-links">
        <a href={repo_link} target="_blank" className="view-project-btn">
          View
        </a>
        {mentor.username === authContext.userData.username && (
          <Link
            to={ROUTER_PATHS.PROJECT_EDIT_FORM_NOSUFFIX + id.toString()}
            className="edit-project-btn"
          >
            Edit
          </Link>
        )}
      </div>
    </div>
  );
}

export default MentorProjectCard;
