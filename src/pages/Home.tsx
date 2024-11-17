import { HeroComponent } from "../components/Hero";
import Timeline from "../components/Timeline";
import { AboutSection } from "../components/About";
import { WhyKWoC } from "../components/WhyKWoC";
import "../styles/Santa.css";
import Testimonials from "../components/Testimonials";
import { Snowfall } from "react-snowfall";

function Home() {
  return (
    <div>
      <Snowfall // the image can be edited into anything we want, feel free to change
        snowflakeCount={75}
        speed={[0.5, 1]} // array takes [min, max]
        wind={[-0.5, 0.5]}
        radius={[2, 4]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <HeroComponent />
      <AboutSection />
      <WhyKWoC />
      <Timeline />
      <Testimonials />
    </div>
  );
}

export default Home;
