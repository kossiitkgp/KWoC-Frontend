import React, { useEffect, useState } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Card(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    // TODO: use auth hook here
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
      <header className="card-header">{props.name}</header>
      <section className="details">
        <b>Mentored by:</b>
        {loggedIn ? (
          <a href={`mailto:${props.mentorEmail}`}>{props.mentor}</a>
        ) : (
          props.mentor
        )}
        {loggedIn && props.secondaryMentor ? (
          <a href={`mailto:${props.secondaryMentorEmail}`}>
            {", "}
            {props.secondaryMentor}
          </a>
        ) : (
          ` ${props.secondaryMentor}`
        )}
        {/* {[...Array(props.length).keys()].map((index) => {
          return (
            <div>
              {props.mentor[index]}
              {loggedIn && (
                <a href={`mailto:${props.mentorId[index]}`}>
                  {props.mentorId[index]}
                </a>
              )}
            </div>
          );
        })} */}
      </section>
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
        <section id="projectTags">
          {props.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </section>
      </div>

      <footer className="card-footer">
        <a
          className="button"
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <a
          className="button"
          href={props.commLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Channel
        </a>
      </footer>
    </div>
  );
}
