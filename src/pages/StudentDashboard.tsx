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
        console.log(res);
        if (res.is_ok) setDashboard(res.response);
        else setError(res.response.message);

        setIsLoading(false);
      })
      .catch(() => {
        setError("An unexpected error occurred.");
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
        <div className="lg:pt-28 max-w-5xl mx-auto px-4">
          <div className="dashboard-content flex items-center justify-center">
            <div className="flex">
              <Profile />
              <div className="p-6 rounded-lg shadow-md mb-6 mr-6">
                <div className="lg:mt-20">
                  {isLoading ? (
                    <SpinnerLoader />
                  ) : error !== null ? (
                    <p className="text-center text-red-500">{error}</p>
                  ) : (
                    <>
                      <p className="mb-2 text-green-300">
                        Lines Added: {dashboard?.lines_added}
                      </p>
                      <p className="mb-2 text-red-500">
                        Lines Removed: {dashboard?.lines_removed}
                      </p>
                      <p className="mb-2">
                        Pull Count: {dashboard?.pull_count}
                      </p>
                      <p className="mb-2">
                        Commit Count: {dashboard?.commit_count}
                      </p>
                      {dashboard?.passed_mid_evals ? (
                        <p className="mb-2 text-green-300">
                          Mid Evaluation Status: PASSED
                        </p>
                      ) : (
                        <p className="mb-2 text-red-500">
                          Mid Evaluation Status: Pending
                        </p>
                      )}
                      <p className="mb-2 ">
                        Languages Used:{" "}
                        {dashboard?.languages_used.slice(0, 3).join(", ")}
                      </p>
                      <p className="mb-2 ">
                        Projects:{" "}
                        {dashboard?.projects_worked
                          .map((project) => project.name)
                          .join(", ")}
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md lg:mt-20">
                <Resources
                  title="Student Resources"
                  resources={STUDENT_RESOURCES}
                />
              </div>
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
    </div>
  );
}

export default StudentDashboard;
