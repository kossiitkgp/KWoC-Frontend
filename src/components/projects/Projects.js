import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from './ProjectCard';

import '../../styles/projects.scss';

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

  const [allProjects, setAllProjects] = useState([])

  useEffect(() => {
    // Fetching all projects from backend or Frontend
    setAllProjects(dummyProjects)
  }, [])

  return (
    <div className='projects'>
      <Navbar />
      <section class='hero is-medium is-danger is-bold'>
        <div class='hero-body'>
            <div class='container'>
                <h1 class='title'>Projects</h1>
                <h2 class='subtitle'>
                    Find yourself a project in your preferred language, category or topic.
                </h2>
          </div>
        </div>
      </section>
        
        <div className='container'>
            <div class="field">
                <div class="control">
                    <input class="input is-primary is-medium" type="text" placeholder="Search projects"></input>
                </div>
            </div>
            <div class="columns is-multiline is-centered">
            {allProjects.map((project,id) => (
              <div key={id} class="column is-centered project-card">
            <Card 
            name={project.name}
            desc={project.desc}
            mentor={project.mentor}
            tags={project.tags}
            ></Card>
            </div>
            ))}
            </div>
        </div>
        
        
        <Footer />
    </div>
  );
}
