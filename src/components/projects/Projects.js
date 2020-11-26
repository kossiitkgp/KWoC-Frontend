import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from './ProjectCard';
import Fuse from 'fuse.js';

import '../../styles/projects.scss';

const searchOptions = {
  "keys": [
    "name",
    "desc",
    "mentor",
    "tags"
  ],
  // the threshold value should be decreased to be more strict in getting search results
  "threshold": 0.5
}
// temporary data for testing purpose
const dummyProjects = [
  {
    "name": "ANDYMOUSE",
    "desc": "The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.",
    "mentor": "Soumyajit Chakraborty",
    "tags": ['Android studio (java)', 'Basic python']
  },
  {
    "name": "cat cat",
    "desc": "The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.",
    "mentor": "test Chakraborty",
    "tags": ['html', 'html5']
  },
  {
    "name": "tom and jerry",
    "desc": "The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.",
    "mentor": "test1111",
    "tags": ['Android studio (java)', 'Basic python']
  }
]

export default function Projects() {
  const [searchText, setSearchText] = useState('')
  
  const [allProjects, setAllProjects] = useState([])
  const [searchedProjects, setSearchedProjects] = useState([])

  useEffect(() => {
    // Fetching all projects from backend or Frontend
    setAllProjects(dummyProjects)
  }, [])

  function handleSearch(e) {
    const fuse = new Fuse(allProjects, searchOptions)
    setSearchText(e.target.value)
    const results = fuse.search(e.target.value).map(i => i.item)
    setSearchedProjects(results)
  }
  
  let displayedProjects = []
  if(searchText === "")
    displayedProjects = allProjects
  else
    displayedProjects = searchedProjects
  
    return (
    <div className='projects'>
      <Navbar />
      <section class='hero is-medium is-danger is-bold' id='projects'>
        <div class='hero-body'>
            <div class='container'>
                <h1 class='title'>Projects</h1>
                <h2>
                    KWoC '20 Projects will be updated on 6th December,2020. Till then have a look at previous year projects <a  style ={{ color: "white"}} href="https://kwoc19.kossiitkgp.org/projects.html"><u>here</u></a>
                </h2>
          </div>
        </div>
      </section>
        
        {/* <div className='container'>
            <div class="field">
                <div class="control">
                    <input class="input is-primary is-medium" type="text" placeholder="Search projects" onChange={handleSearch}></input>
                </div>
            </div>
            <div class="columns is-multiline is-centered">
            {
             displayedProjects.map((project,id) => (
                <div key={id} class="column is-centered project-card">
                  <Card 
                  name={project.name}
                  desc={project.desc}
                  mentor={project.mentor}
                  tags={project.tags}
                  >
                  </Card>
                </div>
              ))
            }
            </div>
        </div> */}
       <Footer />
    </div>
  );
}
