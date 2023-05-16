import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/ProjectCard.js";
import Projects2022 from "../data/projects-2022.json";
import { shuffleArray } from "../utils/shuffle";

function projectSortPolicy(arr) {
  /* Sorts an array of Projects using a given policy
   * Current policy: Club sorted list of projects into groups of 3 of "similar" description length.
   * Then choose a strata size within which projects are randomized.
   */

  let sortedProjs = arr.sort((a, b) =>
    a.Desc.length + a.Tags.length < b.Desc.length + b.Tags.length ? 1 : -1
  );

  let clubbedProjs = [];
  let clubbing = [];
  for (let i = 0; i < sortedProjs.length; i++) {
    clubbing.push(sortedProjs[i]);
    if (i % 3 === 2) {
      let copyClub = [];
      clubbing.forEach((elt) => {
        copyClub.push(elt);
      });
      clubbedProjs.push(copyClub);
      clubbing = [];
    }
  }

  if (clubbing.length !== 0) {
    clubbedProjs.push(clubbing);
  }

  const STRATA_SIZE = 6;

  let stratifiedProjs = [];
  let strata = [];

  for (let i = 0; i < clubbedProjs.length; i++) {
    strata.push(clubbedProjs[i]);
    if (i % STRATA_SIZE === STRATA_SIZE - 1) {
      let copyStrata = [];
      strata.forEach((elt) => {
        copyStrata.push(elt);
      });
      stratifiedProjs.push(copyStrata);
      strata = [];
    }
  }

  if (strata.length !== 0) {
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
  keys: [
    "Name",
    "Desc",
    "Tags",
    "Mentor.Username",
    "Mentor.Name",
    "SecondaryMentor.Username",
    "SecondaryMentor.Name",
  ],
  // the threshold value should be decreased to be more strict in getting search results
  threshold: 0.5,
};

export default function Projects() {
  const [searchText, setSearchText] = useState("");

  const [allProjects, setAllProjects] = useState(Projects2022);
  const [searchedProjects, setSearchedProjects] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fuse = new Fuse(allProjects, searchOptions);
    const results = fuse.search(searchText).map((i) => i.item);
    setSearchedProjects(results);
  }, [allProjects]);

  const setURLParams = (query) => {
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("query", query || "");
    window.history.replaceState({}, "", `${location.pathname}?${urlParams}`);
  };

  function handleSearch(e) {
    const fuse = new Fuse(allProjects, searchOptions);
    setURLParams(e.target.value);
    setSearchText(e.target.value);
    const results = fuse.search(e.target.value).map((i) => i.item);
    setSearchedProjects(results);
  }

  let displayedProjects = [];
  if (searchText === "") displayedProjects = allProjects;
  else displayedProjects = searchedProjects;

  return (
    <div className="projects">
      <div class="projects-hero">
        <h1 class="title">Projects</h1>
      </div>

      <div className="projects-search-box">
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="Search projects using project name, topics and mentor"
            onChange={handleSearch}
            value={searchText}
          ></input>
        </div>
      </div>

      <div class="project-card-grid">
        {displayedProjects.map((project, id) => (
          <Card
            name={project.Name}
            desc={project.Desc}
            mentor={project.Mentor.Name}
            mentorEmail={project.Mentor.Email}
            mentorUsername={project.Mentor.Username}
            secondaryMentor={project.SecondaryMentor.Name}
            secondaryMentorEmail={project.SecondaryMentor.Email}
            secondaryMentorUsername={project.SecondaryMentor.Username}
            tags={
              typeof JSON.parse(project.Tags)[0] === "object"
                ? []
                : JSON.parse(project.Tags)
            }
            projectLink={project.RepoLink}
            commLink={project.ComChannel}
            length={project.Desc.length}
          ></Card>
        ))}
      </div>
      <br />
    </div>
  );
}
