import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { IProjectDashboardInfo } from "../util/types";

function MentorProjectCard({
  name,
  description,
  commit_count,
  pull_count,
  lines_added,
  lines_removed,
  project_status,
}: IProjectDashboardInfo) {
  return (
    <>
      <div className="px-4 py-4 h-[100%] w-80 rounded-md bg-[#0f0f27]">
        <div className="flex gap-2 items-center mb-4">
          <h3 className="font-semibold text-xl">
            {name} ({project_status ? "Approved" : "Awaiting Approval"})
          </h3>
        </div>
        <p>{description}</p>

        <div>
          <div className="mt-3 mb-3 space-y-1">
            {commit_count > 0 && project_status && (
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center text-sm font-semibold">
                  <BiGitCommit />
                  Commit Count:
                </div>
                <p className="font-bold text-base">{commit_count}</p>
              </div>
            )}
            {pull_count > 0 && project_status && (
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center text-sm font-semibold">
                  <BiGitPullRequest /> Pull Count:
                </div>
                <p className="font-bold text-base">{pull_count}</p>
              </div>
            )}
          </div>
          {project_status && (lines_added > 0 || lines_removed > 0) && (
            <div className="mb-3">
              <p className="text-sm font-semibold">Lines Added / Removed</p>
              <div className="w-full flex items-center">
                <span className="flex-none text-green-700 text-sm font-bold">
                  + {lines_added}
                </span>
                <div className="w-full mx-2 flex">
                  <div
                    style={{
                      flex: lines_added / (lines_added + lines_removed) + "%",
                    }}
                    className="border-2 border-green-700"
                  ></div>
                  <div
                    style={{
                      flex: lines_removed / (lines_added + lines_removed) + "%",
                    }}
                    className="border-2 border-red-700"
                  ></div>
                </div>
                <span className="flex-none text-red-700 text-sm font-bold">
                  - {lines_removed}
                </span>
              </div>
            </div>
          )}
        </div>
        <button className="mt-auto align-bottom text-center font-semibold text-lg w-full p-2 bg-blue-950 rounded-md hover:bg-blue-900">
          View Project
        </button>
      </div>
    </>
  );
}

export default MentorProjectCard;
