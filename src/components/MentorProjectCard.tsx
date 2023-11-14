import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { useMemo } from "react";
import { IProjectDashboardInfo } from "../util/types";

function MentorProjectCard({
  name,
  lines_added = 0,
  lines_removed = 0,
  commit_count = 0,
  pull_count = 0,
  repo_link,
}: IProjectDashboardInfo) {
  const totalLinesChanged = useMemo(
    () => lines_added + lines_removed,
    [lines_added, lines_removed],
  );
  const addedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 0 : (lines_added / totalLinesChanged) * 100,
    [lines_added, totalLinesChanged],
  );
  const removedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 0 : (lines_removed / totalLinesChanged) * 100,
    [lines_removed, totalLinesChanged],
  );

  return (
    <>
      <div className="px-4 py-4 w-80 rounded-md bg-[#0f0f27]">
        <div className="flex gap-2 items-center mb-4">
          <h3 className="font-semibold text-xl">{name}</h3>
        </div>
        <div className="mb-3 space-y-1">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <BiGitCommit />
              Commit Count:
            </div>
            <p className="font-bold text-base">{commit_count}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <BiGitPullRequest /> Pull Count:
            </div>
            <p className="font-bold text-base">{pull_count}</p>
          </div>
        </div>
        <div className="mb-3">
          <p className="text-sm font-semibold">Lines Added / Removed</p>
          <div className="w-full flex items-center">
            <span className="flex-none text-green-700 text-sm font-bold">
              + {lines_added}
            </span>
            <div className="w-full mx-2 flex">
              <div
                style={{ flex: addedPercentage + "%" }}
                className="border-2 border-green-700"
              ></div>
              <div
                style={{ flex: removedPercentage + "%" }}
                className="border-2 border-red-900"
              ></div>
            </div>
            <span className="flex-none text-red-900 text-sm font-bold">
              - {lines_removed}
            </span>
          </div>
        </div>
        <div className="mb-3 flex justify-around font-semibold">
          <a
            onClick={() => {
              // TODO
            }}
            className="text-base text-blue-500 cursor-pointer hover:text-blue-600"
          >
            Edit
          </a>
          <a
            href={`${repo_link}/issues`}
            target="_blank"
            className="text-base text-blue-500 cursor-pointer hover:text-blue-600"
          >
            Issues
          </a>
          <a
            href={`${repo_link}/pulls`}
            target="_blank"
            className="text-base text-blue-500 cursor-pointer hover:text-blue-600"
          >
            PRs
          </a>
        </div>
        <button
          onClick={() => window.open(repo_link, "_blank")}
          className="text-center font-semibold text-lg w-full p-2 bg-blue-950 rounded-md hover:bg-blue-900"
        >
          View Project
        </button>
      </div>
    </>
  );
}

export default MentorProjectCard;
