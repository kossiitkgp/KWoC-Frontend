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



export default function Form(props) {

  const [isSubmitDisabled, disableSubmit] = useState(false)

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [repolink, setRepolink] = useState('')
  const [channelLink, setChannelLink] = useState('')
  const [tags, setTags] = useState([])
  const [autoTags, setAutoTags] = useState([])
  const [mentorRepos, setMentorRepos] = useState([])
  const [showTags, setShowTags] = useState(false)

  const [errInRepo, setErrInRepo] = useState('')
  const [errInLink, setErrInLink] = useState('')


  useEffect(() => {

    if(localStorage.getItem('mentor_jwt') === null || localStorage.getItem('mentor_jwt') === undefined)
      props.history.push('/')



    // fetch all the projects of mentor
    // const username = localStorage.getItem('mentor_username')
    const username = 'xypnox' // this line only for testing, uncomment above line & comment this line in production, and com
    axios
    .get(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(res => {
      const repos = res.data.map(item => {
        return { 'name': item.full_name, 'value': item.html_url, 'label': item.full_name.split('/')[1] }
      })
      setMentorRepos(repos)
    })
    .catch(err => {

    })
  }, [])

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
  
    // check for minimum number of issues, along with valid URL or not
    const issuesURL = `https://api.github.com/repos/${ownerName}/${repoName}/issues?q=state:open`
    try {
      const res = await axios.get(issuesURL)
      const issues = res.data.filter(item => !item.hasOwnProperty('pull_request'))
      const numOfIssues = issues.length
      if(numOfIssues < 2)
        returnMsg['message'] = `Repo has only ${numOfIssues} issues, Please maintain atleast 2 issues. `
    }
    catch(err) {
      returnMsg['message'] = `The link should be in format of https://github.com/USERNAME/REPO. Please add a valid Github link repo with atleast 2 open issues. `
    }
  
    // check for a minimum README
    const readmeURL = `https://api.github.com/repos/${ownerName}/${repoName}/readme`
    try {
      const res = await axios.get(readmeURL)
      if(res.data.size < 100)
      returnMsg['message'] += `Please add a more descriptive modified README. It is too short`
    }
    catch(err) {
      returnMsg['message'] += `Please add a descriptive README.md`
    }
  
   
    if (returnMsg['message'] === '') {
      autofillTags(`${ownerName}/${repoName}`)
      return returnMsg
    }
      
  
      returnMsg['status'] = false
      return returnMsg
  }

  async function autofillTags(repo) {
    const endpoint_for_languages = `https://api.github.com/repos/${repo}/languages` // working
    const endpoint_for_topics = `https://api.github.com/repos/${repo}/topics` // testing
    const headers = {
      "Accept": " application/vnd.github.mercy-preview+json", 
      // these headers are required until /topics endpoint of Gituhb API is in preview mode
      // can be removed later, once Github makes it available openly
    }
    
    const req1 =  axios.get(endpoint_for_topics,{ headers: headers })
    const req2 = axios.get(endpoint_for_languages)
  
  await axios
    .all([req1, req2])
    .then(axios.spread((...res) => {
      const res1 = res[0]
      const res2 = res[1]
    
      let tags = new Set()
      res1.data["names"].forEach(tag => {
        tags.add(tag.toLowerCase())
      })
  
      Object.keys(res2.data).forEach(tag => {
        tags.add(tag.toLowerCase())
      })
  
      const autotags_arr = [...tags]
      const autotags_for_select =  autotags_arr.map(tag => { return {'value': tag, 'label': tag} })
      setAutoTags(autotags_for_select)
      setShowTags(true)
    }))
    .catch(err => {
      console.log('error ',err)
    })
  }

  function handleChange(tags, action) {
    const selectedTags = tags.map(item => item.value)
    setTags(selectedTags)
  }

  function handleProjectLink(tag, action) {
    if(tag != null) {
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


    const URL = `${BACKEND_URL}/project/add`;
    const data = {
      'username': localStorage.getItem('mentor_username'),
      // 'username': 'rakaar',
      'name': name,
      'desc': desc,
      'repoLink': repolink,
      'comChannel': channelLink,
      'tags': JSON.stringify(tags)
    }

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

      {showTags && <div className='field'>
        <label className='label'>Tags for the project</label>
        <div className='control'>
           <CreatableSelect
              isMulti
              isClearable
              onChange={handleChange}
              options={options}
              defaultValue={autoTags}
              placeholder='Select or Create Tags'
            />
        </div>
      </div>}
      
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
