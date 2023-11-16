import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { useMemo } from "react";
import { IProjectDashboardInfo } from "../util/types";
import { ROUTER_PATHS } from "../util/constants";
import { Link } from "react-router-dom";

function MentorProjectCard({
  id,
  name,
  project_status,
  lines_added = 0,
  lines_removed = 0,
  commit_count = 0,
  pull_count = 0,
  repo_link,
  mentor,
  secondary_mentor,
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
            <p className="text-[0.7rem] text-yellow-600">Awaiting Approval</p>
          )}
        </div>
        <div className="mb-5 space-y-1">
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <IoPersonSharp />
              Mentor:
            </div>
            <a
              href={`https://github.com/${mentor.username}`}
              className="font-bold text-base hover:underline"
            >
              @{mentor.username}
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <IoPersonSharp />
              Secondary Mentor:
            </div>
            <a
              href={
                secondary_mentor.username !== ""
                  ? `https://github.com/${secondary_mentor.username}`
                  : undefined
              }
              className={`font-bold text-base ${
                secondary_mentor.username !== "" ? "hover:underline" : ""
              }`}
            >
              {secondary_mentor.username !== ""
                ? `@${secondary_mentor.username}`
                : "None"}
            </a>
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <BiGitCommit />
              Merged Commits:
            </div>
            <p className="font-bold text-base">{commit_count}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center text-sm font-semibold">
              <BiGitPullRequest /> Merged Pull Requests:
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
            className="text-base hover:underline text-primary-500 cursor-pointer hover:text-primary-600"
          >
            Issues
          </a>
          <a
            href={`${repo_link}/pulls`}
            target="_blank"
            className="text-base hover:underline text-primary-500 cursor-pointer hover:text-primary-600"
          >
            PRs
          </a>
        </div>
        <div className="mb-2 flex justify-around gap-2">
          <a
            href={repo_link}
            target="_blank"
            className="text-center font-semibold text-lg w-full p-2 bg-primary-700 rounded-md hover:bg-primary-800"
          >
            View Project
          </a>
          <Link
            to={ROUTER_PATHS.PROJECT_EDIT_FORM_NOSUFFIX + id.toString()}
            className="text-center font-semibold text-lg w-full p-2 bg-orange-700 rounded-md hover:bg-orange-800"
          >
            Edit Project
          </Link>
        </div>
      </div>
    </>
  );
}

export default MentorProjectCard;
