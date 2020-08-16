import React, { useState, useEffect } from 'react'
import './MentorStats.scss'

function Commits(props) {
    return(
        <ul>
            {props.commits.map(item => {
                return(
                <li><a>{item['a']}</a></li>
                )
            })}
        </ul>
    )
}

function Contris(props) {
    return(
        <React.Fragment>
            {Object.entries(props.contris).map(item => {
                return(
                    <React.Fragment>
                         <h5>{item[0]}</h5>
                         <Commits commits={item[1]} />
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
}

export default function MentorStats() {
    const [username, setUsername] = useState('')
    const [mentorName, setMentorName] = useState('')
    const [stats, setStats] = useState({})
    
    useEffect(() => {
        const username_from_window = window.location.pathname.split('/')[3]
        setUsername(username_from_window)
        const dummy_data = {
            'rakaar': {
                'mentor_name' : 'kaushik r',
                'proj1': {
                    'title': 'aa',
                    'contri1': [{'a':1}, {'a':2}],
                    'contri2': [{'a': 3}, {'a': 4}]
                },
                'proj2': {
                    'title': 'bbbaa',
                    'contri3': [{'a':1}, {'a':2}],
                    'contri4': [{'a': 3}, {'a': 4}]
                }
            }
        }
       
        setMentorName(dummy_data[username_from_window]['mentor_name'])
        setStats(dummy_data[username_from_window])
        
        // making an object of only projects and contributors
        const projectWiseStats = dummy_data[username_from_window]
        delete projectWiseStats['mentor_name']
        setStats(projectWiseStats)

        // axios
        //     .get(`${STATS_API}/stats/student/${username_from_window}`)
        //     .then(res => {
        //         setStats(res.data[username_from_window])
        //     })
        //     .catch(err => {
        //         console.log("Err ", err)
        //         alert("Server error, Try again")
        //     })
        },[])

    return(
        <div className="mentor-stats">
            <img  className="mentor-avatar" src={`https://github.com/${username}.png`} />
            <h1>{mentorName}</h1>

            {Object.entries(stats).map(item => {
                const contris = {...item[1]}
                delete contris['title']
                console.log("stats ", item)
                return(
                    <React.Fragment>
                        <h4><a href={`https://github.com/username/${item[0]}`}>{item[1]['title']}</a></h4>
                        <Contris contris={contris} />
                    </React.Fragment>
                    )
            })}
        </div>
    )
}