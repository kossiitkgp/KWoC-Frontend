import React from 'react'

export default function Tag(props) {

    const TAG_TYPES = ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger',
                        'is-black', 'is-dark', 'is-light','is-primary is-light', 'is-link is-light',
                        'is-info is-light', 'is-success is-light', 'is-warning is-light','is-danger is-light'
                    ]
    const LEN = TAG_TYPES.length
    
    return(
        <span 
        style = {{ margin: '5px' }}
        className={`tag ${TAG_TYPES[Math.floor(Math.random()*LEN)]} is-medium`}>
        {props.content}
        </span>
    )
}