import React, { useState, useEffect } from 'react'
import { STATS_API } from '../../constants/constants'
import StudentAnnouncements from './StudentAnnouncements'

import { MidsFail, MidsCleared, EndEvalsFormSubmitted } from '../evals/evalsStatus'
import EndEvalsForm from '../evals/EndEvalsForm'

export default function StudentDashboard() {
  
  const [isMidsCleared, setIsMidsCleared] = useState(0)
  const [isEndsCleared, setIsEndsCleared] = useState(0)

  useEffect(() => {
    const username = localStorage.getItem('student_username')
    fetch
    (`${STATS_API}/student/${username}`)
    .then(res => res.json())
    .then(res => {
      setIsMidsCleared(res.isMidsCleared)
      setIsEndsCleared(res.isEndsCleared)
    })
    .catch(err => {
      console.log('err is ',err)
      alert('Server Error Try again')
    })

  }, [])
  
  let status = ``
  if(isMidsCleared == 0) {
    status = <MidsFail />
  } else {
    if(isEndsCleared == 0)
      status = <MidsCleared />
    else 
      status = <EndEvalsFormSubmitted />
  }

  return(
    <div>
      {/* 
      Plans to include the following in student Dashboard
      -> Useful links - kwoc blog by apoorv, how to write good commit messages, git links
      -> Important Announcements :- midevals are coming, u have cleared/failed mid evals, u have submitted endevals form
      -> Stats of student ???
      */}
      {/* The below component to be showed only after midevals, before that comment it out */}
      {status}
      {/* The below is the endevals form show this only if midsCleared and endsForm not yet Filled, this to be shown while endevals, till then comment it out */}
      { isMidsCleared == 1 && isEndsCleared == 0 ? <EndEvalsForm /> : ''}
      <StudentAnnouncements />
    </div>
  )
}