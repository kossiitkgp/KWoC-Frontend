import React, { useState }from 'react';
import Tags from '../data/tags.js';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios'

import '../styles/Form.scss';
import '../styles/css-fontello-github-circled/fontello.css';
import '../styles/css-fontello-mail-alt/fontello.css';

const options = Tags.map(item => { return {'value': item, 'label': item} }) 

 function checkLink(link) {
 const  pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
 '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
 '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
 '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
 '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
 '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(link);
  }

async function checkRepo(repolink) {
  const returnMsg = {
    'status': true,
    'message': ''
  }

  // remove the last trailing slash, if it exists
  if (repolink.slice(-1) === "/") {
    repolink = repolink.slice(0,-1)
  }

  const splitArr = repolink.split("/")
  const len = splitArr.length

  const repoName = splitArr[len-1]
  const ownerName = splitArr[len-2]

  const headers = {
    "username": "adc3de3ce14dcf52af0afc0a40e6c3fee5d086e6",
    
  }

  
  // check for minimum number of issues, along with valid URL or not
  const issuesURL = `https://api.github.com/repos/${ownerName}/${repoName}/issues?q=state:open`
  try {
    const res = await axios.get(issuesURL, headers)
    const issues = res.data.filter(item => !item.hasOwnProperty('pull_request'))
    const numOfIssues = issues.length
    if(numOfIssues < 4)
      returnMsg['message'] = `Repo has only ${numOfIssues} issues, Please maintain atleast 4 issues. `
  } 
  catch(err) {
    returnMsg['message'] = `Please add a valid Github link repo with atleast 4 open issues. `
  }

  // check for a minimum README
  const readmeURL = `https://api.github.com/repos/${ownerName}/${repoName}/readme`
  try {
    const res = axios.get(readmeURL, headers)
    if(res.data.size < 100)
    returnMsg['message'] += `Please add a more descriptive modified README of atleast 100 characters.`  
  }
  catch(err) {
    returnMsg['message'] += `Please add a descriptive README.md of atleast 100 characters. `
  }

  if (returnMsg['message'] === '')
    return returnMsg
    
    returnMsg['status'] = false
    return returnMsg
}


export default function Form() {
  
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [repolink, setRepolink] = useState('')
  const [channelLink, setChannelLink] = useState('')
  const [tags, setTags] = useState([])

  const [errInRepo, setErrInRepo] = useState('')
  const [errInLink, setErrInLink] = useState('')

  function handleChange(tags, action) {
    const selectedTags = tags.map(item => item.value)
    setTags(selectedTags)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // checking if repo meets requirements or not
    const repoStatus = await checkRepo(repolink)
    const isRepoValid = repoStatus['status']
    if (!isRepoValid) {
      setErrInRepo(repoStatus['message'])
    }
    
    // checking if communication channel is valid or not
    const isLinkValid =  checkLink(channelLink)
    if(!isLinkValid) {
      setErrInLink('Please add a valid URL so that mentees can join.')
    }

    if(!(isRepoValid && isLinkValid))
     return
    // data to be sent to backend
    const data = {
      'Name': name,
      'Desc': desc,
      'RepoLink': repolink,
      'channelLink': channelLink,
      'Tags': tags
    }

    console.log('data to be sent ',data)
    // make an axios request to BACKEND here
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
        {errInRepo}
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
        {errInLink}
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

