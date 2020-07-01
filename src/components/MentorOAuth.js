import React, { useEffect } from 'react';

export default function MentorOAuth(){
    
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
        console.log("Send this to backend ", code)
    },[])
    
    return (
        <div>
            <h1>Loading ...</h1>
        </div>
    )
}