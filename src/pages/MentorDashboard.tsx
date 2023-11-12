import { useEffect, useState } from "react";
import MentorResources from "../data/mentorResources.json";
import MentorProjectCard from "../components/MentorProjectCard";
import { IEndpointTypes } from "../util/types";
import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../util/auth";
import { ROUTER_PATHS } from "../util/constants";
import { makeRequest } from "../util/backend";

function MentorDashboard() {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const [dashboard, setDashboard] = useState<
    IEndpointTypes["mentor/dashboard"]["response"] | null
  >(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type !== "mentor") {
      navigate(ROUTER_PATHS.HOME);
    }

    makeRequest("mentor/dashboard", "get", null, authContext.jwt)
      .then((res) => {
        if (res.is_ok) setDashboard(res.response);
        else setError(res.response.message);
      })
      .catch(() => setError("An unexpected error occurred."));
  }, [authContext]);

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="lg:sticky lg:self-start lg:top-28 mt-28 overflow-auto self-center px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
          <div className="w-full aspect-square bg-blue-950 rounded-full mb-2 overflow-hidden">
            <img
              className="w-full h-full block"
              src={`https://github.com/${authContext.userData.username}.png`}
            />
          </div>
          <h2 className="font-bold text-2xl text-center ">
            {authContext.userData.name} (@{authContext.userData.username})
          </h2>
          <p className="text-center w-full">
            <Link to={ROUTER_PATHS.MENTOR_FORM}>Edit</Link>
          </p>
        </div>

        {dashboard !== null ? (
          <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
            <div className="lg:pt-28">
              <h2 className="text-3xl font-bold text-center mb-8 py-4">
                Projects
              </h2>
              <div className="flex flex-wrap justify-center gap-2 items-stretch">
                {dashboard.projects.map((project) => (
                  <MentorProjectCard {...project} />
                ))}
                <button className="px-4 py-4 w-80 rounded-md bg-[#0f0f27] hover:bg-[#161632] text-3xl font-bold flex justify-center items-center min-h-[280px]">
                  <BiPlus />
                  Add Project
                </button>
              </div>
            </div>
          </div>
        ) : (
          error
        )}

        <div className="lg:sticky lg:self-start lg:top-28 mt-28 overflow-auto self-center px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
          <div className="mb-8">
            <h3 className="font-semibold text-2xl mb-2">
              Merged Pull Requests
            </h3>
            <div className="space-y-1">
              <p>username / repo_name - Pull: pull_idx</p>
              <p>username / repo_name - Pull: pull_idx</p>
              <p>username / repo_name - Pull: pull_idx</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-2xl mb-2">Mentor Resources</h3>
            <div className="space-y-4">
              {MentorResources.map((resource) => (
                <a target="_blank" className="block" href={resource.url}>
                  <li className="list-none gap-4 flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-none">
                      <img
                        src={resource.avatar}
                        className="h-full w-full block"
                      />
                    </div>
                    <div>{resource.message}</div>
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
