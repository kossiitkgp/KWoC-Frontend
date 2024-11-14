import "../styles/WhyKWoC.css";
import { WhyCard } from "./WhyCard";

export const WhyKWoC = () => {
  return (
    <div className="why-kwoc-container" >
      <div className="why-header">
        <h1 className="why-title">
          <em>Why KWoC?</em>
        </h1>
        <p className="why-tagline">
          Ignite your Open-Source Journey!
        </p>
      </div>
      <div className="why-cards">
        <WhyCard title="Intro to Open Source" description="Get started with open source collaboration. Hone programmer skills with Git and GitHub. Make meaningful contributions guided by mentors. Build a portfolio showcasing your talents." />
        <WhyCard title="Intro to Open Source" description="Get started with open source collaboration. Hone programmer skills with Git and GitHub. Make meaningful contributions guided by mentors. Build a portfolio showcasing your talents." />
        <WhyCard title="Intro to Open Source" description="Get started with open source collaboration. Hone programmer skills with Git and GitHub. Make meaningful contributions guided by mentors. Build a portfolio showcasing your talents." />
      </div>
    </div>
  )
}
