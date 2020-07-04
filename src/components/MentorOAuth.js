import React, { useEffect } from 'react';
import axios from 'axios';

export default function MentorOAuth(){
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
        console.log("Send this to backend ", code)
        const URL = "http://localhost:5000/mentor/oauth"
        const data = {
            "code": code,
            "state": "PAKKA RANDOM"
        }
        axios
            .post(URL, data)
            .then(res => {
                console.log("res.data",res.data)
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