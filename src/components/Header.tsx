import { Link, useLocation } from "react-router-dom";
import KWoCLogo from "../assets/kwoc_logo.png";
import "../styles/header.css";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useAuthContext } from "../util/auth";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const auth = useAuthContext();

  const path = useLocation().pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img src={KWoCLogo} width={50} />
      {(!isMobile || menuOpen) && (
        <div className="nav">
          <Link to="/" className={`nav-link ${path === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${path === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
          <Link
            to="/faq"
            className={`nav-link ${path === "/faq" ? "active" : ""}`}
          >
            FAQs
          </Link>
          {auth.isRegistered ? (
            <Button icon={<FaArrowRight size={12} />} to={auth.dashboardLink}>
              Dashboard
            </Button>
          ) : auth.isAuthenticated ? (
            <Button icon={<FaArrowRight size={12} />} to={auth.formLink}>
              Complete Registration
            </Button>
          ) : (
            // <Button icon={<FaArrowRight size={12} />} onClick={handleLogin}>
            //   Register
            // </Button>
            <></>
          )}
        </div>
      )}

      {isMobile && (
        <button
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={20} />
        </button>
      )}
    </div>
  );
}

export default Header;
