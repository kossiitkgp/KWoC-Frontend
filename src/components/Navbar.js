import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.scss';

class Navbar extends Component {
  state = {
    burgermenuIsVisible: false,
    scrollClass: 'large',
  };

  componentDidMount() {
    window.addEventListener('scroll', this.getWindowHeight);
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
                <Link className='navbar-item' to='/' id='home-button'>
                  Home
                </Link>

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

                <Link
                  className='navbar-item'
                  to='/about'
                  id='leaderboard-button'
                >
                  Leaderboard
                </Link>

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
              <div
                className='navbar-end'
                onClick={this.closeNavbar}
                id='login-buttons'
              >
                <a
                  className='button is-outlined is-inverted is-warning'
                  id='mentor-login'
                  href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=mentor'
                >
                  Mentor Login
                </a>
                <a
                  className='button is-outlined is-inverted is-warning'
                  id='mentee-login'
                  href='https://github.com/login/oauth/authorize?scope=user:email&client_id=74557dcb91016b10b54b&state=student'
                >
                  Mentee Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
