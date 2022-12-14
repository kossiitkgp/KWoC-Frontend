import axios from "axios";
import React, { useEffect, useState } from "react";
// import Confetti from "react-confetti";
import { BACKEND_URL } from "../constants";
import { mentorResources as resources } from "../data/dummy_data";

export default function MentorDashboard() {
  const [fullName, setFullName] = useState("");
  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [pullReqs, setPullReqs] = useState([]);

  const [statsFetchError, setStatsFetchError] = useState(null);

  const announcements = [
    {
      date: "November 27, 2021",
      content: "Coding Period will start from 6th December",
    },
  ];

  const message_storage = () => {
    if (localStorage.getItem("announcement_messageM") !== "true") {
      localStorage.setItem("page_reloadM", "false");
    } else {
      localStorage.setItem("page_reloadM", "true");
    }

    localStorage.setItem("announcement_messageM", "true");
  };

  useEffect(() => {
    message_storage();
    // check that its not null
    const mentor_loggedout =
      localStorage.getItem("mentor_jwt") === null ||
      localStorage.getItem("mentor_jwt") === undefined;
    if (mentor_loggedout) window.location.pathname = "";
    const URL = `${BACKEND_URL}/mentor/dashboard`;
    const mentor_username = localStorage.getItem("mentor_username");

    const data = {
      username: mentor_username,
    };
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setFullName(res.name);
        setProjects(res.projects);

        const config = {
          headers: {
            Bearer: `${localStorage.getItem("mentor_jwt")}`,
          },
        };

        axios
          .get(`${BACKEND_URL}/stats/mentor/${mentor_username}`, config)
          .then((res) => {
            const stats = res.data["Projects"];

            const _students = [];
            const _pullReqs = [];

            for (let i = 0; i < stats.length; ++i) {
              for (let j = 0; j < stats[i]["contributors"].length; ++j)
                _students.push(stats[i]["contributors"][j]);

              for (let j = 0; j < stats[i]["pulls"].length; ++j) {
                const pull_url = stats[i]["pulls"][j].url;
                const split_url = pull_url.split("/");

                _pullReqs.push({
                  url: pull_url,
                  username: split_url[3],
                  repo_name: split_url[4],
                  pull_idx: split_url[6],
                });
              }
            }

            setPullReqs(_pullReqs);
            setStudents(_students);
          })
          .catch((err) => {
            setStatsFetchError(err);
            // console.log(err);
          });
      })
      .catch((err) => {
        alert("Server Error, Please try again");
      });
  }, []);

  let resourceList = [];
  for (const [index, elements] in resources.entries()) {
    resourceList.push(<li key={index}>{elements}</li>);
  }

  if (projects !== undefined)
    projects.forEach((projectItem) => {
      projectItem["owner"] = projectItem["RepoLink"].split("/").slice(-2)[0];
    });

  return (
    <div className="dashboard-container">
      {/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <h2>{fullName}</h2>

            <div className="stats ">
              <div className="box">
                <h2>{projects.length}</h2>
                <p>Projects</p>
              </div>

              <div className="box">
                <h2>{statsFetchError ? 0 : students.length}</h2>
                <p>Students</p>
              </div>

              {/* <div className="box">
                <h2>
                  {moment("07-12-2022", "DD-MM-YYYY").diff(
                    moment.now(),
                    "days"
                  ) > 0
                    ? moment("07-12-2022", "DD-MM-YYYY").diff(
                        moment.now(),
                        "days"
                      )
                    : 0}
                </h2>
                <p>Days to go</p>
              </div> */}
            </div>
          </div>

          <div className="avatar">
            <img
              src={`https://github.com/${localStorage.getItem(
                "mentor_username"
              )}.png`}
              alt="User's GitHub Avatar"
            ></img>

            <div className="avatar-content">
              <h2>{fullName}</h2>
              <p>{localStorage.getItem("mentor_username")}</p>
            </div>
          </div>
        </div>

        {/* <div className="subtitle feedback">
          <h1>Feedback</h1>
          <p>Congratulations. You have successfully mentored in KWoC 2021.</p>
          <a
            href={`https://kossiitkgp.org/public-files/KWoC/2021-Certificates/Mentor/${localStorage.getItem(
              "mentor_username"
            )}.pdf`}
            target="_blank"
            rel="noopener norefferer"
          >
            Link to your certificate
          </a>
          <p>
            Help us make KWoC a better experience for everyone by filling this
            anonymous{" "}
            <a
              href="https://forms.gle/Qx7KaLuZfdkoBMB7A"
              rel="noreferrer noopener"
              target="_blank"
            >
              feedback form
            </a>
            .
          </p>
        </div> */}

        <div className="subtitle">
          <h1>Projects</h1>

          <div className="project-cards">
            {projects.map((item, index) => {
              return (
                <div className="card-container">
                  <div className="info">
                    <img
                      src={`https://github.com/${item.owner}.png`}
                      alt=""
                    ></img>

                    <p>{item.Name}</p>
                  </div>

                  <div className="buttons">
                    <a href={`${item.RepoLink}`}>
                      <img
                        src="/github.svg"
                        className="github-svg"
                        alt="GitHub Logo"
                      ></img>
                    </a>

                    <a href={`/form/projectedit/${item.ID}`}>Edit</a>

                    <a href={`${item.RepoLink}/issues`}>Issues</a>
                    <a href={`${item.RepoLink}/pulls`}>PRs</a>
                  </div>

                  <p>{item.ProjectStatus ? "" : "To be Checked"}</p>
                </div>
              );
            })}
            <div className="add-project-card">
              {projects.length === 0 ? (
                <div className="header-add-project-card">
                  <p>You haven't added any projects yet</p>
                </div>
              ) : null}

              <a href="/form/project" className="add-project-link">
                <p className="plus-sign">+</p>
                <p className="text-add-project" href="/form/project">
                  Add Projects
                </p>
              </a>
            </div>

            {/* {projects.length !== 0 ? (
              <div className="add-project-card project-c card-component grow-card add-project-card-small">
                <a href="/form/project">
                  <h4>Add Projects</h4>
                  <text>+</text>
                </a>
              </div>
            ) : (
              ""
            )} */}
          </div>
          {/* <p className="dashboard-table-message">
            View on Desktop to see projects.
          </p> */}
        </div>

        <div className="subtitle">
          <h1>Students</h1>

          <div className="students">
            {!statsFetchError && students.length !== 0 ? (
              students.map((studentName, index) => {
                return (
                  <div className="student">
                    <a
                      href={`https://github.com/${studentName}`}
                      className="header"
                    >
                      <img
                        src={`https://github.com/${studentName}.png`}
                        className="avatar-students-card"
                        alt=""
                      ></img>
                      <p>{studentName}</p>
                    </a>

                    {/* <div className="student-button">
                      <a
                        className="student-button-small"
                        href={`/stats/student/${studentName}`}
                      >
                        Stats
                      </a>
                    </div> */}
                  </div>
                );
              })
            ) : (
              <div className="add-project-card">
                <div className="header-add-project-card">
                  {/* <p>
                    Coding period starts from 7th December. You can invite
                    students meanwhile.
                  </p> */}
                  <p>You can invite students to participate in KWoC.</p>
                </div>
                <a
                  href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-wlftnk75-VoQHEEB9WpkHfza6~GGpWQ"
                  className="add-project-link"
                >
                  <p className="plus-sign">+</p>
                  <p className="text-add-project">Invite Students</p>
                </a>
              </div>
            )}
          </div>
          {/* <p className="dashboard-table-message">
            View on Desktop to see students.
          </p> */}
        </div>

        <div className="subtitle">
          <h1>Merged Pull Requests</h1>

          <div className="pull-reqs">
            {!statsFetchError && pullReqs.length !== 0
              ? pullReqs.map((pullReq, index) => {
                  return (
                    <div className="pull-req">
                      {index + 1}.
                      <p className="info">
                        {pullReq["username"]} / {pullReq["repo_name"]} - Pull:{" "}
                        {pullReq["pull_idx"]}
                      </p>
                      <div className="link">
                        <a href={`${pullReq["url"]}`} target="_blank">
                          [Link]
                        </a>
                      </div>
                    </div>
                  );
                })
              : "No pull requests merged yet."}
          </div>
          {/* <p className="dashboard-table-message">
            View on Desktop to see Pull Requests.
          </p> */}
        </div>

        <section className="resource-table subtitle">
          <h1>Resources</h1>

          <table>
            <tbody>
              {resources.map((resourceCard) => {
                const message = resourceCard.message;
                const url = resourceCard.url;
                const avatar = resourceCard.avatar;

                return (
                  <tr>
                    <td>
                      <a href={url}>
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

        {/* <div className="announcements">
        <h1 className="announcement-header">Announcements</h1>

        {announcements.map((item, index) => {
          return (
            <div className="anc-card card-component">
              <h1>{item.date}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
				</div> */}
      </div>
    </div>
  );
}
