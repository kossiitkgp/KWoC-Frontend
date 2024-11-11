import { useState } from 'react';
import { Link } from "react-router-dom";
import kwoc_logo from "../assets/kwoc_logo.png";
import "../styles/Navbar.css";
import {
    ROUTER_PATHS,
    //GH_OAUTH_URL,
    //REGISTRATIONS_OPEN,
} from "../util/constants";

const Navbar = () => {
    const [LINKS, _] = useState([
        { name: "Home", link: ROUTER_PATHS.HOME, isActive: true },
        { name: "Projects", link: ROUTER_PATHS.PROJECTS_LIST, isActive: false },
        { name: "FAQs", link: ROUTER_PATHS.FAQ, isActive: false },
    ]);
    const [isOpen, setIsOpen] = useState(false);


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
                {/*<Link
                    to={GH_OAUTH_URL}
                    className="reg-button"
                >
                    Register <span> </span> →
                </Link>*/}
                <button className='reg-button'>Registration Opens Soon!</button>
            </ul>
            <div className='burger' onClick={() => setIsOpen(!isOpen)}>{isOpen ? '✖' : '☰'}</div>
        </div>
    )
}

export default Navbar