import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className='about'>
      <Navbar />
      <section class='hero is-medium is-info is-bold'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>About KWoC</h1>
            <h2 class='subtitle'>
              Learn more about the endearing event and the team behind KWoC!
              (xypnox is in the team)
            </h2>
          </div>
        </div>
      </section>

      <div className='container'>
        <p>
          Kharagpur Winter of Code is a 5-week long online program for students
          who are new to open source software development. The program not only
          helps students to get involved in open source, but also prepares them
          for many open source summer programs; Google Summer of Code being one
          of them.
        </p>
      </div>
      <Footer />
    </div>
  );
}
