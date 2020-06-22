import React, { useState }from 'react';
import Colleges from '../data/colleges.js';
import Tags from '../data/tags.js';
import CreatableSelect from 'react-select/creatable';

import '../styles/Form.scss';
import '../styles/css-fontello-github-circled/fontello.css';
import '../styles/css-fontello-mail-alt/fontello.css';

const options = Tags.map(item => { return {'value': item, 'label': item} }) 

export default function Form() {
  
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [repolink, setRepolink] = useState('')
  const [channelLink, setChannelLink] = useState('')
  const [tags, setTags] = useState([])

  function handleChange(tags, action) {
    console.log('tags are', tags);
    const selectedTags = tags.map(item => item.value)
    setTags(selectedTags)
  }

  function handleSubmit(e) {
    e.preventDefault();

    // data to be sent to backend
    const data = {
      'Name': name,
      'Desc': desc,
      'RepoLink': repolink,
      'channelLink': channelLink,
      'Tags': tags
    }

    console.log('data to be sent ',data)
    // make an axios request here
  }

  
  return (
    <div className='box'>
      <div className='field'>
        <label className='label'>Project Name</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Cool name of your project'
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Project Description</label>
        <div className='control has-icons-left has-icons-right'>
          <textarea 
          className="textarea" 
          placeholder="Briefly 50 words about your Project"
          onChange={e => setDesc(e.target.value)}
          />
          
        </div>
      </div>

      <div className='field'>
        <label className='label'>Github link to the Repo</label>
        <div className='control has-icons-left has-icons-right'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder={`https://github.com/mentor/project`}
            onChange={e => setRepolink(e.target.value)}
          />
          <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-github-circled' />
          </span>
        </div>
      </div>

      <div className='field'>
        <label className='label'>Communication channel</label>
        <div className='control'>
          <input
            className='input is-rounded is-info'
            type='text'
            placeholder='Slack invite link for example'
            onChange={e => setChannelLink(e.target.value)}
          />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Tags for the project</label>
        <div className='control'>
           <CreatableSelect
              isMulti
              isClearable
              onChange={handleChange}
              options={options}
            />
        </div>
      </div>
      
      <div>
        <a 
        className='button is-info is-rounded is-fullWidth column is-full'
        onClick={handleSubmit}
        >
        
        Submit
        </a>
      </div>
    </div>
  );
}

