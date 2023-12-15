import { useEffect, useState } from "react";
import MENTOR_RESOURCES from "../data/mentorResources.json";
import MentorProjectCard from "../components/MentorProjectCard";
import { IEndpointTypes } from "../util/types";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../util/auth";
import { REGISTRATIONS_OPEN, ROUTER_PATHS } from "../util/constants";
import { makeRequest } from "../util/backend";
import SpinnerLoader from "../components/SpinnerLoader";
import { Profile, Resources } from "../components/DashboardElements";

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

  const pulls = [];
  if (dashboard != null) {
    for (let project of dashboard.projects) pulls.push(...project.pulls);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Profile />

        <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
          <div className="lg:pt-28">
            <h2 className="font-display text-6xl font-bold text-center mb-8 py-4">
              PROJECTS
            </h2>
            {isLoading ? (
              <SpinnerLoader />
            ) : dashboard !== null ? (
              <div className="flex flex-wrap justify-center gap-5 items-stretch">
                {dashboard.projects.map((project, i) => (
                  <MentorProjectCard key={i} {...project} />
                ))}
                {REGISTRATIONS_OPEN && (
                  <Link
                    to={ROUTER_PATHS.PROJECT_FORM}
                    className="px-4 py-4 w-80 rounded-md bg-primary-700 hover:bg-primary-800 text-3xl font-bold flex flex-row-reverse md:flex-col gap-3 justify-center items-center"
                  >
                    <HiOutlineViewGridAdd size={50} />
                    <div>Add Project</div>
                  </Link>
                )}
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

          <Resources title="Mentor Resources" resources={MENTOR_RESOURCES} />
        </div>
      </div>
    </>
  );
}

export default MentorDashboard;
