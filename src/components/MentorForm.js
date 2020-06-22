import React, { useState } from 'react';
import Colleges from '../data/colleges.js';
import '../styles/Form.scss';
import '../styles/css-fontello-github-circled/fontello.css';
import '../styles/css-fontello-mail-alt/fontello.css';

export default function Form() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault();

    // data to be sent to backend
    const data = {
      'github_handle': '',
      'name': name,
      'email': email
    }

    console.log('sending this ',data)
  }

  
  
  return (
    <div className='box'>

    <h3>Welcome MENTOR_NAME</h3>
      
      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Name'
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Email</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />
          <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-mail-alt' />
          </span>
        </div>
      </div>

      <div>
        <a class='button is-info is-rounded is-fullWidth column is-full' onClick={handleSubmit}>
          Submit
        </a>
      </div>
    </div>
  );
}
