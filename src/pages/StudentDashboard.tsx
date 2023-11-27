import { Link, useNavigate } from "react-router-dom";
import {
  DISCORD_INVITE,
  ROUTER_PATHS,
  SLACK_INVITE,
  STUDENT_MANUAL_LINK,
} from "../util/constants";
import { useAuthContext } from "../util/auth";
import STUDENT_RESOURCES from "../data/studentResources.json";
import { useEffect } from "react";
import { Profile, Resources } from "../components/DashboardElements";

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
      <Profile />

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

        <Resources title="Student Resources" resources={STUDENT_RESOURCES} />
      </div>
    </div>
  );
}

export default StudentDashboard;
