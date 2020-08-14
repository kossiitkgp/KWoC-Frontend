import React, { useState, useEffect } from 'react'
import './StudentStats.scss'

export default function StudentStats(props) {
    const [username, setUsername] = useState('')
    const [stats, setStats] = useState({})

    useEffect(() => {
        const dummyData = {"soumyajit1729": {
            "avatar_url": "https://avatars0.githubusercontent.com/u/45784348?v=4",
            "name": "Soumyajit Chakraborty ",
            "affiliation": "IIT Kharagpur",
            "projects": ["soumyajit1729/AndyMouse-kWoC"],
            "no_of_commits": 12,
            "pr_open": 0,
            "pr_closed": 0,
            "languages": ["Java", "Python", "XML", "JSON", "HTML"],
            "lines_added": 80051,
            "lines_removed": 43471,
            "commits": [{
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/4a3bffc2778d68cb469aef03858316a0c5e82857",
                "message": "Merge pull request #19 from AkashKarnatak/master\n\nAdded Auth and touchpad activity.",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 8136,
                "lines_removed": 7813
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/01a2bd156422dd022a3b3f9c448333c62e122f36",
                "message": "Update sensor.py",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 1,
                "lines_removed": 1
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/ebdb2b72d8afeffc36991bad295b3f9a5e283cc6",
                "message": "Merge pull request #18 from AkashKarnatak/master\n\nNow the app supports landscape mode as well.",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 7774,
                "lines_removed": 6180
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/1148a3657a4164bc5c536af2eea4708aeb4d627f",
                "message": "Merge pull request #17 from amit6663/master\n\nupdated user interface",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 86,
                "lines_removed": 85
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/d5291fc20f24b74cb7d137b67b40072a49702c92",
                "message": "Merge pull request #16 from amit6663/master\n\nimproved app's user interface",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 5148,
                "lines_removed": 4116
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/09c9dca7b71d53e5b77fcfad2db92008dd387784",
                "message": "Merge pull request #14 from AkashKarnatak/master\n\nNow the app works for all android versions.",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 176,
                "lines_removed": 3209
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/d3e350ebbcc7ce09282c0aab490e3b9159fef4e6",
                "message": "Merge pull request #12 from AkashKarnatak/master\n\nChanged the interface.",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 5602,
                "lines_removed": 17374
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/5a26680a588d60a282b0f9f54ef82d4e9132d6da",
                "message": "Merge pull request #11 from AkashKarnatak/master\n\nMade the mouse movements smooth.",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 41898,
                "lines_removed": 43
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/172584788b6a89d4a2110386a0f7471bf4229b1e",
                "message": "Merge pull request #10 from Aparna-Sakshi/patch-1\n\nAdded pyautogui.FAILSAFE = False in except block",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 1,
                "lines_removed": 1
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/43540440d37048dc0fa231d5eda0114f12d6c79a",
                "message": "Merge pull request #8 from AkashKarnatak/master\n\nRemove swap file",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 0,
                "lines_removed": 0
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/3badb8043539a16ea09423a9f598dce1b11ff1ab",
                "message": "Merge pull request #7 from AkashKarnatak/master\n\nFixed \"Not Connected\" bug and crashes caused by pressing \"Next\" or \"Back\" button immediately after launching the app",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 56,
                "lines_removed": 810
            }, {
                "html_url": "https://github.com/soumyajit1729/AndyMouse-kWoC/commit/d7faac7a65d667f960427cb59b870cecfc510282",
                "message": "Merge pull request #6 from AkashKarnatak/master\n\nFixed app from crashing when the 'Stop' button is pressed immediately",
                "project": "soumyajit1729/AndyMouse-kWoC",
                "lines_added": 11173,
                "lines_removed": 3839
            }]
        }}
        const username_from_window = window.location.pathname.split('/')[3]
        setUsername(username)
        setStats(dummyData[username_from_window])
        },[])
    
    return (
        <div>
            <img src={stats['avatar_url']} />
            <h1>{stats['name']}</h1>
            <h3>{stats['affiliation']}</h3>
            <h3>Commits : {stats["no_of_commits"]}</h3>
            <h3>PRs Open,Closed : {stats["pr_open"]},{stats["pr_closed"]}</h3>
            <h3>Total Lines Added, Removed: +{stats["lines_added"]},-{stats["lines_removed"]}</h3>
            <h4>Languages involved</h4>
            {stats["languages"] !== undefined ? stats["languages"].map(item => <ul><li>{item}</li></ul>) : ''}
            <h4>Projects Worked</h4>
            
            {stats["projects"] !== undefined ? stats["projects"].map(item => 
                    {
                    return (
                        <ul>
                            <li><a href={`https://github.com/${item}`}>{item}</a></li>
                        </ul>
                        )
                    }
                ) 
                : ''}
           <h3>Contributions Table</h3>
           <table border="1">
               <th>Project</th>
               <th>Commit</th>
               <th>+Lines Added,-Lines Removed</th>

               {stats["commits"] != undefined ? 
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
            </table>
            
        </div>
    )
}