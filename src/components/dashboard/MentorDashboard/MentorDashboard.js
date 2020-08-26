import React, { useEffect } from 'react'
import { BACKEND_URL } from '../../../constants/constants'
import './MentorDashboard.scss'

export default function MentorDashboard() {

    useEffect(() => {
        const URL = `${BACKEND_URL}/dashboard/mentor`
        const data = {
            "username": localStorage.getItem("mentor_username"),
            "jwt": localStorage.getItem("mentor_jwt")
        }
        // using the jwt and username to fetch details for Dashboard
        fetch(URL, {
            method: 'POST',
            data: JSON.stringify(data)
        })
        .then(res => {
            console.log("res.data ", res.data)
        })
        .catch(err => {
            if(err.response.status === 400)
                alert("Invalid Request")
            else 
                alert("Server Error, Please try again")
        })
    }, [])

    return (
        <div>
            {/* Mentor Dashboard here
            Plans to include the following
             -> Useful links - how to write README, others if any?
             -> Important Announcements
             -> Stats of indiv Mentor ???
            */}
            <h1>Mentor Dashboard</h1>
        </div>
    )
}