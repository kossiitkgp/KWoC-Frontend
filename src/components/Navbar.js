import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.scss';

class Navbar extends Component {
  
  state = {
    burgermenuIsVisible: false,
    scrollClass: 'large',
    is_mentor_loggedin: false,
    is_student_loggedin: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.getWindowHeight);
    this.setState({ 
      is_mentor_loggedin:localStorage.getItem('mentor_jwt') === null || localStorage.getItem('student_jwt') === undefined
    })

    this.setState({
      is_student_loggedin: localStorage.getItem('student_jwt') === null || localStorage.getItem('student_jwt') === undefined
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getWindowHeight);
  }

  handleClick = (e) => {
    if (this.state.burgermenuIsVisible) {
      this.setState({
        burgermenuIsVisible: false,
      });
    } else {
      this.setState({
        burgermenuIsVisible: true,
      });
    }
  };

  closeNavbar = (e) => {
    if (this.state.burgermenuIsVisible) {
      this.setState({
        burgermenuIsVisible: false,
      });
    }
  };

  getWindowHeight = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = '100';
    if (distanceY > shrinkOn) {
      this.setState({
        scrollClass: 'smaller',
      });
    } else if (this.state.scrollClass === 'smaller' && distanceY < shrinkOn) {
      this.setState({
        scrollClass: 'large',
      });
    }
  };

  logoutMentor = () => {
    localStorage.removeItem('mentor_jwt')
    localStorage.removeItem('mentor_username')
    window.location.pathname = ''
  }

  logoutStudent = () => {
    localStorage.removeItem('student_jwt')
    localStorage.removeItem('student_username')
    window.location.pathname = ''
  }

  render() {
    const clickClass = this.state.burgermenuIsVisible ? 'is-active' : '';

    return (
      <div className='navbar'>
        <nav
          className={`navbar is-fixed-top is-transparent ${this.state.scrollClass}`}
          role='navigation'
          aria-label='main navigation'
          id='navbar-container'
        >
          <div className='container'>
            <div className='navbar-brand'>
              <Link className='navbar-item' to='/' id='kwoc-logo'>
                KWoC
              </Link>

              <button
                className={`navbar-burger burger ${clickClass}`}
                aria-label='menu'
                aria-expanded='false'
                data-target='navbarBasicExample'
                onClick={this.handleClick}
              >
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </button>
            </div>

            <div
              id='navbarBasicExample'
              className={`navbar-menu ${clickClass}`}
            >
              <div
                className='navbar-end'
                onClick={this.closeNavbar}
                id='functional-buttons'
              >
                <Link className='navbar-item' to='/about' id='about-button'>
                  About
                </Link>

                <Link
                  className='navbar-item'
                  to='/projects'
                  id='project-button'
                >
                  Projects
                </Link>

                <Link className='navbar-item' to='/FAQ' id='faq-button'>
                  FAQs
                </Link>

                <a className='navbar-item' href='/#tline' id='tline-button'>
                  Timeline
                </a>

                {/* <Link className='navbar-item' >
             <a>Mentee Login</a>
            </Link> */}

                <Link
                  className='navbar-item'
                  to='/testimonial'
                  id='testimonial-button'
                >
                  Testimonials
                </Link>
              </div>
              {/*
              <div className='field' id='darkmode'>
                <div className='buttons has-addons'>
                  <span className='button is-selected'>Light</span>
                  <span className='button'>Dark</span>
                </div>
              </div>
              */}
              <div className='navbar-end' onClick={this.closeNavbar}>
                <div
                  className='navbar-item has-dropdown is-hoverable'
                  id='login-buttons'
                >
                  <a className='navbar-link'>Login</a>
                  <div className='navbar-dropdown'>
                    {
                     this.state.is_mentor_loggedin === true
                      ?
                      <a
                      className='navbar-item'
                      id='mentor-login'
                      href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=mentor'
                    >
                     Mentor Login
                    </a>
                    : 
                    <React.Fragment>
                    <a
                      className='navbar-item'
                      id='mentor-login'
                      href='dashboard/mentor'
                      >
                        Mentor Dashboard
                    </a>
                    <a
                      className='navbar-item'
                      id='mentor-login'
                      onClick={this.logoutMentor}
                      >
                        Logout(Mentor)
                    </a>
                    </React.Fragment>
                  }
                  {
                     this.state.is_student_loggedin === true
                      ?
                      <a
                      className='navbar-item'
                      id='mentee-login'
                      href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=student'
                    >
                     Student Login
                    </a>
                    : 
                    <React.Fragment>
                    <a
                      className='navbar-item'
                      id='mentee-login'
                      href='dashboard/student'
                      >
                        Student Dashboard
                    </a>
                    <a
                      className='navbar-item'
                      id='mentor-login'
                      onClick={this.logoutStudent}
                      >
                        Logout(Student)
                    </a>
                    </React.Fragment>
                  }
                  
                    {/* <a
                      className='navbar-item'
                      id='mentee-login'
                      href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=student'
                    >
                      Student Login
                    </a> */}
                  </div>
                </div>

                <div
                  className='navbar-item has-dropdown is-hoverable'
                  id='stat-buttons'
                >
                  <a className='navbar-link'>Stats</a>
                  <div className='navbar-dropdown'>
                    <Link
                      className='navbar-item'
                      id='mentor-login'
                      to='/stats/students'
                    >
                      Student Stats
                    </Link>

                    <Link
                      className='navbar-item'
                      id='mentor-login'
                      to='/stats/projects'
                    >
                      Project Stats
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
