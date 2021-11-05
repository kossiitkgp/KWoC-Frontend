import React, { useEffect, useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Card(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const student_loggedout =
      localStorage.getItem("student_jwt") === null ||
      localStorage.getItem("student_jwt") === undefined;

    const mentor_loggedout =
      localStorage.getItem("mentor_jwt") === null ||
      localStorage.getItem("mentor_jwt") === undefined;

    if (student_loggedout && mentor_loggedout) {
      setLoggedIn(false);
    }
  }, []);

  // TODO: these tags already exits Tag.js
  const TAG_TYPES = [
    "is-primary",
    "is-link",
    "is-info",
    "is-success",
    "is-warning",
    "is-danger",
    "is-black",
    "is-dark",
    "is-light",
    "is-primary is-light",
    "is-link is-light",
    "is-info is-light",
    "is-success is-light",
    "is-warning is-light",
    "is-danger is-light",
  ];
  const LEN = TAG_TYPES.length;
  return (
    <div className="card">
      <header className="card-header has-text-white">
        <a
          className="card-header-title has-text-white"
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.name}
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          {" "}
          <ReactReadMoreReadLess
            charLimit={420}
            readMoreStyle={{
              fontWeight: "bold",
              cursor: "pointer",
            }}
            readLessStyle={{ fontWeight: "bold", cursor: "pointer" }}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {props.desc}
          </ReactReadMoreReadLess>
        </div>
        <br />
        <section className="tags" id="projectTags">
          <div className="container">
            <p>
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className={`tag cust-tag ${
                    TAG_TYPES[Math.floor(Math.random() * LEN)]
                  } is-medium`}
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </section>
        <section className="details">
          <p>
            <b>Mentored by:</b>
            {[...Array(props.length).keys()].map((index) => {
              return (
                <div>
                  <a href={`https://github.com/${props.mentorUsername[index]}`}>
                    {props.mentor[index]}
                  </a>
                  <br />
                  {loggedIn && (
                    <p>
                      (
                      <a href={`mailto:${props.mentorId[index]}`}>
                        {props.mentorId[index]}
                      </a>
                      )
                    </p>
                  )}
                </div>
              );
            })}
          </p>
          <p>
            <a
              className="footer-btn button is-link is-outlined channel-link"
              href={props.commLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Channel
            </a>
          </p>
        </section>
      </div>

      <footer className="card-footer">
        <a
          className="footer-btn button is-primary is-medium is-fullwidth"
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </footer>
    </div>
  );
}
