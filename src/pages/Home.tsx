import { HeroComponent } from "../components/Hero";
import Timeline from "../components/Timeline";
import { AboutSection } from "../components/About";
import { WhyKWoC } from "../components/WhyKWoC";
import "../styles/Santa.css";
import Testimonials from "../components/Testimonials";

function Home() {

  return (
    <div>
      <HeroComponent />
      <AboutSection />
      <WhyKWoC />
      <Timeline />
      <Testimonials />
    </div>
  );
}

export default Home;
