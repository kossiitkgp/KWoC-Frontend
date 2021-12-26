import axios from "axios";
import React, { useEffect, useState } from "react";
import Psa from "../components/Psa";
import { BACKEND_URL } from "../constants";
import { studentResources as resources } from "../data/dummy_data";
import { trim_lines, trim_message } from "../utils/helpers.js";

export default function StudentDashboard() {
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [evalStatus, setEvalStatus] = useState("");
  const [blogLink, setBlogLink] = useState("");
  const [projects, setProjects] = useState([]);

  // const { width, height } = useWindowSize();

  const [stats, setStats] = useState({});

  const [pulls, setPulls] = useState([]);

  const [extraCommits, setExtraCommits] = useState([]);
  const [extraLinesAdded, setExtraLinesAdded] = useState(0);
  const [extraLinesRemoved, setExtraLinesRemoved] = useState(0);

  const details = {
    bloglink: blogLink,
    username: localStorage.getItem("student_username"),
  };

  // TODO: update this before release
  const announcements = [
    {
      date: "November 27, 2021",
      content: "Coding Period will start from 6th December",
    },
  ];

  const handleBlogLink = () => {
    // TODO: check this regex because there were some problems previous year
    const urlMatch = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.@~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-@]*)?" + // query string
        "(\\#[:-a-z\\d_]*)?$",
      "i"
    );

    if (!urlMatch.test(blogLink)) {
      alert("Not a valid blog link. Please correct and submit again");
      return;
    } else {
      axios
        .post(`${BACKEND_URL}/student/bloglink`, details, {
          headers: {
            Bearer: localStorage.getItem("student_jwt"),
          },
        })
        .then((res) => {
          console.log(details);
          console.log(res);
        })
        .catch((err) => {
          alert("Server error, Try again");
          console.log(err);
        });
    }

    window.location.reload();
  };

  useEffect(() => {
    const student_username = localStorage.getItem("student_username");

    // fetch(`${STATS_API}/student/exists/${student_username}`)
    //   .then((res) => res.text())
    //   .then((res) => {
    //     if (res === "false") {
    //       alert("Sorry, it seems that you have not registered for KWoC");
    //       window.location.pathname = "";
    //     }
    //   });
    // check that its not null
    const student_loggedout =
      localStorage.getItem("student_jwt") === null ||
      localStorage.getItem("student_jwt") === undefined;
    if (student_loggedout) window.location.pathname = "";
    const URL = `${BACKEND_URL}/student/dashboard`;
    const data = {
      username: localStorage.getItem("student_username"),
    };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setFullName(res.name);
        setCollegeName(res.college);
        setEvalStatus(res.evals);
      })
      .catch((err) => {
        // alert("Server Error, Please try again");
        console.log("err is ", err);
      });

    axios
      .get(`${BACKEND_URL}/stats/student/${student_username}`)
      .then((res) => {
        setStats(res.data[student_username]);
        console.log(res.data[student_username]);
      })
      .catch((err) => {
        alert("Server error, Try again");
      });
  }, []);

  let resourceList = [];
  for (const [index, elements] in resources.entries()) {
    resourceList.push(<li key={index}>{elements}</li>);
  }

  function removeCachedTimeStamp() {
    const student_username = localStorage.getItem("student_username");
    localStorage.removeItem(`stats_events_timestamp_${student_username}`);
    window.location.reload();
  }

  function resendForm() {
    setEvalStatus(1);
  }

  return (
    <div className="student-dashboard-body dashboard-container">
      <div className="dashboard">
        <link
          href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="font-awesome/css/font-awesome.css"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
          rel="stylesheet"
        ></link>
        {/*

         Mentor Dashboard here
            Plans to include the following
             -> Useful links - how to write README, others if any?
             -> Important Announcements
             -> Stats of indiv Mentor ???
      */}
        <div className="title-dashboard">
          <h1>Student Dashboard</h1>
        </div>
        <div className="intro-card">
          <div className="avatar grow-card">
            <img
              src={`https://github.com/${localStorage.getItem(
                "student_username"
              )}.png`}
              className="avatar-img"
              alt="Mentor's GitHub Avatar"
            ></img>
            <br />
            <div className="avatar-content">
              <p id="mentor-name">{fullName}</p>
              <p id="mentor-username">
                {localStorage.getItem("student_username")}
              </p>
              <p id="mentor-username">{collegeName}</p>
            </div>
          </div>

          <Psa
            announcement={
              evalStatus === 1
                ? "You have successfully passed KWoC 2021 Mid Evaluation. Keep going!"
                : "You could not clear KWoC 2021 Mid Evaluation. But, don't let this stop you from contributing to Open Source. For any issues contact us. "
            }
          />

          <div className="mentor-stats">
            {/**Keep the font-mentor-header to a single word, multiple words create a bad UI experience */}
            <div className="mentor-stats-content">
              <div className="card-component non-purple-card mstats grow-card">
                <p className="font-mentor-header">Commits</p>
                <p className="font-mentor-stats">
                  {stats["commits"] && stats["commits"].length}
                </p>
              </div>

              <div className="card-component purple-card mstats  grow-card">
                <p className="font-mentor-header">
                  Pull Requests <br />
                  (open+closed)
                </p>
                <p className="font-mentor-stats">
                  {stats["pulls"] !== undefined && stats["pulls"].length}
                </p>
              </div>

              <div className="card-component non-purple-card mstats  grow-card">
                <p className="font-mentor-header">Lines of Code</p>
                <h1>(+/-)</h1>
                <p className="font-mentor-stats">
                  {trim_lines(parseInt(stats["lines_added"]))}/
                  {trim_lines(parseInt(stats["lines_removed"]))}
                </p>
              </div>
              <br />
              <div>
                <p>
                  <a
                    href={
                      "kwoc.kossiitkgp/stats/student/" +
                      localStorage.getItem("student_username")
                    }
                  >
                    Link to Detailed Stats
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="projects">
              <div className="project-header">
                <h1>Languages involved</h1>
              </div>
              <div>
                {stats["languages"] !== undefined &&
                  stats["languages"].map((item) => (
                    <span className="tag is-dark is-large">{item}</span>
                  ))}
              </div>
            </div>

            <div className="projects">
              <div className="project-header">
                <h1>Projects</h1>
              </div>
              <div>
                {stats["projects"] !== undefined &&
                  stats["projects"].map((item) => (
                    <span className="tag is-dark is-large is-info">
                      <a href={`https://github.com/${item}`}>{item}</a>
                    </span>
                  ))}
              </div>
            </div>

            <div className="projects">
              <div className="table-container" id="indiv-stats-table">
                {pulls !== undefined ? (
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <h3>Project</h3>
                        </th>
                        <th>
                          <h3>Pull Request</h3>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {stats["pulls"] &&
                        stats["pulls"].map((item) => {
                          return (
                            <tr>
                              <td>
                                <a
                                  className="project-in-commit-table"
                                  href={`https://github.com/${item["base"]["repo"]["full_name"]}`}
                                >
                                  {item["base"]["repo"]["full_name"]}
                                </a>
                              </td>

                              <td>
                                <a href={item["html_url"]}>
                                  {trim_message(item["title"])}
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="projects">
              <div className="project-header">
                <h1>Commits</h1>
              </div>
              <div className="table-container" id="indiv-stats-table">
                {stats["commits"] !== undefined &&
                extraCommits !== undefined ? (
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <h3>Project</h3>
                        </th>
                        <th>
                          <h3>Commit</h3>
                        </th>
                        <th>
                          <h3>Lines</h3>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {stats["commits"].map((item) => {
                        return (
                          <tr>
                            <td>
                              <a
                                className="project-in-commit-table"
                                href={`https://github.com/${item["project"]}`}
                              >
                                {item["project"]}
                              </a>
                            </td>
                            <td>
                              <a href={item["html_url"]}>
                                {trim_message(item["message"])}
                              </a>
                            </td>
                            <td>
                              +{trim_lines(item["lines_added"])},-
                              {trim_lines(item["lines_removed"])}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
              </div>
            </div>

            <section className="resource-card">
              <div className="resource-header">
                <h1>Resources</h1>
              </div>

              <table className="table is-bordered is-striped">
                <tbody>
                  {resources.map((resourceCard) => {
                    const message = resourceCard.message;
                    const url = resourceCard.url;
                    const avatar = resourceCard.avatar;

                    return (
                      <tr>
                        <td>
                          <a href={url}>
                            {/* TODO: default image/icon for broken links */}
                            <img
                              src={avatar}
                              className="avatar-resource"
                              alt="link"
                            ></img>
                          </a>
                        </td>
                        <td>
                          <a href={url}>
                            <p>{message}</p>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
            <div className="announcements">
              <h1>Announcements</h1>

              {announcements.map((item, index) => {
                return (
                  <div className="anc-card card-component grow-card">
                    <h1>{item.date}</h1>
                    <p>{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
