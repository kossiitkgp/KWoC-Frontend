import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import kwoc_logo from "../assets/kwoc_logo.png";
import "../styles/Navbar.css";
import {
    ROUTER_PATHS,
    GH_OAUTH_URL,
    REGISTRATIONS_OPEN,
} from "../util/constants";
import { useAuthContext } from '../util/auth';
import { UserType } from '../util/types';

function LoginButton() {
    const authContext = useAuthContext();
    
    return (
      <>
        {authContext.isAuthenticated ? (
          <Link
            to={
              authContext.isRegistered
                ? authContext.dashboardLink
                : authContext.formLink
            }
          >
            <img
              className="profile-picture-navbar"
              src={`https://github.com/${authContext.userData.username}.png`}
            />
          </Link>
        ) : REGISTRATIONS_OPEN ? (
          ["mentor", "student"].map((userType, i) => (
            <button
              className='reg-button'
              key={i}
              onClick={(e) => {
                e.preventDefault();
  
                authContext.setUserType(userType as UserType);
                window.location.href=GH_OAUTH_URL
              }}
            >
              {userType.toUpperCase()} LOGIN
            </button>
          ))
        ) : (
          <Link
            to={GH_OAUTH_URL}
          >
            LOGIN
          </Link>
        )}
      </>
    );
  }  

const Navbar = () => {
    const location = useLocation();
    const [LINKS, setLINKS] = useState([
        { name: "Home", link: ROUTER_PATHS.HOME, isActive: false },
        { name: "Projects", link: ROUTER_PATHS.PROJECTS_LIST, isActive: false },
        { name: "FAQs", link: ROUTER_PATHS.FAQ, isActive: false },
    ]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setLINKS((prevLinks) =>
            prevLinks.map((link) => ({
                ...link,
                isActive: link.link === location.pathname,
            }))
        );
    }, [location.pathname]);
    
    return (
        <div className='navbar'>
            <div className="container">
                <Link to="/">
                    <img
                        className="logo"
                        src={kwoc_logo}
                        alt="KWoC Logo"
                    />
                </Link>
                <div className="dots dot1"></div>
                <div className="dots dot2"></div>
                <div className="dots dot3"></div>
                <div className="dots dot4"></div>
                <div className="dots dot5"></div>
                <div className="dots dot6"></div>
            </div>
            <ul className={`link-container ${isOpen ? 'open' : ''}`}>
                {LINKS.map((link) => (
                    <li key={link.name}>
                        <Link to={link.link} className={link.isActive ? `link nav-glow` : `link`}>
                            {link.name}
                        </Link>
                    </li>
                ))}

                <LoginButton />

                {/* <button className='reg-button'>Registration Opens Soon!</button> */}
            </ul>
            <div className='burger' onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✖' : '☰'}</div>
        </div>
    )
}

export default Navbar