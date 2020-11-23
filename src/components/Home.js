import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Timeline from './timelinedata/Timeline';
import '../styles/about.scss';
import '../styles/home.scss';
import '../styles/why.scss';
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <section className='hero is-fullheight is-dark is-bold'>
        <Particles
          className='particles'
          params={{
            particles: {
              number: {
                value: 350,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: '#fff',
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 12.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 4,
                direction: 'bottom',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble',
                },
                onclick: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  size: 4,
                  duration: 0.3,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title' id='hero'>
              Welcome to KWoC
            </h1>

            <div className='reg-btns field is-grouped'>
              <p className='control'>
                <a
                  className='button is-fullwidth is-medium'
                  href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=student'
                >
                  Student Registration
                </a>
              </p>
              <p className='control'>
                <a
                  className='button is-fullwidth is-medium'
                  href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=mentor'
                >
                  Mentor Registration
                </a>
              </p>
            </div>

            <div className='manual-btns field is-grouped'>
              <p className='control'>
                <a
                  className='button is-fullwidth is-medium'
                  href='https://github.com/kossiitkgp/kwoc-2018/blob/master/static/files/KWoCStudentManual.pdf'
                >
                  Student Manual
                </a>
              </p>
              <p className='control'>
                <a
                  className='button is-fullwidth is-medium'
                  href='https://github.com/kossiitkgp/kwoc-2018/blob/master/static/files/KWoCMentorManual.pdf'
                >
                  Mentor Manual
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='container'>
          <h1>About</h1>
          <p>
            Kharagpur Winter of Code is a 5-week long online program for
            students who are new to open source software development. The
            program not only helps students to get involved in open source, but
            also prepares them for many open source summer programs; Google
            Summer of Code being one of them.
          </p>
        </div>
      </section>

      <section className='timeline' id='tline'>
        <div className='container'>
          <h1> Timeline</h1>
          <Timeline />
        </div>
      </section>
      <section className='tags'>
        <div className='container'>
          <h1>Tags</h1>

          <p>
            <span class='tag is-dark is-medium'>Machine learning</span>
            <span class='tag is-light is-medium' style={{ background: '' }}>
              {' '}
              Android
            </span>
            <span class='tag is-dark is-medium'>Computer Vision</span>
            <span class='tag is-light is-medium'> Gaming</span>
            <span class='tag is-dark is-medium'> Backend</span>
            <span class='tag is-light is-medium'>
              Natural Language Processing
            </span>
            <span class='tag is-dark is-medium'> Scrapping</span>
            <span class='tag is-light is-medium'> Cognition</span>
            <span class='tag is-dark is-medium'> Front End</span>
            <span class='tag is-light is-medium'>Deep Learning</span>
            <span class='tag is-dark is-medium'>Operating System</span>
            <span class='tag is-light is-medium'> DBMS</span>
            <span class='tag is-dark is-medium'> OOP </span>
            <span class='tag is-light is-medium'> Compilers</span>
            <span class='tag is-dark is-medium'>Security</span>
            <span class='tag is-light is-medium'>Data Mining</span>
            <span class='tag is-dark is-medium'>Simulations</span>
            <span class='tag is-light is-medium'>Artificial Intelligence</span>
          </p>
        </div>
      </section>

      <section className='why-kwoc'>
        <div className='container'>
          <h1>Why KWoC?</h1>

          <h3>Intro to Open Source</h3>

          <p>
            KWoC provides a great opportunity to get acquainted with Github
            along with Git commands and contribute to open source efficiently.
            Brush up your coding skills
          </p>

          <p>
            If you love coding and want to learn about software development then
            KWoC helps you to get a glimpse of it and gives you a head start.
          </p>

          <h3>Prepare for GSoC</h3>

          <p>
            With KWoC, you get to know about how to select a project, interact
            with mentors and learn all other things that prepare you in the best
            way for the next GSoC.
          </p>
        </div>
      </section>

      <section className='stats'>
        <div className='container'>
          <h1>Statistics: KWoC 2017</h1>
          <div className='columns'>
            <div className='column'>
              <Card
                heading='1850+ Participants'
                img={{
                  link: 'test.jpg',
                  alt: 'Image taken from Unplash',
                  style: 'fluid',
                }}
              />
            </div>
            <div className='column'>
              <Card
                heading='105+ Projects'
                tags={[
                  { value: 'ML', type: 'primary' },
                  { value: 'NLP', type: 'primary' },
                  { value: 'OS', type: 'primary' },
                  { value: 'JavaScript & React', type: 'primary' },
                ]}
              />
            </div>
            <div className='column'>
              <Card heading='70+ Mentors' body='Some Random Body' />
            </div>
          </div>

          <p>
            KWoC 2017 carried forward the legacy set by the 2016 edition; and in
            many ways went past the set milestones. It was staggering
            participation from students, many of them made their first
            contributions to open source during KWoC, and mentors, who saw their
            projects surpass their own expectations by the end of the program.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
