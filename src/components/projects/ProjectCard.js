import React from 'react';

import '../../styles/projects.scss';

export default function Card(props) {
  return (
    <div className='card'>
      <header className='card-header has-background-link has-text-white'>
        <p className='card-header-title has-text-white is-centered'>
          {props.name}
        </p>
      </header>
      <div className='card-content'>
        <div className='content'>{props.desc}</div>
        <br />
        <section className='tags' id='projectTags'>
          <div className='container'>
            <p>
              {props.tags.map((tag) => (
                <span key={tag} className='tag cust-tag is-dark is-medium'>
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </section>
        <br />
        <p>
          Mentored by: {props.mentor}
          <br /> ({props.mentorId})
        </p>
        <p>
          Communication Channel:
          <a
            className='footer-btn button is-link is-outlined'
            href={props.commLink}
            target='_blank'
          >
            Join Now
          </a>
        </p>
      </div>

      <footer className='card-footer is-centered'>
        <a
          className='footer-btn button is-primary is-medium is-fullwidth'
          href={props.projectLink}
          target='_blank'
        >
          View Project
        </a>
      </footer>
    </div>
  );
}
