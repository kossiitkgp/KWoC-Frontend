import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Fuse from 'fuse.js';
import Card from './ProjectCard.js';

import '../../styles/projects.scss';

const searchOptions = {
  keys: ['name', 'desc', 'mentor', 'tags'],
  // the threshold value should be decreased to be more strict in getting search results
  threshold: 0.5,
};
// temporary data for testing purpose
const dummyProjects = [
  {
    name: 'ANDYMOUSE',
    desc:
      'The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.',
    mentor: 'Soumyajit Chakraborty',
    mentorEmail: 'soumyajit1729@gmail.com',
    projectLink: 'https://github.com/soumyajit1729/AndyMouse-kWoC',
    communicationLink: '#',
    tags: ['Android studio (java)', 'Basic python'],
  },
  {
    name: 'Cat Cat',
    desc:
      'The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.',
    mentor: 'test Chakraborty',
    mentorEmail: 'mentor@gmail.com',
    projectLink: 'https://www.google.co.in/',
    communicationLink: '#',
    tags: ['html', 'html5', 'css', 'javascript'],
  },
  {
    name: 'Tom & Jerry',
    desc:
      'The students need to improve an app which will enable the user to control the pointer in a PC. Implementation - acceleration/gyroscope of the phone as input, which needs to be converted to mouse pointer output.',
    mentor: 'test1111',
    mentorEmail: 'mentor@gmail.com',
    projectLink: 'https://www.google.co.in/',
    communicationLink: '#',
    tags: ['Android studio (java)', 'Basic python'],
  },
];

export default function Projects() {
  const [searchText, setSearchText] = useState('');

  const [allProjects, setAllProjects] = useState([]);
  const [searchedProjects, setSearchedProjects] = useState([]);

  useEffect(() => {
    // Fetching all projects from backend or Frontend
    setAllProjects(dummyProjects);
  }, []);

  function handleSearch(e) {
    const fuse = new Fuse(allProjects, searchOptions);
    setSearchText(e.target.value);
    const results = fuse.search(e.target.value).map((i) => i.item);
    setSearchedProjects(results);
  }

  let displayedProjects = [];
  if (searchText === '') displayedProjects = allProjects;
  else displayedProjects = searchedProjects;

  return (
    <div className='projects'>
      <Navbar />
      <section class='hero is-medium is-danger is-bold' id='projects'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title' style={{ color: 'white' }}>
              Projects
            </h1>
            <h2>
              KWoC '20 Projects will be updated on 6th December, 2020. Till then
              have a look at{' '}
              <a
                style={{ color: 'white' }}
                href='https://kwoc19.kossiitkgp.org/projects.html'
              >
                <u>previous year projects</u>
              </a>
            </h2>
          </div>
        </div>
      </section>

      <div className='container'>
        <div class='field'>
          <div class='control'>
            <input
              class='input is-primary is-medium'
              type='text'
              placeholder='Search projects'
              onChange={handleSearch}
            ></input>
          </div>
        </div>

        <div class='columns is-multiline is-centered'>
          {displayedProjects.map((project, id) => (
            <div key={id} class='column has-text-centered is-4'>
              <Card
                name={project.name}
                desc={project.desc}
                mentor={project.mentor}
                tags={project.tags}
                mentorId={project.mentorEmail}
                projectLink={project.projectLink}
                commLink={project.communicationLink}
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
