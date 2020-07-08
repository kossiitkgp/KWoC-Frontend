import React, { useState, useEffect  } from 'react';
import Colleges from '../data/colleges.js';
import '../styles/Form.scss';
import '../styles/css-fontello-github-circled/fontello.css';
import '../styles/css-fontello-mail-alt/fontello.css';

export default function Form(props) {
  
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const { username, name, email, type } = props.location.state

    // if all of them are filled send data to the backend to get the token
    if(email !== '') {
      const data = {
        'username': username,
        'name': name,
        'email': email,
        'type': type
      }
      console.log("SEND THIS DATA TO BACKEND AND GET TOKEN")
    }
    setUsername(username)
    setName(name)
    setEmail(email)
  },[])
  
  function handleSubmit(e) {
    e.preventDefault();

    // data to be sent to backend, to get the token
    const data = {
      'username': username,
      'name': name,
      'email': email,
      'type': props.location.state.type
    }

    console.log('sending this ',data)
  }

  
  
  return (
    <div className='box'>

  <h2>{props.location.state.type} Form</h2>
    <h3>Welcome {props.location.state.name}</h3>

      <div className='field'>
        <label className='label'>Github Username</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Name'
            defaultValue={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
      </div>


      <div className='field'>
        <label className='label'>Name</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Name'
            defaultValue={name}
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
            defaultValue={email}
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
