import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { useAuthContext } from "../util/auth";
import { Link, useNavigate } from "react-router-dom";
import "../styles/mentor-dashboard.css";
import UserCard from "../components/Dashboard/UserCard";
import { FaPlus } from "react-icons/fa";
import { MENTOR_MANUAL } from "../util/constants";
import MentorProjectCard from "../components/Dashboard/MentorProjectCard";
import { FaCodeCommit, FaCodePullRequest } from "react-icons/fa6";
import { IoApps, IoAppsOutline, IoDocument } from "react-icons/io5";
import MentorResources from "../data/mentorResources.json";
import kwoc_logo from "../assets/kwoc_logo.png";

const MENTOR_REG_OPEN = import.meta.env.VITE_MENTOR_REG_OPEN === "true";
type MentorDashData = IEndpointTypes["mentor/dashboard"]["response"];

function MentorDashboard(): JSX.Element {
  const [data, setData] = useState<MentorDashData | null>(null);
  const [status, setStatus] = useState<"loading" | "fetched" | "failed">(
    "loading",
  );
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (
        !auth.isAuthenticated ||
        auth.userData.type !== "mentor" ||
        !auth.isRegistered
      ) {
        navigate("/");
        return;
      }
      try {
        const response = await makeRequest(
          "mentor/dashboard",
          "get",
          null,
          auth.jwt,
        );
        if (response.is_ok) {
          setData(response.response);
          setStatus("fetched");
        } else {
          console.error(
            "Error fetching mentor dashboard data:",
            response.response,
          );
          setStatus("failed");
        }
      } catch (error) {
        console.error("Error fetching mentor dashboard data:", error);
        setStatus("failed");
      }
    }

    fetchData();
  }, [auth, navigate]);

  const commit_count =
    data?.projects.reduce(
      (acc, project) => acc + (project.commit_count || 0),
      0,
    ) || 0;
  const pull_count =
    data?.projects.reduce(
      (acc, project) => acc + (project.pull_count || 0),
      0,
    ) || 0;

  return (
    <div className="mentor-dash dashboard">
      {data ? (
        <>
          <UserCard username={data.username} name={data.name} auth={auth} />

          <h2>Your Projects</h2>
          {
            <div className="projects-list">
              {data.projects.map((project) => (
                <MentorProjectCard key={project.id} {...project} />
              ))}
              {MENTOR_REG_OPEN && (
                <Link
                  to="/project/form"
                  className="mentor-project-card add-project-card"
                >
                  <FaPlus className="icon" size="30px" />
                  <h3>Add a Project</h3>
                </Link>
              )}
            </div>
          }
          {!MENTOR_REG_OPEN && data.projects.length === 0 && <p>Stay tuned!</p>}

          <h2>Statistics</h2>
          <div className="stats">
            <div className="stat">
              <FaCodeCommit className="icon" />
              <h4 className="stat-label">Total Commits</h4>
              <div className="stat-value">{commit_count?.toLocaleString()}</div>
            </div>
            <div className="stat">
              <FaCodePullRequest className="icon" />
              <h4 className="stat-label">Total Pull Requests</h4>
              <div className="stat-value">{pull_count?.toLocaleString()}</div>
            </div>
            <div className="stat">
              <IoApps className="icon" />
              <h4 className="stat-label">Total Projects</h4>
              <div className="stat-value">
                {data.projects.length.toLocaleString()}
              </div>
            </div>
            <div className="stat">
              <IoAppsOutline className="icon" />
              <h4 className="stat-label">Total Approved Projects</h4>
              <div className="stat-value">
                {
                  data.projects.filter((project) => project.project_status)
                    .length
                }
              </div>
            </div>
          </div>

          <h2>Resources</h2>
          <div className="resources">
            <a href={MENTOR_MANUAL} target="_blank" rel="noreferrer">
              <div className="resource">
                <img src={kwoc_logo} alt="KWoC Logo" />
                <p>
                  <strong>KWoC Mentor Manual</strong>
                </p>
              </div>
            </a>
            {MentorResources.map((resource) => (
              <a
                href={resource.url}
                key={resource.message}
                target="_blank"
                rel="noreferrer"
              >
                <div className="resource">
                  {resource.avatar ? (
                    <img src={resource.avatar} alt={resource.message} />
                  ) : (
                    <IoDocument className="icon" size="30px" />
                  )}
                  <p>{resource.message}</p>
                </div>
              </a>
            ))}
          </div>
        </>
      ) : status === "loading" ? (
        <p>Loading your dashboard...</p>
      ) : (
        <div className="error-message">
          <h2>Something went wrong.</h2>
          <p>Please try again later.</p>
        </div>
      )}
    </div>
  );
}

export default MentorDashboard;
