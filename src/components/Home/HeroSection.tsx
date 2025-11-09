import Button from "../Button";
import "../../styles/Home/hero.css"

function HeroSection() {
  return (
    <div className="hero">
      <div className="quote">"For the love of open source"</div>
      <div className="title">
        Kharagpur <span className="highlight">Winter  of Code</span> 2025
      </div>
      <div className="actions">
        <Button>Student Dashboard</Button>
        <Button>Mentor Dashboard</Button>
      </div>
    </div>
  );
}

export default HeroSection;
