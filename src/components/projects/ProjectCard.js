import React from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';

import '../../styles/projects.scss';

export default function Card(props) {
  const TAG_TYPES = [
    'is-primary',
    'is-link',
    'is-info',
    'is-success',
    'is-warning',
    'is-danger',
    'is-black',
    'is-dark',
    'is-light',
    'is-primary is-light',
    'is-link is-light',
    'is-info is-light',
    'is-success is-light',
    'is-warning is-light',
    'is-danger is-light',
  ];
  const LEN = TAG_TYPES.length;
  return (
    <div className='card'>
      <header className='card-header has-text-white'>
        <p className='card-header-title has-text-white is-centered'>
          {props.name}
        </p>
      </header>
      <div className='card-content'>
        <div className='content'>
          {' '}
          <ReactReadMoreReadLess
            charLimit={420}
            readMoreStyle={{
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            readLessStyle={{ fontWeight: 'bold', cursor: 'pointer' }}
            readMoreText={'Read more ▼'}
            readLessText={'Read less ▲'}
          >
            {props.desc}
          </ReactReadMoreReadLess>
        </div>
        <br />
        <section className='tags' id='projectTags'>
          <div className='container'>
            <p>
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className={`tag cust-tag ${
                    TAG_TYPES[Math.floor(Math.random() * LEN)]
                  } is-medium`}
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </section>
        <section className='details'>
          <p>
            <b>Mentored by:</b>
            {[...Array(props.length).keys()].map((index) => {
              return (
                <div>
                  <a href={`https://github.com/${props.mentorUsername[index]}`}>
                    {props.mentor[index]}
                  </a>
                  <br />(
                  <a
                    style={{ color: '#4A4A4A' }}
                    href={`mailto:${props.mentorId[index]}`}
                  >
                    {props.mentorId[index]}
                  </a>{' '}
                  )
                </div>
              );
            })}
          </p>
          <p>
            <a
              className='footer-btn button is-link is-outlined'
              href={props.commLink}
              target='_blank'
            >
              Join Channel
            </a>
          </p>
        </section>
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
