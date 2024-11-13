import { useEffect, useState } from "react";
import MENTOR_RESOURCES from "../data/mentorResources.json";
import MentorProjectCard from "../components/MentorProjectCard";
import { IEndpointTypes } from "../util/types";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../util/auth";
import { REGISTRATIONS_OPEN, ROUTER_PATHS } from "../util/constants";
import { makeRequest } from "../util/backend";
import SpinnerLoader from "../components/SpinnerLoader";
import { Profile, Resources } from "../components/DashboardElements";
import { formatPullRequest } from "../util/format";
import "../styles/MentorDashboard.css"; // Import the CSS file

function MentorDashboard() {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const [dashboard, setDashboard] = useState<
    IEndpointTypes["mentor/dashboard"]["response"] | null
  >(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type !== "mentor") {
      navigate(ROUTER_PATHS.HOME);
    }
  }, [authContext]);

  useEffect(() => {
    makeRequest("mentor/dashboard", "get", null, authContext.jwt)
      .then((res) => {
        if (res.is_ok) setDashboard(res.response);
        else setError(res.response.message);

        setIsLoading(false);
      })
      .catch(() => {
        setError("An unexpected error occurred.");
        setIsLoading(false);
      });
  }, []);

  // Calculate overall stats
  let totalPRs = 0;
  let totalCommits = 0;
  let totalProjects = 0;
  let approvedProjects = 0;

  if (dashboard !== null) {
    dashboard.projects.forEach((project) => {
      totalPRs += project.pull_count;
      totalCommits += project.commit_count;
      totalProjects += 1;
      if (project.project_status) {
        approvedProjects += 1;
      }
    });
  }

  return (
    <div className="profileContainer">
      <Profile />

      <div className="projectSection">
        <div className="projectTitle">
          <h2>PROJECTS</h2>
        </div>
        {isLoading ? (
          <SpinnerLoader />
        ) : dashboard !== null ? (
          <div className="projectGrid">
            {dashboard.projects.map((project, i) => (
              <MentorProjectCard key={i} {...project} />
            ))}
            {REGISTRATIONS_OPEN && (
              <Link to={ROUTER_PATHS.PROJECT_FORM} className="addProjectButton">
                <HiOutlineViewGridAdd size={50} />
                <div>Add Project</div>
              </Link>
            )}
          </div>
        ) : (
          <p className="text-center text-red-500">{error}</p>
        )}
      </div>

      <div className="profileSidebar">
        <div className="mb-8">
          <h3 className="statsHeader">Overall Stats</h3>
          <div>
            <div className="statsItem">
              <div className="statsIconText">
                <BiGitCommit />
                <span>Total Commits:</span>
              </div>
              <p className="statsValue">{totalCommits}</p>
            </div>
            <div className="statsItem">
              <div className="statsIconText">
                <BiGitPullRequest />
                <span>Total Pull Requests:</span>
              </div>
              <p className="statsValue">{totalPRs}</p>
            </div>
            <div className="statsItem">
              <div className="statsIconText">
                <HiOutlineViewGridAdd size={20} />
                <span>Total Projects:</span>
              </div>
              <p className="statsValue">{totalProjects}</p>
            </div>
            <div className="statsItem">
              <div className="statsIconText">
                <IoPersonSharp />
                <span>Approved Projects:</span>
              </div>
              <p className="statsValue">{approvedProjects}</p>
            </div>
          </div>
        </div>

        {dashboard !== null && (
          <div className="mb-8">
            <h3 className="statsHeader">Merged Pull Requests</h3>
            <div className="resourceList">
              {dashboard.projects.flatMap((project) => project.pulls).map((pull, index) => (
                <a key={index} href={pull} target="_blank" rel="noopener noreferrer" className="resourceLink">
                  {formatPullRequest(pull)}
                </a>
              ))}
            </div>
          </div>
        )}

        <Resources title="Mentor Resources" resources={MENTOR_RESOURCES} />
      </div>
    </div>
  );
}

export default MentorDashboard;
