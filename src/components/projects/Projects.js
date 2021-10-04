import axios from "axios";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/projects.scss";
import Card from "./ProjectCard.js";
import { shuffleArray } from "./shuffle";

function projectSortPolicy(arr) {
  /* Sorts an array of Projects using a given policy
   * Current policy: Club sorted list of projects into groups of 3 of "similar" description length.
   * Then choose a strata size within which projects are randomized.
   */

  let sortedProjs = arr.sort((a, b) =>
    a.ProjectDesc.length + a.ProjectTags.length <
    b.ProjectDesc.length + b.ProjectTags.length
      ? 1
      : -1
  );

  let clubbedProjs = [];
  let clubbing = [];
  for (let i = 0; i < sortedProjs.length; i++) {
    clubbing.push(sortedProjs[i]);
    if (i % 3 == 2) {
      let copyClub = [];
      clubbing.forEach((elt) => {
        copyClub.push(elt);
      });
      clubbedProjs.push(copyClub);
      clubbing = [];
    }
  }

  if (clubbing.length != 0) {
    clubbedProjs.push(clubbing);
  }

  const STRATA_SIZE = 6;

  let stratifiedProjs = [];
  let strata = [];

  for (let i = 0; i < clubbedProjs.length; i++) {
    strata.push(clubbedProjs[i]);
    if (i % STRATA_SIZE == STRATA_SIZE - 1) {
      let copyStrata = [];
      strata.forEach((elt) => {
        copyStrata.push(elt);
      });
      stratifiedProjs.push(copyStrata);
      strata = [];
    }
  }

  if (strata.length != 0) {
    stratifiedProjs.push(strata);
  }

  for (let i = 0; i < stratifiedProjs.length; i++) {
    shuffleArray(stratifiedProjs[i]);
  }

  let finalOrder = [];
  stratifiedProjs.forEach((elt) => {
    elt.forEach((projList) => {
      projList.forEach((proj) => {
        finalOrder.push(proj);
      });
    });
  });

  return finalOrder;
}

const searchOptions = {
  keys: ["ProjectName", "ProjectDesc", "MentorName", "ProjectTags"],
  // the threshold value should be decreased to be more strict in getting search results
  threshold: 0.5,
};

export default function Projects() {
  const [searchText, setSearchText] = useState("");

  const [allProjects, setAllProjects] = useState([]);
  const [searchedProjects, setSearchedProjects] = useState([]);

  const URL = "https://kwoc.metamehta.me/project/all";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setAllProjects(projectSortPolicy(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSearch(e) {
    const fuse = new Fuse(allProjects, searchOptions);
    setSearchText(e.target.value);
    const results = fuse.search(e.target.value).map((i) => i.item);
    setSearchedProjects(results);
  }

  let displayedProjects = [];
  if (searchText === "") displayedProjects = allProjects;
  else displayedProjects = searchedProjects;

  return (
    <div className="projects">
      <Navbar />
      {/* <section class='hero is-medium is-danger is-bold' id='projects'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title' style={{ color: 'white' }}>
              Projects
            </h1>
          </div>
        </div>
      </section> */}

      <h1 style={{ textAlign: "center" }} className="title">
        Projects
      </h1>

      <div className="container">
        <div class="field">
          <div class="control">
            <input
              class="input is-primary is-medium"
              type="text"
              placeholder="Search projects using project name, topics and mentor"
              onChange={handleSearch}
            ></input>
          </div>
        </div>

        <div class="columns is-multiline is-centered">
          {displayedProjects.map((project, id) => (
            <div key={id} class="column has-text-centered is-4">
              <Card
                name={project.ProjectName}
                desc={project.ProjectDesc}
                mentor={project.MentorName}
                tags={JSON.parse(project.ProjectTags)}
                mentorId={project.MentorEmail}
                mentorUsername={project.MentorUsername}
                projectLink={project.ProjectRepoLink}
                commLink={project.ProjectComChannel}
                length={project.MentorName.length}
              ></Card>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
