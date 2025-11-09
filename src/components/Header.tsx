import { Link } from "react-router-dom";
import KWoCLogo from "../assets/kwoc_logo.png";
import "../styles/header.css";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <img src={KWoCLogo} width={50} />
      <div className="nav">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/faq" className="nav-link">FAQs</Link>
        <Button icon={<FaArrowRight size={12} />} to="/register">Register</Button>
      </div>
    </div>
  );
}

export default Header;
