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

  handleClick = e => {
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

  closeNavbar = e => {
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
      <div className="navbar">
        <nav
          className={`navbar is-fixed-top  ${this.state.scrollClass}`}
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                KWoC
              </Link>

              <button
                className={`navbar-burger burger ${clickClass}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={this.handleClick}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${clickClass}`}>
              <div className="navbar-end" onClick={this.closeNavbar}>
                <Link className="navbar-item" to="/">
                  Home
                </Link>

                <Link className="navbar-item" to="/about">
                  About
                </Link>

                <Link className="navbar-item" to="/FAQ">
                  FAQs
                </Link>

                <Link className="navbar-item" to="/testimonial">
                  Testimonials
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
