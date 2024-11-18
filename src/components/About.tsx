import "../styles/About.css";
import cloudBottom from "../assets/Cloud-About-edited.png";

export const AboutSection = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-text">
        <h1 className="about-title">About KWoC</h1>
        <p className="about-content">
          Kharagpur Winter of Code is a 5-week long online program for students
          who are new to open source software development. The program not only
          helps students to get involved in open source, but also prepares them
          for many open source summer programs; Google Summer of Code being one
          of them.
        </p>
      </div>
      <img className="about-bottom-image" src={cloudBottom} />
    </div>
  );
};
