import React, { useState, useEffect  } from 'react';
import '../../styles/Form.scss';
import '../../styles/css-fontello-github-circled/fontello.css';
import '../../styles/css-fontello-mail-alt/fontello.css';

export default function Form(props) {
  
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const { username, name, email } = props.location.state

    const data = {
        'username': username,
        'name': name,
        'email': email,
    }
 
    setUsername(username)
    setName(name)
    setEmail(email)
  },[])
  
  function handleSubmit(e) {
    e.preventDefault();
    const URL = "http://localhost:5000/form/student"
    const data = {
      'username': username,
      'name': name,
      'email': email,
      'jwt': localStorage.getItem('mentor_jwt')
    }
    
    fetch(URL, {
      method: 'POST',
      data: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 200)
        props.history.push('/dashboard/mentor')
    })
    .catch(err => {
      console.log('err in student form ', err)
    })
  }

  
  
  return (
    <div className='box'>

  <h2>Mentor Form</h2>
    <h3>Welcome {username}</h3>

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
