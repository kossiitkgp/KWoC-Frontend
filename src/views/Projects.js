import axios from "axios";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/ProjectCard.js";
import { BACKEND_URL } from "../constants";
import dummyProjects from "../data/projectsDummy.json";
import { shuffleArray } from "../utils/shuffle";

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
  keys: ["ProjectName", "ProjectDesc", "MentorName", "ProjectTags"],
  // the threshold value should be decreased to be more strict in getting search results
  threshold: 0.5,
};

export default function Projects() {
  const [searchText, setSearchText] = useState("");

  const [allProjects, setAllProjects] = useState([]);
  const [searchedProjects, setSearchedProjects] = useState([]);

  const URL = `${BACKEND_URL}/project/all`;
  const location = useLocation();

  const headers = {
    Bearer: localStorage.getItem("student_jwt"),
  };

  useEffect(() => {
    axios
      .get(URL, { headers })
      .then((response) => {
        setAllProjects(projectSortPolicy(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("query");
    if (query !== null) {
      setSearchText(query);
      const fuse = new Fuse(allProjects, searchOptions);
      const results = fuse.search(query).map((i) => i.item);
      setSearchedProjects(results);
    }
  }, []);

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

  //DEMO. REMOVE THIS WHEN BACKEND IS UP
  dummyProjects.projects.map((project) => {
    const Obj = {
      ProjectName: project.title,
      ProjectDesc: project.intro,
      MentorName: [project.mentor],
      ProjectTags: JSON.stringify(project.tags),
      MentorEmail: project.mentor_email,
      MentorUsername: project.mentor,
      ProjectRepoLink: project.link,
      ProjectComChannel: project.comm,
    };

    displayedProjects.push(Obj);
  });

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
        ))}
      </div>
      <br />
    </div>
  );
}
