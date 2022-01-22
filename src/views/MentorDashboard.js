import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { BACKEND_URL, STATS_API } from "../constants";
import { mentorResources as resources } from "../data/dummy_data";

export default function MentorDashboard() {
  const [fullName, setFullName] = useState("");
  const [projects, setProjects] = useState([
    // {
    //   Name: 'darkHorse',
    //   RepoLink: 'https://github.com/kossiitkgp/darkHorse',
    //   owner: 'kossiitkgp',
    // },
    // {
    //   Name: 'todxpy',
    //   RepoLink: 'https://github.com/xypnox/todxpy',
    //   owner: 'xypnox',
    // },
    // {
    //   Name: 'KWoC',
    //   RepoLink: 'https://github.com/kossiitkgp/KWoC',
    //   owner: 'kossiitkgp',
    // },
  ]);
  const [students, setStudents] = useState([
    // 'yashrsharma44',
    // 'rakaar',
    // 'orkohunter',
    // 'adarshkumar712',
  ]);

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
    const data = {
      username: localStorage.getItem("mentor_username"),
    };
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setFullName(res.name);
        setProjects(res.projects);

        const repoNames = res.projects.map((item) => {
          let link = item["RepoLink"];
          // cleaning the trailing slash
          if (link[link.length - 1] === "/") link.slice(0, -1);
          let split_array = link.split("/");
          let split_array_length = split_array.length;
          return (
            split_array[split_array_length - 2] +
            "/" +
            split_array[split_array_length - 1]
          );
        });

        const repoNamesJson = {
          projects: repoNames,
        };

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(repoNamesJson);

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${STATS_API}/stats/mentors`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            setStudents(JSON.parse(result)["students"]);
          })
          .catch((error) => console.log("error", error));
      })
      .catch((err) => {
        alert("Server Error, Please try again");
      });

    // TODO: update stats api to not ask for mentor projects with request
    // fetch(`${BACKEND_URL}/stats/mentor`, {
    //   body: JSON.stringify({ projects: repoNames }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log("res. is ", res);
    //   });
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
      <Confetti width={window.innerWidth} height={window.innerHeight} />
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
                <h2>{students.length}</h2>
                <p>Students</p>
              </div>

              <div className="box">
                <h2>0</h2>
                <p>Days to EndEvals</p>
              </div>
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

        <div className="subtitle feedback">
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
        </div>

        <div className="subtitle">
          <h1>Projects</h1>

          <div className="project-cards">
            {projects.length !== 0 ? (
              projects.map((item, index) => {
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
              })
            ) : (
              <div className="add-project-card">
                {/* <div className="header-add-project-card">
                  <p>You haven't added any projects yet</p>
                </div>
                <div className="add-project-button-div">
                  <a href="/form/project">
                    <button className="add-project-button ">
                      <p className="plus-sign">+</p>
                      <p className="text-add-project" href="/form/project">
                        Add Projects
                      </p>
                    </button>
                  </a>
                </div> */}
                Registrations closed
              </div>
            )}
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
          <p className="dashboard-table-message">
            View on Desktop to see projects.
          </p>
        </div>

        <div className="subtitle">
          <h1>Students</h1>

          <div className="students">
            {students.length !== 0 ? (
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
                  <p>
                    Coding period starts from 6th December. You can invite
                    students meanwhile.
                  </p>
                </div>
                <div className="add-project-button-div">
                  <a href="https://join.slack.com/t/kwoc-koss/shared_invite/zt-jch6e9gn-puizWuKSw5~K9Eq4YfFrFg">
                    <button className="add-project-button ">
                      <p className="plus-sign">+</p>
                      <p className="text-add-project">Invite Students</p>
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
          <p className="dashboard-table-message">
            View on Desktop to see students.
          </p>
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
