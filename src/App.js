import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonials';
import UserForm from './components/UserForm'
import ProjectForm from './components/ProjectForm'
import OAuth from './components/OAuth';
import StudentDashboard from './components/dashboard/StudentDashboard';
import MentorDashboard from './components/dashboard/MentorDashboard/MentorDashboard';
import Projects from './components/projects/Projects'

import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/FAQ' component={FAQ} />

        <Route exact path='/testimonial' component={Testimonial} />

        <Route exact path='/form/user' component={UserForm} />
        
        <Route exact path='/form/project' component={ProjectForm} />

        <Route exact path='/dashboard/student' component={StudentDashboard} />

        <Route exact path='/dashboard/mentor' component={MentorDashboard} />

        <Route  path='/oauth' component={OAuth} />

        <Route  path='/projects' component={Projects} />

      </div>
    </BrowserRouter>
  );
}

export default App;
