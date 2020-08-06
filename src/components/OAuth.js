import React, { useEffect } from 'react';

export default function MentorOAuth(props){
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
        const state = params.get('state')
        console.log("Send this to backend ", code)
        const URL = "http://localhost:5000/oauth"
        const data = {
            "code": code,
            "state": state
        }

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            // if a new user, send him to the form
            if(res.isNewUser) {
                const userData = {
                    "username": res.username,
                    "name": res.name,
                    "email": res.email,
                    "type": res.type
                }

                props.history.push({
                    pathname: '/form/user',
                    state: userData
                })
            }
            // if an already existing user then save the token and redirect to dashboard
            else {
                if(res.type === "mentor") {
                    localStorage.setItem('mentor_jwt', res.jwt)
                    localStorage.setItem('mentor_username', res.username)
                    props.history.push('/dashboard/mentor')
                } else {
                    localStorage.setItem('student_jwt', res.jwt)
                    localStorage.setItem('student_username', res.username)
                    props.history.push('/dashboard/student')
                }
            }
        })
        .catch(err => {
            console.log("err fetch ", err)
            alert('Server Error! Please try again')
        })
    },[])
    
    return (
        <div>
            <h1>Loading ...</h1>
        </div>
    )
}