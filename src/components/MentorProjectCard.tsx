import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { useMemo } from "react";
import { IProjectDashboardInfo } from "../util/types";

function MentorProjectCard({
  name,
  project_status,
  lines_added = 0,
  lines_removed = 0,
  commit_count = 0,
  pull_count = 0,
  repo_link,
  mentor_username,
  secondary_mentor_username
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
      <div className="px-4 py-4 w-80 rounded-md bg-[#2a2a2aa3]">
        <div className="flex flex-col mb-4">
          <h3 className="font-semibold text-2xl">{name}</h3>

          {project_status ? (
            <p className="text-[0.7rem] text-green-700">Approved</p>
          ) : (
            <p className="text-[0.7rem] text-yellow-600">Waiting Approval</p>
          )}
        </div>
        <div className="mb-5 space-y-1">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <IoPersonSharp />
              Mentor:
            </div>
            <a href={`https://github.com/${mentor_username}`} className="font-bold text-base hover:underline">@{mentor_username}</a>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <IoPersonSharp />
              Secondary Mentor:
            </div>
            <a
              href={secondary_mentor_username !== '' ? `https://github.com/${secondary_mentor_username}` : undefined}
              className={`font-bold text-base ${secondary_mentor_username !== '' ? 'hover:underline' : ''}`}
            >
              {secondary_mentor_username !== '' ? `@${secondary_mentor_username}` : 'None'}
            </a>
          </div>

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
        <div className="mb-5">
          <p className="text-sm font-semibold mb-1">Lines Added / Removed</p>
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
                className="border-2 border-red-700"
              ></div>
            </div>
            <span className="flex-none text-red-700 text-sm font-bold">
              - {lines_removed}
            </span>
          </div>
        </div>
        <div className="mb-3 flex justify-around font-semibold">
          {/* <a
            onClick={() => {
              // TODO: complete edit project
            }}
            className="text-base text-primary-500 cursor-pointer hover:text-primary-600"
          >
            Edit
          </a> */}
          <a
            href={`${repo_link}/issues`}
            target="_blank"
            className="text-base text-primary-500 cursor-pointer hover:text-primary-600"
          >
            Issues
          </a>
          <a
            href={`${repo_link}/pulls`}
            target="_blank"
            className="text-base text-primary-500 cursor-pointer hover:text-primary-600"
          >
            PRs
          </a>
        </div>
        <button
          onClick={() => window.open(repo_link, "_blank")}
          className="text-center font-semibold text-lg w-full p-2 bg-primary-700 rounded-md hover:bg-primary-800"
        >
          View Project
        </button>
      </div>
    </>
  );
}

export default MentorProjectCard;
