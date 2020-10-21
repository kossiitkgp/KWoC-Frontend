import React, { useEffect } from 'react';
import { BACKEND_URL } from '../../../constants/constants';
import './MentorDashboard.scss';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

export default function MentorDashboard() {
  useEffect(() => {
    const URL = `${BACKEND_URL}/dashboard/mentor`;
    const data = {
      username: localStorage.getItem('mentor_username'),
      jwt: localStorage.getItem('mentor_jwt'),
    };
    // using the jwt and username to fetch details for Dashboard
    // fetch(URL, {
    //     method: 'POST',
    //     data: JSON.stringify(data)
    // })
    // .then(res => {
    //     console.log("res.data ", res.data)
    // })
    // .catch(err => {
    //     if(err.response.status === 400)
    //         alert("Invalid Request")
    //     else
    //         alert("Server Error, Please try again")
    // })
  }, []);
  let data = {
    name: 'Aditya Vikram Singh',
    github: 'xypnox',
    college: 'IIT Kharagpur',
    commits: {
      count: 235,
      commits: [
        {
          hash: '234rrt',
          project: 'xypnox/xyplot',
          messsage: 'Compress residual images for faster loading speed',
        },
        {
          hash: 'aw3548',
          project: 'kossiitkgp/darkHorse',
          messsage: 'Fix: Typo and spacing',
        },
        {
          hash: 'hhstb32',
          project: 'xypnox/todxpy',
          messsage: 'Introduce new sorting for todos',
        },
        {
          hash: 'y67eb6',
          project: 'kossiitkgp/KWoC',
          messsage: 'Replace navbar with footer for fun',
        },
      ],
    },
    // this is the total sum of PRs for all the projects that he has been mentoring.
    pullRequests: {
      count: 12,
      open: 5,
      closed: 6,
    },
    linesOfCode: {
      count: '126k',
    },
    languages: ['Python', 'Javascript', 'HTML', 'CSS'],
    projects: ['darkHorse', 'todxpy', 'KWoC'],
    resources: [
      'https://www.makeareadme.com/',
      'https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991',
    ],
    student: ['yashrsharma44', 'rakaar', 'orkohunter'],
    announcement: [
      'Hi the KWOC has just started!',
      'Make sure you have submitted the mideval feedback for the student!',
      'Hi \n, the end evals have been finished!',
    ],
    evals: 'Mid Eval',
  };

  let resourceList = [];
  for (const [index, elements] in data.resources.entries()) {
    resourceList.push(<li key={index}>{elements}</li>);
  }

  return (
    <div className='mentor-dashboard'>
      <link
        href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
        rel='stylesheet'
      ></link>
      {/*

         Mentor Dashboard here
            Plans to include the following
             -> Useful links - how to write README, others if any?
             -> Important Announcements
             -> Stats of indiv Mentor ???
      */}
      <Navbar className='is-black' />
      <div className='intro-card'>
        <div className='avatar card-component'>
          <img
            src={`https://github.com/${data.github}.png`}
            id='avatar-img'
          ></img>
          <br />
          <div className='avatar-content'>
            <p id='mentor-name'>{data.name}</p>
            <p>{data.github}</p>
            <p>{data.college}</p>
          </div>
        </div>

        <div className='mentor-stats card-component'>
          <div className='mentor-stats-header'>
            <h1>Mentor Dashboard</h1>
          </div>
          <div className='mentor-stats-content'>
            <div className='card-component mstats'>
              <p>Projects</p>
              <p>{data.projects.length}</p>
            </div>
            <div className='card-component mstats'>
              <p>Students</p>
              <p>{data.student.length}</p>
            </div>
            <div className='card-component mstats'>
              <p>Days to {data.evals}</p>
              <p>12</p>
            </div>
          </div>
          <div className='card-component badges'>
            <h1>Badges</h1>
          </div>
        </div>
      </div>

      <div className='projects card-component'>
        <div className='project-header'>
          <h1>Projects</h1>
        </div>
        <div className='project-card'>
          {data.projects.map((value, index) => {
            return (
              <div className='project-c card-component'>
                <a
                  id='project-name'
                  href={`https://github.com/${data.github}/${value}`}
                >
                  {value}
                </a>
                <p> Open PRs : 2</p>
                <p> Closed PRs : 1</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='students card-component'>
        <div className='student-header'>
          <h1>Students</h1>
        </div>
        <div className='student-card'>
          {data.student.map((value, index) => {
            return (
              <div className='student-c card-component'>
                <a id='student-name' href={`https://github.com/${value}`}>
                  {value}
                </a>
                <br />
                <button href='#'>Fill {data.evals}</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className='mentor-info-board card-component'>
        <h1>Announcements</h1>

        {data.announcement.map((value, index) => {
          return (
            <div>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
      {/*
         <Footer />
      */}
    </div>
  );
}
