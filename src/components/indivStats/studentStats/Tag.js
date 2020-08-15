import React from 'react'

export default function Tag(props) {

    const TAG_TYPES = ['primary', 'link', 'info', 'success', 'warning', 'danger']
    const LEN = TAG_TYPES.length
    
    return(
        <span 
        style = {{ margin: '5px' }}
        className={`tag is-${TAG_TYPES[Math.floor(Math.random()*LEN)]} is-medium`}>
        {props.content}
        </span>
    )
}