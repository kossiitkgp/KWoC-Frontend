import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { useMemo } from "react";
import { ProjectType } from "../util/types";

function MentorProjectCard({
  username,
  projectName,
  linesAdded = 0,
  linesRemoved = 0,
  nCommit = 0,
  nPull = 0,
}: ProjectType) {
  const totalLinesChanged = useMemo(
    () => linesAdded + linesRemoved,
    [linesAdded, linesRemoved],
  );
  const addedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 0 : (linesAdded / totalLinesChanged) * 100,
    [linesAdded, totalLinesChanged],
  );
  const removedPercentage = useMemo(
    () =>
      totalLinesChanged === 0 ? 0 : (linesRemoved / totalLinesChanged) * 100,
    [linesRemoved, totalLinesChanged],
  );

  return (
    <>
      <div className="px-4 py-4 w-80 rounded-md bg-[#0f0f27]">
        <div className="flex gap-2 items-center mb-4">
          <div className="w-10 h-10 rounded-md overflow-hidden flex-none">
            <img
              className="w-full h-full block"
              src={`https://github.com/${username}.png`}
            />
          </div>
          <h3 className="font-semibold text-xl">{projectName}</h3>
        </div>
        <div className="mb-3 space-y-1">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <BiGitCommit />
              Commit Count:
            </div>
            <p className="font-bold text-base">{nCommit}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <BiGitPullRequest /> Pull Count:
            </div>
            <p className="font-bold text-base">{nPull}</p>
          </div>
        </div>
        <div className="mb-3">
          <p className="text-sm font-semibold">Lines Added / Removed</p>
          <div className="w-full flex items-center">
            <span className="flex-none text-green-700 text-sm font-bold">
              + {linesAdded}
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
            <span className="flex-none text-red-700 text-sm font-bold">
              - {linesRemoved}
            </span>
          </div>
        </div>
        <div className="mb-3 flex justify-around font-semibold">
          <a className="text-base text-blue-500 cursor-pointer hover:text-blue-600">
            Edit
          </a>
          <a className="text-base text-blue-500 cursor-pointer hover:text-blue-600">
            Issues
          </a>
          <a className="text-base text-blue-500 cursor-pointer hover:text-blue-600">
            PRs
          </a>
        </div>
        <button className="text-center font-semibold text-lg w-full p-2 bg-blue-950 rounded-md hover:bg-blue-900">
          View Project
        </button>
      </div>
    </>
  );
}

export default MentorProjectCard;
