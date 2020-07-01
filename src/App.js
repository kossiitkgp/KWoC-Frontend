import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonials';
import MentorForm from './components/MentorForm'
import ProjectForm from './components/ProjectForm'
import MentorOAuth from './components/MentorOAuth';

import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />

        <Route exact path='/FAQ' component={FAQ} />

        <Route exact path='/testimonial' component={Testimonial} />

        <Route exact path='/form/mentor' component={MentorForm} />
        
        <Route exact path='/form/project' component={ProjectForm} />

        <Route exact path='/oauth/mentor' component={MentorOAuth} />

      </div>
    </BrowserRouter>
  );
}

export default App;
