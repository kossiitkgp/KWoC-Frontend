import React, { useState, useEffect }from 'react';
import Tags from '../data/tags.js';
import CreatableSelect from 'react-select/creatable';
import axios from 'axios'
import { BACKEND_URL } from '../constants/constants'
import Navbar from './Navbar'
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
    if(numOfIssues < 2)
      returnMsg['message'] = `Repo has only ${numOfIssues} issues, Please maintain atleast 2 issues. `
  } 
  catch(err) {
    returnMsg['message'] = `The link should be in format of https://github.com/USERNAME/REPO. Please add a valid Github link repo with atleast 4 open issues. `
  }

  // check for a minimum README
  const readmeURL = `https://api.github.com/repos/${ownerName}/${repoName}/readme`
  try {
    const res = await axios.get(readmeURL, headers)
    console.log('size is ',res.data.size)
    if(res.data.size < 100)
    returnMsg['message'] += `Please add a more descriptive modified README. It is too short`  
  }
  catch(err) {
    returnMsg['message'] += `Please add a descriptive README.md`
  }

  if (returnMsg['message'] === '')
    return returnMsg
    
    returnMsg['status'] = false
    return returnMsg
}


export default function Form(props) {

  const [isSubmitDisabled, disableSubmit] = useState(false)
  
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [repolink, setRepolink] = useState('')
  const [channelLink, setChannelLink] = useState('')
  const [tags, setTags] = useState([])
  const [mentorRepos, setMentorRepos] = useState([])

  const [errInRepo, setErrInRepo] = useState('')
  const [errInLink, setErrInLink] = useState('')

  useEffect(() => {

    if(localStorage.getItem('mentor_jwt') === null || localStorage.getItem('mentor_jwt') === undefined)
      props.history.push('/')



    // fetch all the projects of mentor
    const headers = {
      "username": "adc3de3ce14dcf52af0afc0a40e6c3fee5d086e6",
    }
    const username = localStorage.getItem('mentor_username')
    // const username = 'rakaar' // uncomment rakaar when testing finally
    axios
    .get(`https://api.github.com/users/${username}/repos`, headers)
    .then(res => {
      const repos = res.data.map(item => { 
        return { 'name': item.full_name, 'value': item.html_url, 'label': item.full_name.split('/')[1] }
      })
      setMentorRepos(repos)
      console.log('repos are ',repos)
    })
    .catch(err => {
      console.log('err in fetching all repos is ', err)
    })
  }, [])
  
  function handleChange(tags, action) {
    const selectedTags = tags.map(item => item.value)
    setTags(selectedTags)
  }

  function handleProjectLink(tag, action) {
    if(tag != null) {
      console.log('link of hte project is ',tag.value);
      setRepolink(tag.value)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    disableSubmit(true)

    // checking if repo meets requirements or not
    const repoStatus = await checkRepo(repolink)
    const isRepoValid = repoStatus['status']
    if (!isRepoValid) {
      setErrInRepo(repoStatus['message'])
      disableSubmit(false)
    }
    
    // checking if communication channel is valid or not
    const isLinkValid =  checkLink(channelLink)
    if(!isLinkValid) {
      setErrInLink('Please add a valid URL as an invite link for your communication channel')
      disableSubmit(false)
    }

    if(!(isRepoValid && isLinkValid)) {
      disableSubmit(false)  
      return
    }
     
    
    
    const URL = "https://kwoc.metamehta.me/project/add"
     const data = {
      'username': localStorage.getItem('mentor_username'),
      // 'username': 'rakaar', 
      'name': name,
      'desc': desc,
      'repoLink': repolink,
      'comChannel': channelLink,
      'tags': JSON.stringify(tags)
    }

    console.log('data to be sent ',JSON.stringify(data))
    console.log('mentor jwt is ',localStorage.getItem('mentor_jwt'))
    // make an axios request to BACKEND here
    fetch(URL, 
      {
      method: 'POST',
      headers: {
        Bearer: localStorage.getItem('mentor_jwt')
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === 200)
        alert("Project Submitted Successfully")
      // if the below fails, try using window.location.pathname = "/dashboard/mentor"
      props.history.push("/dashboard/mentor")
    })
    .catch(err => {
      console.log("Err is ", err)
      alert('Server Error Try again')
      disableSubmit(false)
    })
    
  }

  
  return (
    <React.Fragment>
      <Navbar />
    <div className='box'>
      <div className='field'>
        <label className='label'>Project Name</label>
        <div className='control'>
          <input
            className='input is-rounded'
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
          placeholder="Briefly about your Project"
          onChange={e => setDesc(e.target.value)}
          />
          
        </div>
      </div>

      {/* <div className='field'>
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
      </div> */}

      <div className='field'>
        <label className='label'>Github Link to the Project</label>
        <div className='control'>
           <CreatableSelect
              isClearable
              onChange={handleProjectLink}
              options={mentorRepos}
              placeholder='Search your Repos or Paste the link'
            />
          {/* <span className='icon is-large is-left' id='fontello-icon'>
            <i className='icon-github-circled' />
          </span> */}
        </div>
        {errInRepo}
      </div>

      <div className='field'>
        <label className='label'>Communication channel</label>
        <div className='control'>
          <input
            className='input is-rounded'
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
              placeholder='Select or Create Tags'
            />
        </div>
      </div>
      
      <div>
        <a 
        className='button is-rounded is-fullWidth column is-full'
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        >
        Submit
        </a>
      </div>
    </div>
    </React.Fragment>
  );
}

