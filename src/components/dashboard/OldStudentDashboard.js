import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../constants/constants";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./StudentDashboard.scss";

export default function Dashboard() {
  const [fullName, setFullName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [projects, setProjectList] = useState([
    // 'xypnox/xyplot',
    // 'kossiitkgp/darkHorse',
    // 'kossiitkgp/KWoC',
  ]);

  useEffect(() => {
    // checking if student logged out or not
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
      })
      .catch((err) => {
        alert("Server Error, Please try again");
      });
  }, []);

  const announcements = [
    {
      date: "November 28, 2020",
      content:
        "Coding Period begins from 6th of December! Till then look at the \
        resources in the resource tab, and approach your mentors for getting \
        an idea for approaching a project of your choice.",
    },
  ];

  const resources = [
    {
      message: "Writing Kickass READMEs",
      url: "http://www.bauva.com/blog/Writing-Kickass-READMEs/",
      avatar: "http://www.bauva.com/images/bio-photo.jpg",
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
  // dummy data for test purpose
  // let data = {
  //   name: 'Aditya Vikram Singh',
  //   github: 'xypnox',
  //   college: 'IIT Kharagpur',
  //   commits: {
  //     count: 235,
  //     commits: [
  //       {
  //         hash: '234rrt',
  //         project: 'xypnox/xyplot',
  //         messsage: 'Compress residual images for faster loading speed',
  //       },
  //       {
  //         hash: 'aw3548',
  //         project: 'kossiitkgp/darkHorse',
  //         messsage: 'Fix: Typo and spacing',
  //       },
  //       {
  //         hash: 'hhstb32',
  //         project: 'xypnox/todxpy',
  //         messsage: 'Introduce new sorting for todos',
  //       },
  //       {
  //         hash: 'y67eb6',
  //         project: 'kossiitkgp/KWoC',
  //         messsage: 'Replace navbar with footer for fun',
  //       },
  //     ],
  //   },
  //   pullRequests: {
  //     count: 12,
  //     open: 5,
  //     closed: 6,
  //   },
  //   linesOfCode: {
  //     count: '126k',
  //   },
  //   languages: ['Python', 'Javascript', 'HTML', 'CSS'],
  //   projects: ['darkHorse', 'todxpy', 'KWoC'],
  //   announcement: [
  //     'Hi the KWOC has just started!',
  //     'Make sure you have submitted the mideval feedback for the student!',
  //     'Hi \n, the end evals have been finished!',
  //   ]

  // };
  return (
    <div className="dashboard">
      <Navbar className="is-black" />

      <div className="intro container">
        <div className="data-panel">
          <h1 className="title">Dashboard</h1>
          <h3>
            Stats will be updated in the Dashboard once Coding Period begins.
          </h3>

          <div className="data-cards ">
            <div className="data-card grow-card">
              <h1>0</h1>
              <h2>Commits</h2>
            </div>
            <div className="data-card grow-card">
              <h1>0</h1>
              <h2>Pull Requests</h2>
            </div>
            <div className="data-card grow-card">
              <h1>0</h1>
              <h2>Lines of Code</h2>
            </div>
          </div>
        </div>

        <div className="profile-panel grow-card">
          <img
            src={`https://github.com/${localStorage.getItem(
              "student_username"
            )}.png`}
            alt=""
          />
          <br />
          <b>{fullName}</b>
          <p>{localStorage.getItem("student_username")}</p>
          <p>{collegeName}</p>
        </div>
      </div>

      {/* <section className='container share-links'>
        <h1>Share your progress</h1>
        <div className='links'>
          <a href='#a'>Facebook</a>
          <a href='#a'>Twitter</a>
          <a href='#a'>LinkedIn</a>
        </div>
      </section> */}

      <div className="container projects">
        <h1>Projects</h1>
        <div className="project-card-list">
          {projects.length !== 0 ? (
            projects.map((projectName) => {
              const projectOwner = projectName.split("/")[0];

              return (
                <div className="project-card grow-card">
                  <div className="header-div">
                    <img
                      className="project-card-avatar"
                      src={`https://github.com/${projectOwner}.png`}
                    ></img>
                    <p>{projectName.split("/")[1]}</p>
                  </div>

                  <div className="project-buttons">
                    <a
                      href={`https://www.github.com/${projectName}`}
                      className="project-button-small"
                    >
                      <img
                        src="/github.svg"
                        className="github-svg"
                        alt="gh"
                      ></img>
                    </a>
                    <a
                      href={`https://www.github.com/${projectName}/issues`}
                      className="project-button-small"
                    >
                      Issues
                    </a>
                    <a
                      href={`https://www.github.com/${projectName}/pulls`}
                      className="project-button-small"
                    >
                      PRs
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="add-project-card">
              <div className="header-add-project-card">
                <p>
                  Coding period starts from 6th December. You can browse some
                  added projects.
                </p>
              </div>
              <div className="add-project-button-div">
                <a href="/projects">
                  <button className="add-project-button ">
                    <p className="plus-sign">+</p>
                    <p className="text-add-project">Choose Project</p>
                  </button>
                </a>
              </div>
            </div>
          )}

          {projects.length !== 0 ? (
            <div className="add-project-card project-card card-component grow-card add-project-card-small">
              <a href="/form/project">
                <h4>Add Projects</h4>
                <text>+</text>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <section className='container commits'>
        <h1>Latest Commits</h1>
        <table>
          <thead>
            <th>Hash</th>
            <th>Project</th>
            <th>Commit Message</th>
          </thead>
          {data.commits.commits.map((commit) => {
            return (
              <tr>
                <td>
                  <a href='https://www.google.com'>
                    <div>{commit.hash}</div>
                  </a>
                </td>
                <td>{commit.project}</td>
                <td>{commit.message}</td>
              </tr>
            );
          })}
        </table>
      </section> */}

      <section className="resource-card">
        <div className="resource-header">
          <b>Resources</b>
        </div>

        <table className="table is-bordered is-striped">
          <th>Resource Link</th>
          <th>Details</th>

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
      <Footer />
    </div>
  );
}
