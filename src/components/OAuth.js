import React, { useEffect } from 'react';
import axios from 'axios';

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
       
        axios
            .post(URL, data)
            .then(res => {
                let email = res.data.email === null ? '' : res.data.email
                const userData = {
                    "username": res.data.username,
                    "name": res.data.name,
                    "email": email,
                    "type": res.data.type
                }

                props.history.push({
                    pathname: '/form/user',
                    state: userData
                })
            })
            .catch(err => {
                console.log("err is ",err)
            })
    },[])
    
    return (
        <div>
            <h1>Loading ...</h1>
        </div>
    )
}