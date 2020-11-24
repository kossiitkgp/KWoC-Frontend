import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BACKEND_URL } from '../../constants/constants';
import './StudentDashboard.scss';

export default function Dashboard() {
  useEffect(() => {
    const URL = `${BACKEND_URL}/dashboard/student`;
    const data = {
      username: localStorage.getItem('student_username'),
      jwt: localStorage.getItem('student_jwt'),
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

  // dummy data for test purpose
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
  };
  return (
    <div className='dashboard'>
      <Navbar className='is-black' />

      <div className='intro container'>
        <div className='data-panel'>
          <h1 className='title'>Dashboard</h1>
          <h2>{data.name}</h2>

          <div className='data-cards'>
            <div className='data-card'>
              <h1>{data.commits.count}</h1>
              <h2>Commits</h2>
            </div>
            <div className='data-card'>
              <h1>{data.pullRequests.count}</h1>
              <h2>Pull Requests</h2>
            </div>
            <div className='data-card'>
              <h1>{data.linesOfCode.count}</h1>
              <h2>Lines of Code</h2>
            </div>
          </div>
        </div>

        <div className='profile-panel'>
          <img src='https://avatars2.githubusercontent.com/u/25076171' alt='' />
          <br />
          <b>{data.name}</b>
          <p>{data.github}</p>
          <p>{data.college}</p>
        </div>
      </div>

      {/* <section className='container share-links'>
        <h1>Share your progress</h1>
        <div className='links'>
          <a href='#a'>Facebook</a>
          <a href='#a'>Twitter</a>
          <a href='#a'>LinkedIn</a>
        </div>
      </section> */}

      <div className='container projects'>
        <h1>Projects</h1>
        <div className='project-card-list'>
          {data.projects.map((projectName) => {
            return (
              <div className='project-card'>
                <p>{projectName}</p>
                <div className='project-buttons'>
                  <a
                    href='http://stackoverflow.com'
                    className='project-button-small'
                  >
                    <img src='/github.svg' className='github-svg'></img>
                  </a>
                  <a
                    href='https://www.google.com'
                    className='project-button-small'
                  >
                    Issues
                  </a>
                  <a href='https://www.fb.com' className='project-button-small'>
                    PRs
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className='container commits'>
        <h1>Latest Commits</h1>
        <table>
          <thead>
            <th>Hash</th>
            <th>Project</th>
            <th>Commit Messsage</th>
          </thead>
          {data.commits.commits.map((commit) => {
            return (
              <tr>
                <td>
                  <a href='https://www.google.com'>
                    <div>{commit.hash}</div>
                  </a>
                </td>
                <td>{commit.project}</td>
                <td>{commit.messsage}</td>
              </tr>
            );
          })}
        </table>
      </section>

      <Footer />
    </div>
  );
}
