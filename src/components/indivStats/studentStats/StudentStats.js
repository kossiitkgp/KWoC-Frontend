import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import axios from 'axios';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { STATS_API } from '../../../constants/constants';
import './StudentStats.scss';

export default function StudentStats(props) {
  const [stats, setStats] = useState({});
  const username_from_window = window.location.pathname.split('/')[3];
  useEffect(() => {
    axios
      .get(`${STATS_API}/stats/student/${username_from_window}`)
      .then((res) => {
        setStats(res.data[username_from_window]);
      })
      .catch((err) => {
        alert('Server error, Try again');
      });
  }, []);

  return (
    <div className='student-stats'>
      <Navbar className='is-black' />
      <div className='profile-container'>
        <div className='profile-card'>
          <img className='avatar-img' src={stats['avatar_url']} alt="GitHub Avatar"></img>
          <br />
          <b id='student-name'>{stats['name']}</b>
          <p>{username_from_window}</p>
          <p>{stats['affiliation']}</p>
        </div>
        <div className='stats-card-list'>
          <div className='stats-row-1'>
            <div className='stats-card'>
              <p>{stats['no_of_commits']}</p>
              <p className='stats-header'>Commits</p>
            </div>
            <div className='stats-card'>
              <p>{stats['pr_open']}</p>
              <p className='stats-header'>PR Open</p>
            </div>
            <div className='stats-card'>
              <p>{stats['pr_closed']}</p>
              <p className='stats-header'>PR Closed</p>
            </div>
          </div>
          <div className='stats-row-2'>
            <div className='stats-card'>
              <p>{stats['lines_added']}</p>
              <p className='stats-header'>+ Added</p>
            </div>
            <div className='stats-card'>
              <p>{stats['lines_removed']}</p>
              <p className='stats-header'>- Removed</p>
            </div>
          </div>
        </div>
      </div>
      <div className='language-card'>
        <p>Languages involved</p>
        <div className='language-tag'>
          {stats['languages'] !== undefined
            ? stats['languages'].map((item) => <Tag content={item} />)
            : ''}
        </div>
      </div>
      <div className='project-card'>
        <p>Projects Worked</p>
        <table className='table is-bordered is-striped'>
          <tbody>
            {stats['projects'] !== undefined
              ? stats['projects'].map((item) => {
                  return (
                    <tr>
                      <td>
                        <a href={`https://github.com/${item}`}>{item}</a>
                      </td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </table>
      </div>
      <section className='contri-card'>
        <div className='contri-header'>
          <p>Commit History</p>
        </div>

        <table className='table is-bordered is-striped'>
          <th>Project</th>
          <th>Commit</th>
          <th>+Add/-Rem</th>
          <tbody>
            {stats['commits'] !== undefined
              ? stats['commits'].map((item) => {
                  const mentorName = item['project'].split('/')[0];
                  return (
                    <tr>
                      <td>
                        <a href={`https://github.com/${item['project']}`}>
                          <img
                            src={`https://github.com/${mentorName}.png`}
                            className='mentor-avatar'
                            alt='project'
                          ></img>
                        </a>
                      </td>
                      <td>
                        <a href={item['html_url']}>{item['message']}</a>
                      </td>
                      <td>
                        +{item['lines_added']}/-{item['lines_removed']}
                      </td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}
