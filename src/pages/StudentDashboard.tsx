import { useEffect, useState } from "react";
import { makeRequest } from "../util/backend";
import { IEndpointTypes } from "../util/types";
import { useAuthContext } from "../util/auth";
import { useNavigate } from "react-router-dom";
import "../styles/student-dashboard.css";
import UserCard from "../components/Dashboard/UserCard";
import { HiOutlineDocumentReport } from "react-icons/hi";
import {
  DISCORD_INVITE,
  END_EVALS_ENDED,
  MID_EVALS_ENDED,
  STUDENT_MANUAL,
} from "../util/constants";
import LinesChanged from "../components/LinesChanged";
import StudentResources from "../data/studentResources.json";
import { IoDocument } from "react-icons/io5";
import Button from "../components/Button";

type StudentDashData = IEndpointTypes["student/dashboard"]["response"];

function StudentDashboard() {
  const [data, setData] = useState<StudentDashData | null>(null);
  const [status, setStatus] = useState<"loading" | "fetched" | "failed">(
    "loading",
  );
  const auth = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (
        !auth.isAuthenticated ||
        auth.userData.type !== "student" ||
        !auth.isRegistered
      ) {
        navigate("/");
        return;
      }
      try {
        const response = await makeRequest(
          "student/dashboard",
          "get",
          null,
          auth.jwt,
        );
        if (response.is_ok) {
          setData(response.response);
          setStatus("fetched");
        } else {
          console.error(
            "Error fetching student dashboard data:",
            response.response,
          );
          setStatus("failed");
        }
      } catch (error) {
        console.error("Error fetching student dashboard data:", error);
        setStatus("failed");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="student-dash dashboard">
      {data ? (
        <>
          <UserCard username={data.username} name={data.name} auth={auth} />

          <div className="stats">
            <div className="stat-card">
              <h3>Total PRs</h3>
              <p>{data.pull_count}</p>
            </div>
            <div className="stat-card">
              <h3>Total Commits</h3>
              <p>{data.commit_count}</p>
            </div>
            <div className="stat-card">
              <h3>Lines Changed</h3>
              <LinesChanged
                lines_added={data.lines_added}
                lines_removed={data.lines_removed}
              />
            </div>
            <div className="stat-card">
              <h3>Languages Used</h3>
              <p>
                {data.languages_used.length === 0
                  ? "None"
                  : data.languages_used.join(", ")}
              </p>
            </div>
          </div>

          <div className="info">
            <div className="evaluation">
              <div className="eval">
                <div className="eval-header">
                  <HiOutlineDocumentReport />
                  <span>Mid Evaluation:</span>
                </div>
                <p className="eval-result">
                  {data?.passed_mid_evals ? (
                    <span className="passed">Passed</span>
                  ) : MID_EVALS_ENDED ? (
                    <span className="failed">Failed</span>
                  ) : (
                    <span className="pending">Pending</span>
                  )}
                </p>
              </div>

              <div className="eval">
                <div className="eval-header">
                  <HiOutlineDocumentReport />
                  <span>End Evaluation:</span>
                </div>
                <p className="eval-result">
                  {data?.passed_end_evals ? (
                    <span className="passed">Passed</span>
                  ) : END_EVALS_ENDED ||
                    (!data?.passed_mid_evals && MID_EVALS_ENDED) ? (
                    <span className="failed">Failed</span>
                  ) : (
                    <span className="pending">Pending</span>
                  )}
                </p>
              </div>
            </div>

            <div className="details">
              <h3>Projects Worked On</h3>
              {data.projects_worked.length === 0 ? (
                <p>None</p>
              ) : (
                <div className="projects-worked">
                  {data.projects_worked.map((project) => (
                    <a
                      href={project.repo_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              )}

              <h3>Merged Pull Requests</h3>
              {data.pull_count === 0 ? <p>None</p> : data.pulls.join(", ")}
            </div>
          </div>

          <h2>Resources</h2>
          <div className="resources">
            {StudentResources.map((resource) => (
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

          <h2>Other Links</h2>
          <div className="links">
            <div className="link-card">
              <h3>Projects</h3>
              <p>
                Discover exciting projects that you can contribute to and
                collaborate on. Each project is an opportunity to apply your
                skills, learn new technologies, and make a real impact.
              </p>
              <Button to="/projects" className="blue">
                View Projects
              </Button>
            </div>
            <div className="link-card">
              <h3>Student's Manual</h3>
              <p>
                Download the KWoC Student's Manual for comprehensive information
                about the program's structure, guidelines and expectations.
              </p>
              <Button to={STUDENT_MANUAL} className="blue">
                Student Manual
              </Button>
            </div>
            <div className="link-card">
              <h3>Stay Connected</h3>
              <p>
                Connect with fellow participants, mentors and organisers. Join
                our discord server to engage in discussions, seek help, and stay
                updated on the latest program announcements.
              </p>
              <Button to={DISCORD_INVITE} className="blue">
                Discord
              </Button>
            </div>
          </div>
        </>
      ) : status == "loading" ? (
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

export default StudentDashboard;
