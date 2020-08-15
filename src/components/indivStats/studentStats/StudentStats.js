import React, { useState, useEffect } from 'react'
import Tag from './Tag'
import axios from 'axios'

import { STATS_API } from '../../../constants/constants'
import './StudentStats.scss'

export default function StudentStats(props) {
    const [stats, setStats] = useState({})

    useEffect(() => {
        const username_from_window = window.location.pathname.split('/')[3]
       
        axios
            .get(`${STATS_API}/stats/student/${username_from_window}`)
            .then(res => {
                setStats(res.data[username_from_window])
            })
            .catch(err => {
                console.log("Err ", err)
                alert("Server error, Try again")
            })
        },[])
    
    return (
        <div className="student-stats">
            <img  className="student-avatar" src={stats['avatar_url']} />
            <h1>{stats['name']}</h1>
            <h3>{stats['affiliation']}</h3>
            <h3>Commits : {stats["no_of_commits"]}</h3>
            <h3>PRs Open,Closed : {stats["pr_open"]},{stats["pr_closed"]}</h3>
            <h3>Total Lines Added, Removed: +{stats["lines_added"]},-{stats["lines_removed"]}</h3>
            <h4>Languages involved</h4>
            {stats["languages"] !== undefined ? stats["languages"].map(item => <Tag content={item}/>) : ''}
            <h4>Projects Worked</h4>
            
            {stats["projects"] !== undefined ? stats["projects"].map(item => 
                    {
                    return (
                        <span className="tag is-light is-large"><a href={`https://github.com/${item}`}>{item}</a></span>
                        )
                    }
                ) 
                : ''}
           <h3>Contributions Table</h3>
           <table  className="table is-bordered is-striped">
               <th>Project</th>
               <th>Commit</th>
               <th>+Lines Added,-Lines Removed</th>
                <tbody>
               {stats["commits"] !== undefined ? 
               stats["commits"].map(item => {
                   return (
                        <tr>
                            <td><a href={`https://github.com/${item["project"]}`}>{item["project"]}</a></td>
                            <td><a href={item["html_url"]}>{item["message"]}</a></td>
                            <td>+{item["lines_added"]},-{item["lines_removed"]}</td>
                        </tr>
                       )
               })
               
               : ''}
               </tbody>
            </table>
            
        </div>
    )
}