import React from 'react';

import '../../styles/projects.scss';

export default function Card(props) {
  return (
    <div class="is-centered" className='about' >
      <div class="card is-one-quarter">
        <header class="card-header has-background-link has-text-white">
            <p class="card-header-title has-text-white">
              {props.name}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
               <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
             </a>
        </header>
        <div class="card-content">
            <div class="content">
                {props.desc}
                <br/><br/><br/><br/>
            </div>
            <div>
                Mentored by: {props.mentor}
            </div>
        </div>
        <div class="card-content tags columns">
            {props.tags.map(tag => (
              <span class="tag is-warning is-rounded column">{tag}</span>
            ))}
        </div>
        <footer class="card-footer is-centered">
        <button class="footer-btn button is-info is-medium is-fullwidth">Details</button>
        </footer>
      </div>
    </div>
  );
}
