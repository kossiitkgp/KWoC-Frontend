import React, { useEffect, useState } from "react";
import { BACKEND_URL, STATS_API } from "../constants";

export default function StudentDashboard() {
  const [fullName, setFullName] = useState("");
  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState({});
  const [collegeName, setCollegeName] = useState("");
  const [username, setUsername] = useState("");

  const [stats, setStats] = useState({});
  const [pulls, setPulls] = useState([]);

  const [extraCommits, setExtraCommits] = useState([]);
  const [extraLinesAdded, setExtraLinesAdded] = useState(0);
  const [extraLinesRemoved, setExtraLinesRemoved] = useState(0);

  useEffect(() => {
    const splitArr = window.location.pathname.split("/");
    const mentor_username = splitArr[splitArr.length - 1];
    // check that its not null
    const mentor_loggedout =
      localStorage.getItem("mentor_jwt") === null ||
      localStorage.getItem("mentor_jwt") === undefined;
    // if (mentor_loggedout) window.location.pathname = "";
    const URL = `${BACKEND_URL}/mentor/dashboard`;

    setUsername(mentor_username);
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

        // axios.post(`${STATS_API}/stats/mentor/${mentor_username}`, repoNamesJson)
        //   .then((response) => setStudents(response.data.students))
        //   .catch((err) => console.log(err));

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${STATS_API}/stats/mentor/${mentor_username}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            setStudents(JSON.parse(result));
          })
          .catch((error) => console.log("error", error));
      })
      .catch((err) => {
        alert("Server Error, Please try again");
      });
  }, []);

  if (projects !== undefined)
    projects.forEach((projectItem) => {
      projectItem["owner"] = projectItem["RepoLink"].split("/").slice(-2)[0];
    });

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>

            <div className="stats">
              <div className="box">
                <h2>{projects && projects.length}</h2>
                <p>Projects</p>
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
        {/*

         Mentor Dashboard here
            Plans to include the following
             -> Useful links - how to write README, others if any?
             -> Important Announcements
             -> Stats of indiv Mentor ???
      */}

        {/* <div className='projects'>
          <div className='project-header'>
            <h1>Languages involved</h1>
          </div>
          <div >
            {stats['languages'] !== undefined &&
              stats['languages'].map((item) => (
                <span
                  className='tag is-dark is-large'
                >
                  {item}
                </span>
              ))}
          </div>
        </div>  */}

        {/* <div className='projects'>
          <div className='project-header'>
            <h1>Projects</h1>
          </div>
          <div >
            {stats['projects'] !== undefined &&
              stats['projects'].map((item) => (
                <span
                  className='tag is-dark is-large is-info'
                >
                  <a
                    href={`https://github.com/${item}`}
                  >
                    {item}
                  </a>
                </span>
              ))}
          </div>
        </div> */}

        <div className="projects">
          <div className="project-header">
            <h1>
              Projects & Students
              {/* <img
                src={reloadIcon}
                className="refresh-icon" 
                onClick={removeCachedTimeStamp} /> */}
            </h1>
          </div>
          <div className="dashboard-table" id="indiv-stats-table">
            {students["projects"] !== undefined ? (
              <div>
                {students["projects"].map((item) => {
                  return (
                    <div>
                      <h1>
                        <a
                          href={`https://github.com/${item["project_name"]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item["project_name"]}
                        </a>
                      </h1>
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <h3>Student</h3>
                            </th>
                            <th>
                              <h3>Commits</h3>
                            </th>
                            <th>
                              <h3>Lines</h3>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {item["students"].map((thing) => {
                            return (
                              <tr>
                                <td>
                                  <a
                                    href={`https://github.com/${thing["username"]}`}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    {thing["username"]}
                                  </a>
                                </td>
                                <td>
                                  {thing["commits"].map((something) => {
                                    return (
                                      <React.Fragment>
                                        <a
                                          className="project-in-commit-table"
                                          href={something["html_url"]}
                                          target="_blank"
                                          rel="noreferrer noopener"
                                        >
                                          {something["message"]}
                                        </a>
                                        <br />
                                      </React.Fragment>
                                    );
                                  })}
                                </td>

                                <td>
                                  {thing["commits"].map((something) => {
                                    return (
                                      <React.Fragment>
                                        +{something["lines_added"]},-
                                        {something["lines_removed"]}
                                        <br />
                                      </React.Fragment>
                                    );
                                  })}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* <div className='projects'>
          <div className='project-header'>
            <h1>Commits</h1>
          </div>
          <div className='table-container' id='indiv-stats-table'>
            {stats['commits'] !== undefined ? (
              <table>
                <thead>
                  <tr>
                    <th >
                      <h3>Project</h3>
                    </th>
                    <th >
                      <h3>Commit</h3>
                    </th>
                    <th >
                      <h3>Lines</h3>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {stats['commits'].map((item) => {
                    return (
                      <tr>
                        <td>
                          <a
                            className='project-in-commit-table'
                            href={`https://github.com/${item['project']}`}
                          >
                            {item['project']}
                          </a>
                        </td>
                        <td><a href={item['html_url']} >{trim_message(item['message'])}</a></td>
                        <td>
                          +{trim_lines(item['lines_added'])},-{trim_lines(item['lines_removed'])}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              ''
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
