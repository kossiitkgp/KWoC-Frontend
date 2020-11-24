import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import axios from 'axios';
import Navbar from '../../Navbar';
import { STATS_API } from '../../../constants/constants';
import './StudentStats.scss';

export default function StudentStats(props) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const username_from_window = window.location.pathname.split('/')[3];

    axios
      .get(`${STATS_API}/stats/student/${username_from_window}`)
      .then((res) => {
        setStats(res.data[username_from_window]);
      })
      .catch((err) => {
        console.log('Err ', err);
        alert('Server error, Try again');
      });
  }, []);

  return (
    <div className='student-stats'>
      <Navbar className='is-black' />
      <div className='profile-container'>
        <div className='profile-card'>
          <img className='avatar-img' src={stats['avatar_url']}></img>
          <br />
          <div className='avatar-content-card'>
            <p id='student-name'>{stats['name']}</p>
            <p>github</p>
            <p>{stats['affiliation']}</p>
          </div>
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
              <p className='stats-header'>Lines Added</p>
            </div>
            <div className='stats-card'>
              <p>{stats['lines_removed']}</p>
              <p className='stats-header'> Lines Removed</p>
            </div>
          </div>
        </div>
      </div>
      <div className='language-card'>
        <p>Languages involved</p>
        {stats['languages'] !== undefined
          ? stats['languages'].map((item) => <Tag content={item} />)
          : ''}
      </div>
      <div className='project-card'>
        <p>Projects Worked</p>

        {stats['projects'] !== undefined
          ? stats['projects'].map((item) => {
              return (
                <span className='tag is-light is-large'>
                  <a href={`https://github.com/${item}`}>{item}</a>
                </span>
              );
            })
          : ''}
      </div>
      <div className='contri-card'>
        <table className='table is-bordered is-striped'>
          <th>Project</th>
          <th>Commit</th>
          <th>+Lines Added,-Lines Removed</th>
          <tbody>
            {stats['commits'] !== undefined
              ? stats['commits'].map((item) => {
                  return (
                    <tr>
                      <td>
                        <a href={`https://github.com/${item['project']}`}>
                          {item['project']}
                        </a>
                      </td>
                      d
                      <td>
                        <a href={item['html_url']}>{item['message']}</a>
                      </td>
                      <td>
                        +{item['lines_added']},-{item['lines_removed']}
                      </td>
                    </tr>
                  );
                })
              : ''}
          </tbody>
        </table>
      </div>
    </div>
  );
}
