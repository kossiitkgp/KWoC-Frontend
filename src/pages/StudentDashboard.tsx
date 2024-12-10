import { Link, useNavigate } from "react-router-dom";
import {
  DISCORD_INVITE,
  END_EVALS_ENDED,
  MID_EVALS_ENDED,
  REPORT_SUBMISSION_OPEN,
  ROUTER_PATHS,
  STUDENT_MANUAL_LINK,
} from "../util/constants";
import { useAuthContext } from "../util/auth";
import STUDENT_RESOURCES from "../data/studentResources.json";
import { useEffect, useState } from "react";
import { Profile, Resources } from "../components/DashboardElements";
import { IEndpointTypes } from "../util/types";
import { makeRequest } from "../util/backend";
import SpinnerLoader from "../components/SpinnerLoader";
import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { MdOutlineDifference } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { formatPullRequest } from "../util/format";
import ReportForm from "../components/ReportForm";
import "../styles/StudentDashboard.css";

function StudentDashboard() {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const [dashboard, setDashboard] = useState<
    IEndpointTypes["student/dashboard"]["response"] | null
  >(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type === "mentor") {
      navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
    }

    if (authContext.userData.type !== "student") {
      navigate(ROUTER_PATHS.HOME);
    }
  }, [authContext]);

  useEffect(() => {
    makeRequest("student/dashboard", "get", null, authContext.jwt)
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

  // Lines changed percentages
  let totalLinesChanged =
    dashboard !== null ? dashboard.lines_added + dashboard.lines_removed : 0;
  let addedPercentage =
    dashboard !== null
      ? totalLinesChanged === 0
        ? 0
        : dashboard.lines_added / totalLinesChanged
      : 0;
  let removedPercentage =
    dashboard !== null
      ? totalLinesChanged === 0
        ? 0
        : dashboard.lines_removed / totalLinesChanged
      : 0;

  // Languages used and projects
  let languages_used = dashboard === null ? [] : dashboard.languages_used;

  return (
    <div className="screen-cont">
      <div className="start-cont">
        <Profile />
        <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
          <div className="pt-28 max-w-5xl mx-auto px-4">
            {REPORT_SUBMISSION_OPEN && dashboard?.passed_end_evals && (
              <div className="mb-5">
                <ReportForm currentLink={dashboard.blog_link} />
              </div>
            )}

            <div className="all-cont">
              <div className="w-[50%]">
                {isLoading ? (
                  <SpinnerLoader />
                ) : error !== null ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : (
                  <div className="stat-cont">
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <BiGitPullRequest />
                        <span>Total Pull Requests:</span>
                      </div>
                      <p style={{ fontWeight: "700", fontSize: "1rem" }}>
                        {dashboard?.pull_count}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <BiGitCommit />
                        <span>Total Commits:</span>
                      </div>
                      <p style={{ fontWeight: "700", fontSize: "1rem" }}>
                        {dashboard?.commit_count}
                      </p>
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          fontWeight: "600",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <MdOutlineDifference />
                        <span>Lines Changed:</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            flex: "none",
                            color: "#2F855A",
                            fontWeight: "700",
                          }}
                        >
                          + {dashboard?.lines_added}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            margin: "0 0.5rem",
                          }}
                        >
                          <div
                            style={{
                              flex: `${addedPercentage}%`,
                              border: "2px solid #2F855A",
                            }}
                          ></div>
                          <div
                            style={{
                              flex: `${removedPercentage}%`,
                              border: "2px solid #C53030",
                            }}
                          ></div>
                        </div>
                        <span
                          style={{
                            flex: "none",
                            color: "#C53030",
                            fontWeight: "700",
                          }}
                        >
                          - {dashboard?.lines_removed}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <FaCode />
                        <span>Languages Used:</span>
                      </div>
                      <p style={{ fontWeight: "700", fontSize: "0.875rem" }}>
                        {languages_used.length > 0
                          ? languages_used.join(", ")
                          : "None"}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                {isLoading ? (
                  <SpinnerLoader />
                ) : error !== null ? (
                  <p style={{ textAlign: "center", color: "#f56565" }}>
                    {error}
                  </p>
                ) : (
                  <div className="eval-cont">
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <HiOutlineDocumentReport />
                        <span>Mid Evaluation:</span>
                      </div>
                      <p style={{ fontWeight: "700", fontSize: "1rem" }}>
                        {dashboard?.passed_mid_evals ? (
                          <span style={{ color: "#68D391" }}>Passed</span>
                        ) : MID_EVALS_ENDED ? (
                          <span style={{ color: "#F56565" }}>Failed</span>
                        ) : (
                          <span style={{ color: "#F6E05E" }}>Pending</span>
                        )}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          fontWeight: "600",
                        }}
                      >
                        <HiOutlineDocumentReport />
                        <span>End Evaluation:</span>
                      </div>
                      <p style={{ fontWeight: "700", fontSize: "1rem" }}>
                        {dashboard?.passed_end_evals ? (
                          <span style={{ color: "#68D391" }}>Passed</span>
                        ) : END_EVALS_ENDED ? (
                          <span style={{ color: "#F56565" }}>Failed</span>
                        ) : END_EVALS_ENDED || (!dashboard?.passed_mid_evals && MID_EVALS_ENDED) ? (
                          <span style={{ color: "#F56565" }}>Failed</span>
                        ) : (
                          <span style={{ color: "#F6E05E" }}>Pending</span>
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="card-cont">
              <div
                className="card-item"
                style={{
                  marginBottom: "2rem",
                  padding: "1rem 1rem 1rem 1rem",
                  backgroundColor: "#2d3748",
                  borderRadius: "0.375rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "display",
                    fontSize: "1.875rem",
                    fontWeight: "700",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  Projects
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    textAlign: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  Discover exciting projects that you can contribute to and
                  collaborate on. Each project is an opportunity to apply your
                  skills, learn new technologies, and make a real impact.
                </p>
                <Link
                  to={ROUTER_PATHS.PROJECTS_LIST}
                  style={{
                    color: "white",
                    display: "inline-block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    outline: "none",
                    padding: "0.625rem 1.25rem",
                    backgroundColor: "#2b6cb0",
                    borderRadius: "0.375rem",
                    fontWeight: "500",
                    fontSize: "0.875rem",
                    textAlign: "center",
                    border: "1px solid #3182ce",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.backgroundColor =
                      "#2b6cb0")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.backgroundColor =
                      "#3182ce")
                  }
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 4px rgba(56, 189, 248, 0.5)")
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                >
                  List of Projects
                </Link>
              </div>

              <div
                className="card-item"
                style={{
                  marginBottom: "2rem",
                  padding: "1rem 1rem 1rem 1rem",
                  backgroundColor: "#2d3748",
                  borderRadius: "0.375rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "display",
                    fontSize: "1.875rem",
                    fontWeight: "700",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  Student Manual
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    textAlign: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  Student Manual Download the KWoC Student Manual for
                  comprehensive information about the program structure,
                  guidelines, and expectations. This manual is your go-to guide
                  for a smooth and successful journey through KWoC.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={STUDENT_MANUAL_LINK}
                  style={{
                    color: "white",
                    display: "inline-block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    outline: "none",
                    padding: "0.625rem 1.25rem",
                    backgroundColor: "#2b6cb0",
                    borderRadius: "0.375rem",
                    fontWeight: "500",
                    fontSize: "0.875rem",
                    textAlign: "center",
                    border: "1px solid #3182ce",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.backgroundColor =
                      "#2b6cb0")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.backgroundColor =
                      "#3182ce")
                  }
                  onFocus={(e) =>
                    (e.target.style.boxShadow =
                      "0 0 0 4px rgba(56, 189, 248, 0.5)")
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                >
                  Student Manual
                </a>
              </div>

              <div
                className="card-item"
                style={{
                  marginBottom: "2rem",
                  padding: "1rem 1rem 1rem 1rem",
                  backgroundColor: "#2d3748",
                  borderRadius: "0.375rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontFamily: "display",
                    fontSize: "1.875rem",
                    fontWeight: "700",
                    textAlign: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  Stay Connected
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    textAlign: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  Stay Connected Connect with fellow participants, mentors, and
                  organizers. Join our [Platform/Community Name] to engage in
                  discussions, seek help, and stay updated on the latest program
                  announcements.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <Link
                    to={DISCORD_INVITE}
                    style={{
                      color: "white",
                      display: "inline-block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      outline: "none",
                      padding: "0.625rem 1.25rem",
                      backgroundColor: "#2b6cb0",
                      borderRadius: "0.375rem",
                      fontWeight: "500",
                      fontSize: "0.875rem",
                      textAlign: "center",
                      border: "1px solid #3182ce",
                      cursor: "pointer",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.backgroundColor =
                        "#2b6cb0")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.backgroundColor =
                        "#3182ce")
                    }
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 4px rgba(56, 189, 248, 0.5)")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  >
                    Discord Server
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="end-cont"
        style={{
          padding: "1.5rem",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dashboard !== null && (
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Projects Worked On
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.125rem",
              }}
            >
              {dashboard.projects_worked.length > 0
                ? dashboard.projects_worked.map(({ name, repo_link }, i) => (
                    <a
                      key={i}
                      href={repo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#2b6cb0", // primary color
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.color = "#3182ce";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.color = "#2b6cb0";
                      }}
                      onFocus={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onBlur={(e) => (e.target.style.textDecoration = "none")}
                    >
                      {name}
                    </a>
                  ))
                : "None"}
            </div>
          </div>
        )}

        {dashboard !== null && (
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              Merged Pull Requests
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.125rem",
              }}
            >
              {dashboard.pulls.length > 0
                ? dashboard.pulls.map((pull, i) => (
                    <a
                      key={i}
                      href={pull}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#2b6cb0", // primary color
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.color = "#3182ce";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLAnchorElement;
                        target.style.color = "#2b6cb0";
                      }}
                      onFocus={(e) =>
                        (e.target.style.textDecoration = "underline")
                      }
                      onBlur={(e) => (e.target.style.textDecoration = "none")}
                    >
                      {formatPullRequest(pull)}
                    </a>
                  ))
                : "None"}
            </div>
          </div>
        )}

        <Resources title="Student Resources" resources={STUDENT_RESOURCES} />
      </div>
    </div>
  );
}

export default StudentDashboard;
