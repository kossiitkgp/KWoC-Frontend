import About from "../components/Home/About";
import HeroSection from "../components/Home/HeroSection";
import Timeline from "../components/Home/Timeline";
import WhySection from "../components/Home/WhyKwocSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <WhySection />
      <Timeline />
    </div>
  );
}

export default Home;
