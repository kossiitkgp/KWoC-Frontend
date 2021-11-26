import React from "react";
import pullRequest from "../assets/git-pull-request.svg";
import github from "../assets/github.svg";
import group from "../assets/people.svg";
import BlurredCircles from "../components/BlurredCircles";
import Timeline from "../components/Timeline";
import {
  MENTOR_MANUAL,
  MENTOR_REGISTRATION_LINK,
  STUDENT_MANUAL,
  STUDENT_REGISTRATION_LINK,
} from "../constants";

function Home() {
  const tags = [
    "Machine learning",
    "Android",
    "Computer Vision",
    "Gaming",
    "Backend",
    "Natural Language Processing",
    "Scrapping",
    "Cognition",
    "Front End",
    "Deep Learning",
    "Operating System",
    "DBMS",
    "OOP",
    "Compilers",
    "Security",
    "Data Mining",
    "Simulations",
    "Artificial Intelligence",
  ];

  const colors = ["red", "green", "blue", "grey"];

  return (
    <div className="home">
      <section className="hero">
        <BlurredCircles />
        <div className="hero-body">
          <h1 className="title">KWoC.</h1>

          <div className="btns-container">
            <a className="button" href={STUDENT_REGISTRATION_LINK}>
              Student Registration
            </a>

            <a className="button" href={MENTOR_REGISTRATION_LINK}>
              Mentor Registration
            </a>
          </div>

          <div className="btns-container">
            <a
              className="button secondary"
              href={STUDENT_MANUAL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Student Manual
            </a>

            <a
              className="button secondary"
              href={MENTOR_MANUAL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Mentor Manual
            </a>
          </div>
        </div>
      </section>

      <section className="container" id="about">
        <div className="about">
          <h1>About</h1>
          <p>
            Kharagpur Winter of Code is a 5-week long online program for
            students who are new to open source software development. The
            program not only helps students to get involved in open source, but
            also prepares them for many open source summer programs; Google
            Summer of Code being one of them.
          </p>
        </div>
        <div className="why-kwoc">
          <h1>Why KWoC?</h1>
          <div className="why-kwoc-cardlist">
            <div className="why-kwoc-card">
              <h2>Intro to Open Source</h2>
              <p>
                KWoC provides a great opportunity to get acquainted with Github
                along with Git commands and contribute to open source
                efficiently. Brush up your coding skills
              </p>
              <p>
                If you love coding and want to learn about software development
                then KWoC helps you to get a glimpse of it and gives you a head
                start.
              </p>
            </div>
            <div className="why-kwoc-card">
              <h2>Prepare for GSoC</h2>
              <p>
                With KWoC, you get to know about how to select a project,
                interact with mentors and learn all other things that prepare
                you in the best way for the next GSoC.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tags container" id="tags">
        <h1 className="tags-title">Tags</h1>
        <div className="tags-list">
          {tags.map((tag, index) => (
            <a
              href={`${window.location.origin}/projects?query=${tag}`}
              key={tag}
              className="tag"
              color={colors[index % 4]}
            >
              {tag}
            </a>
          ))}
        </div>
      </section>

      <section className="timeline container" id="tline">
        <h1>Timeline</h1>
        <Timeline />
      </section>

      <section className="stats container">
        <h1>Statistics: KWoC 2020</h1>
        <div className="stats-column-wrapper">
          <div className="stats-column">
            <img src={group} alt="Group" />
            <h3>2500+ Participants</h3>
          </div>

          <div className="stats-column">
            <img src={github} alt="Project" />
            <h3>2.1 Million+ Lines of Code</h3>
          </div>

          <div className="stats-column">
            <img src={pullRequest} alt="pullRequest" />
            <h3>1400+ Pull Requests</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
