import React from 'react';
import Colleges from '../data/colleges.js';
import '../styles/Form.scss';
import '../styles/css-fontello-github-circled/fontello.css';
import '../styles/css-fontello-mail-alt/fontello.css';

export default function Form() {
  return (
    <div className='box'>

    <h3>Welcome MENTOR_NAME</h3>
      
      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder=''
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Email</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder=''
          />
          <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-mail-alt' />
          </span>
        </div>
      </div>

     


    
      

      <div>
        <a class='button is-info is-rounded is-fullWidth column is-full'>
          Submit
        </a>
      </div>
    </div>
  );
}
