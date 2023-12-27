import { Link, useNavigate } from "react-router-dom";
import {
  DISCORD_INVITE,
  ROUTER_PATHS,
  SLACK_INVITE,
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
  let languages_used =
    dashboard === null
      ? []
      : dashboard.languages_used.filter((lang) => lang !== "");
  let projects =
    dashboard === null
      ? []
      : dashboard.projects_worked.filter((proj) => proj.repo_link !== "");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Profile />
      <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
        <div className="pt-28 max-w-5xl mx-auto px-4">
          <div className="flex gap-5 rounded-lg shadow-md mb-6 mr-6">
            <div className="w-[50%]">
              {isLoading ? (
                <SpinnerLoader />
              ) : error !== null ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <>
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center font-semibold">
                      <BiGitPullRequest />
                      <span>Total Pull Requests:</span>
                    </div>
                    <p className="font-bold text-base">
                      {dashboard?.pull_count}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center font-semibold">
                      <BiGitCommit />
                      <span>Total Commits:</span>
                    </div>
                    <p className="font-bold text-base">
                      {dashboard?.commit_count}
                    </p>
                  </div>

                  <div>
                    <div className="flex gap-2 items-center font-semibold">
                      <MdOutlineDifference />
                      <span>Lines Changed:</span>
                    </div>
                    <div className="w-full flex items-center">
                      <span className="flex-none text-green-700 font-bold">
                        + {dashboard?.lines_added}
                      </span>
                      <div className="w-full mx-2 flex">
                        <div
                          style={{ flex: addedPercentage + "%" }}
                          className="border-2 border-green-700"
                        ></div>
                        <div
                          style={{ flex: removedPercentage + "%" }}
                          className="border-2 border-red-700"
                        ></div>
                      </div>
                      <span className="flex-none text-red-700 font-bold">
                        - {dashboard?.lines_removed}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex gap-2 items-center font-semibold min-w-fit">
                      <FaCode />
                      <span>Languages Used:</span>
                    </div>
                    <p className="font-bold text-base">
                      {languages_used.length > 0
                        ? languages_used.join(", ")
                        : "None"}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div>
              {isLoading ? (
                <SpinnerLoader />
              ) : error !== null ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <>
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center font-semibold">
                      <HiOutlineDocumentReport />
                      <span>Mid Evaluation:</span>
                    </div>
                    <p className="font-bold text-base">
                      {dashboard?.passed_mid_evals ? <span className="text-green-300">Passed</span> : <span className="text-yellow-400">Pending</span>}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center font-semibold">
                      <HiOutlineDocumentReport />
                      <span>End Evaluation:</span>
                    </div>
                    <p className="font-bold text-base">
                      {dashboard?.passed_end_evals ? <span className="text-green-300">Passed</span> : <span className="text-yellow-400">Pending</span>}
                    </p>
                  </div>
                </>
              )
              }
            </div>
          </div>

          <div className="mb-8 px-4 py-4 lg:px-10 bg-primary-800 rounded-md flex flex-col">
            <h3 className="font-display text-3xl font-bold text-center mb-5">
              Projects
            </h3>
            <p className="text-lg text-center mb-3">
              Discover exciting projects that you can contribute to and
              collaborate on. Each project is an opportunity to apply your
              skills, learn new technologies, and make a real impact.
            </p>
            <Link
              to={ROUTER_PATHS.PROJECTS_LIST}
              className="text-white w-fit mx-auto focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-primary-700 hover:bg-primary-600 focus:ring-primary-600 border-primary-600"
            >
              List of Projects
            </Link>
          </div>
          <div className="mb-8 px-4 py-4 lg:px-10 bg-primary-800 rounded-md flex flex-col">
            <h3 className="font-display text-3xl font-bold text-center mb-5">
              Student Manual
            </h3>
            <p className="text-lg text-center mb-3">
              Student Manual Download the KWoC Student Manual for comprehensive
              information about the program structure, guidelines, and
              expectations. This manual is your go-to guide for a smooth and
              successful journey through KWoC.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={STUDENT_MANUAL_LINK}
              className="text-white w-fit mx-auto focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-primary-700 hover:bg-primary-600 focus:ring-primary-600 border-primary-600"
            >
              Student Manual
            </a>
          </div>
          <div className="mb-8 px-4 py-4 lg:px-10 bg-primary-800 rounded-md flex flex-col">
            <h3 className="font-display text-3xl font-bold text-center mb-5">
              Stay Connected
            </h3>
            <p className="text-lg text-center mb-3">
              Stay Connected Connect with fellow participants, mentors, and
              organizers. Join our [Platform/Community Name] to engage in
              discussions, seek help, and stay updated on the latest program
              announcements.
            </p>
            <div className="flex justify-center gap-4 mx-auto">
              <Link
                to={SLACK_INVITE}
                className="text-white w-fit mx-auto focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-primary-700 hover:bg-primary-600 focus:ring-primary-600 border-primary-600"
              >
                Slack Workspace
              </Link>
              <Link
                to={DISCORD_INVITE}
                className="text-white w-fit mx-auto focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-primary-700 hover:bg-primary-600 focus:ring-primary-600 border-primary-600"
              >
                Discord Server
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg shadow-md lg:mt-20 flex flex-col">
        {dashboard !== null && (
          <div className="mb-8">
            <h3 className="font-semibold text-2xl mb-2">
              Projects Worked On
            </h3>
            <div className="space-y-1 flex flex-col">
              {projects.length > 0 ? projects
                .map(({ name, repo_link }, i) => (
                  <a
                    key={i}
                    href={repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-600 hover:underline"
                  >
                    {name}
                  </a>
                )) : 'None'}
            </div>
          </div>
        )}

        {dashboard !== null && (
          <div className="mb-8">
            <h3 className="font-semibold text-2xl mb-2">
              Merged Pull Requests
            </h3>
            <div className="space-y-1 flex flex-col">
              {dashboard.pulls
                .map((pull, i) => (
                  <a
                    key={i}
                    href={pull}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-600 hover:underline"
                  >
                    {pull
                      .replace("https://github.com/", "")
                      .replace("pull/", "")
                      .replace(/\/\d/, "#")}
                  </a>
                ))}
            </div>
          </div>
        )}

        <Resources
          title="Student Resources"
          resources={STUDENT_RESOURCES}
        />
      </div>
    </div>
  );
}

export default StudentDashboard;
