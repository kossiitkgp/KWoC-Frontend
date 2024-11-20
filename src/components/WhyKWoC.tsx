import "../styles/WhyKWoC.css";
import { WhyCard } from "./WhyCard";

export const WhyKWoC = () => {
  return (
    <div className="why-kwoc-container">
      <div className="why-header">
        <h1 className="why-title">
          <em>Why KWoC?</em>
        </h1>
        <p className="why-tagline">Ignite your Open-Source Journey!</p>
      </div>
      <div className="why-cards">
        <WhyCard
          title="Intro to Open Source"
          description="Get started with open source collaboration. Hone programmer skills with Git and GitHub. Make meaningful contributions guided by mentors. Build a portfolio showcasing your talents."
        />
        <WhyCard
          title="Prepare for GSoC"
          description="Research organizations and connect with mentors. Create quality proposals and sharpen skills. Gain insider tips to boost your GSoC chances. Open doors through impressive abilities."
        />
        <WhyCard
          title="Earn a Certificate"
          description="Receive a certificate upon successful completition of the program. Boost your professional profile and validate your programming skills with this credential. Showcase your expertise."
        />
      </div>
    </div>
  );
};
