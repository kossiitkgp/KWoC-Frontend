import { Link, useNavigate } from "react-router-dom";
import {
  DISCORD_INVITE,
  ROUTER_PATHS,
  SLACK_INVITE,
  STUDENT_MANUAL_LINK,
} from "../util/constants";
import { useAuthContext } from "../util/auth";
import StudentResources from "../data/studentResources.json";
import { useEffect } from "react";

function StudentDashboard() {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      navigate(ROUTER_PATHS.HOME);
    }

    if (authContext.userData.type !== "student") {
      navigate(ROUTER_PATHS.HOME);
    }
  }, [authContext]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:sticky lg:self-start lg:translate-y-1/4 lg:top-28 mt-28 overflow-auto self-center px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
        <div className="w-full aspect-square bg-primary-950 rounded-full mb-2 overflow-hidden">
          <img
            className="w-full h-full block"
            src={`https://github.com/${authContext?.userData?.username}.png`}
          />
        </div>

        <h2 className="font-bold text-2xl text-center my-3">
          {authContext?.userData.name}
          <br />
          <span className="font-medium text-lg text-gray-400">
            (@{authContext?.userData.username})
          </span>
        </h2>

        <div className="flex mt-2 justify-center gap-3">
          <Link
            className="text-center py-2 px-5 py-auto h-fit text-indigo-100 bg-primary-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-primary-800 disabled:bg-gray-600"
            to={ROUTER_PATHS.STUDENT_FORM}
          >
            Edit Info
          </Link>
          <button
            className="text-center py-2 px-5 py-auto h-fit text-indigo-100 bg-red-800 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-red-800 disabled:bg-gray-600"
            onClick={authContext?.onLogout}
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="relative overflow-x-hidden flex-1 flex-col flex flex-wrap">
        <div className="lg:pt-28 max-w-2xl mx-auto px-4">
          <div className="mb-8 py-4">
            <h2 className="font-display text-5xl mb-4 font-bold text-center">
              Welcome to KWoC 2023!
            </h2>
            <p className="text-xl text-center">
              Congratulations! Your registration for Kharagpur Winter of Code
              (KWoC) 2023 was successful. We are thrilled to have you on board
              for this exciting coding journey.
            </p>
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

      <div className="lg:sticky lg:self-start lg:translate-y-1/4 lg:top-28 mt-28 overflow-auto self-center px-4 lg:px-10 py-4 w-80 h-fit mb-8 lg:mb-0">
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
          <h3 className="font-semibold text-2xl mb-6">Student Resources</h3>
          <div className="space-y-4">
            {StudentResources.map((resource, i) => (
              <a
                key={i}
                target="_blank"
                className="block text-primary hover:text-primary-600 hover:underline"
                href={resource.url}
              >
                <li className="list-none gap-5 flex items-center text-inherit">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-none">
                    <img
                      src={resource.avatar}
                      className="h-full w-full block"
                    />
                  </div>
                  <div className="text-inherit text-sm">{resource.message}</div>
                </li>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
