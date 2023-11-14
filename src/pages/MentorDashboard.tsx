import { useEffect, useState } from "react";
import MentorResources from "../data/mentorResources.json";
import MentorProjectCard from "../components/MentorProjectCard";
import { IEndpointTypes } from "../util/types";
import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../util/auth";
import { ROUTER_PATHS } from "../util/constants";
import { makeRequest } from "../util/backend";
import SpinnerLoader from "../components/SpinnerLoader";

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

    setIsLoading(true);
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
  }, [authContext]);

  const pulls = [];
  if (dashboard != null) {
    for (let project of dashboard.projects) pulls.push(...project.pulls);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="lg:sticky lg:self-start lg:translate-y-1/4 lg:top-28 mt-28 overflow-auto self-center px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
          <div className="w-full aspect-square bg-blue-950 rounded-full mb-2 overflow-hidden">
            <img
              className="w-full h-full block"
              src={`https://github.com/${authContext.userData.username}.png`}
            />
          </div>

          <h2 className="font-bold text-2xl text-center my-3">
            {authContext.userData.name}
            <br />
            <span className="font-medium text-lg text-gray-400">
              (@{authContext.userData.username})
            </span>
          </h2>

          <div className="flex mt-2 justify-center gap-3">
            <Link
              className="text-center py-2 px-5 py-auto h-fit text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 disabled:bg-gray-600"
              to={ROUTER_PATHS.MENTOR_FORM}
            >
              Edit Info
            </Link>
            <button
              className="text-center py-2 px-5 py-auto h-fit text-indigo-100 bg-red-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-800 disabled:bg-gray-600"
              onClick={authContext.onLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
          <div className="lg:pt-28">
            <h2 className="font-display text-6xl font-bold text-center mb-8 py-4">
              PROJECTS
            </h2>
            {isLoading ? (
              <SpinnerLoader />
            ) : dashboard !== null ? (
              <div className="flex flex-wrap justify-center gap-2 items-stretch">
                <Link
                  to={ROUTER_PATHS.PROJECT_FORM}
                  className="px-4 py-4 w-80 rounded-md bg-[#0f0f27] hover:bg-[#161632] text-3xl font-bold flex justify-center items-center"
                >
                  <BiPlus />
                  Add Project
                </Link>
                {dashboard.projects.map((project, i) => (
                  <MentorProjectCard key={i} {...project} />
                ))}
              </div>
            ) : (
              <p className="text-center text-red-500">{error}</p>
            )}
          </div>
        </div>

        <div className="lg:sticky lg:self-start lg:translate-y-1/4 lg:top-28 mt-28 overflow-auto self-center px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
          {/* <div className="mb-8">
            <h3 className="font-semibold text-2xl mb-2">
              Merged Pull Requests
            </h3>
            <div className="space-y-1">
              {pulls.length > 0
                ? pulls.map((pull) => <a href={pull}>{pull}</a>)
                : "No Pull Requests."}
            </div>
          </div> */}

          <div>
            <h3 className="font-semibold text-2xl mb-6">Mentor Resources</h3>
            <div className="space-y-4">
              {MentorResources.map((resource) => (
                <a
                  target="_blank"
                  className="block text-blue-500 hover:text-blue-600 hover:underline"
                  href={resource.url}
                >
                  <li className="list-none gap-5 flex items-center text-inherit">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-none">
                      <img
                        src={resource.avatar}
                        className="h-full w-full block"
                      />
                    </div>
                    <div className="text-inherit text-sm">
                      {resource.message}
                    </div>
                  </li>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
