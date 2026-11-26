import { Link, useLocation } from "react-router-dom";
import KWoCLogo from "../assets/kwoc_logo.png";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import "../styles/header.css";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useAuthContext } from "../util/auth";
import { useTheme } from "./ThemeContext";

export function ThemeButton() {
  const { theme, toggle } = useTheme();
  const icon = theme === "day" ? moonIcon : sunIcon;
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "night" ? "day" : "night"} theme`}
      title="Switch day/night"
    >
      <span
        className="theme-toggle-icon"
        aria-hidden="true"
        style={{
          WebkitMaskImage: `url(${icon})`,
          maskImage: `url(${icon})`,
        }}
      />
    </button>
  );
}

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const auth = useAuthContext();

  const path = useLocation().pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <Link to="/" className="header-logo">
        <img src={KWoCLogo} width={50} alt="KWoC" />
      </Link>

      {(!isMobile || menuOpen) && (
        <div className="nav">
          <Link
            to="/"
            className={`nav-link ${path === "/" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${path === "/projects" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/timeline"
            className={`nav-link ${path === "/timeline" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Timeline
          </Link>
          <Link
            to="/faq"
            className={`nav-link ${path === "/faq" ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
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
            <></>
          )}
        </div>
      )}

      <div className="header-actions">
        <ThemeButton />

        {isMobile && (
          <button
            type="button"
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FiMenu size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
