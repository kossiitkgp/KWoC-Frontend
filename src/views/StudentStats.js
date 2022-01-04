import axios from "axios";
import React, { useEffect, useState } from "react";
import reloadIcon from "../assets/refresh-cw.svg";
import { BACKEND_URL, STATS_API } from "../constants";
import { trim_lines, trim_message } from "../utils/helpers";

export default function StudentDashboard() {
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [username, setUsername] = useState("");
  const [projects, setProjects] = useState([]);

  const [stats, setStats] = useState({});
  const [pulls, setPulls] = useState([]);

  const [extraCommits, setExtraCommits] = useState([]);
  const [extraLinesAdded, setExtraLinesAdded] = useState(0);
  const [extraLinesRemoved, setExtraLinesRemoved] = useState(0);

  const announcements = [
    {
      date: "November 28, 2020",
      content: "Coding Period begins on 6th December!",
    },
  ];

  const resources = [
    {
      message: "Writing Kickass READMEs",
      url: "https://bauva.com/blog/writing-kickass-readmes/",
      avatar: "https://bauva.com/images/pranit.jpg",
    },
    {
      message: "Everything you need to ace KWoC",
      url: "https://medium.com/kharagpur-open-source-society/an-informal-introduction-to-kwoc-62fc5e686f79",
      avatar: "https://miro.medium.com/max/66/1*S7YHjDmgGnBEJcE116qQ7w.jpeg",
    },
    {
      message: "How to choose a Project for KWoC",
      url: "https://telegra.ph/How-to-choose-a-Project-for-KWoC-12-01",
      avatar: "https://telegra.ph/favicon.ico",
    },
    {
      message: "Codeacademy: Learn Git",
      url: "https://www.codecademy.com/learn/learn-git",
      avatar: "https://www.codecademy.com/favicon.ico",
    },
    {
      message: "Git Flight Rules: Cookbook for Git",
      url: "https://github.com/k88hudson/git-flight-rules",
      avatar: "https://github.com/k88hudson.png",
    },
    {
      message: "GitHub: Hello World Tutorial",
      url: "https://guides.github.com/activities/hello-world/",
      avatar: "https://guides.github.com/favicon.ico",
    },
  ];

  useEffect(() => {
    const splitArr = window.location.pathname.split("/");
    const student_username = splitArr[splitArr.length - 1];

    fetch(`${STATS_API}/student/exists/${student_username}`)
      .then((res) => res.text())
      .then((res) => {
        if (res === "false") {
          alert("Sorry, itseems you have not registered for KWoC");
          window.location.pathname = "";
        }
      });

    setUsername(student_username);
    const URL = `${BACKEND_URL}/student/dashboard`;
    const data = {
      username: student_username,
    };

    axios
      .get(`${STATS_API}/stats/student/${student_username}`)
      .then((res) => {
        setStats(res.data[student_username]);
        console.log("the stats are - ", res.data[student_username]);
      })
      .catch((err) => {
        alert("Server error, Try again");
      });

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setFullName(res.name);
        setCollegeName(res.college);
      })
      .catch((err) => {
        alert("Server Error, Please try again !");
      });

    axios
      .get(`${STATS_API}/stats/student/${student_username}`)
      .then((res) => {
        setStats(res.data[student_username]);
        console.log("the stats are - ", res.data[student_username]);
      })
      .catch((err) => {
        alert("Server error, Try again");
      });
  }, []);

  function removeCachedTimeStamp() {
    const splitArr = window.location.pathname.split("/");
    const student_username = splitArr[splitArr.length - 1];
    localStorage.removeItem(`stats_events_timestamp_${student_username}`);
    window.location.reload();
  }

  let resourceList = [];
  for (const [index, elements] in resources.entries()) {
    resourceList.push(<li key={index}>{elements}</li>);
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <h2>{fullName}</h2>

            <div className="stats">
              <div className="box">
                <h2>{stats["commits"] && stats["commits"].length}</h2>
                <p>Commits</p>
              </div>

              <div className="box">
                <h2>{stats["pulls"] !== undefined && stats["pulls"].length}</h2>
                <p>Pull Requests</p>
              </div>

              <div className="box">
                <h2>
                  {trim_lines(parseInt(stats["lines_added"]))}/
                  {trim_lines(parseInt(stats["lines_removed"]))}
                </h2>
                <p>Lines of Code (+/-)</p>
              </div>

              {/* <div>
              <a
                href={
                  "kwoc.kossiitkgp/stats/student/" +
                  localStorage.getItem("student_username")
                }
              >
                Link to Detailed Stats
              </a>
            </div> */}
            </div>
          </div>

          <div className="avatar">
            <img
              src={`https://github.com/${username}.png`}
              alt="User's GitHub Avatar"
            ></img>

            <div className="avatar-content">
              <h2>{fullName}</h2>
              <p>{username}</p>
              <p>{collegeName}</p>
            </div>
          </div>
        </div>

        <div className="subtitle">
          <h1>Languages involved</h1>

          <div className="languages">
            {stats["languages"] !== undefined &&
              stats["languages"].map((item) => <span>{item}</span>)}
          </div>
        </div>

        <div className="subtitle">
          <h1>Projects</h1>

          <div className="languages">
            {stats["projects"] !== undefined &&
              stats["projects"].map((item) => (
                <span>
                  <a href={`https://github.com/${item}`}>{item}</a>
                </span>
              ))}
          </div>
        </div>

        <div className="subtitle">
          <h1>
            Pull Reqests
            <img
              alt=""
              src={reloadIcon}
              className="refresh-icon"
              onClick={removeCachedTimeStamp}
            />
          </h1>
          <div className="dashboard-table">
            {stats["pulls"] !== undefined ? (
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
                  {stats["pulls"].map((item) => {
                    return (
                      <tr>
                        <td>
                          <a
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

        <div className="subtitle">
          <h1>Commits</h1>

          <div className="dashboard-table">
            {stats["commits"] !== undefined ? (
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
      </div>
    </div>
  );
}
