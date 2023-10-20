import Hero from "../components/Hero";
import About from "../components/About";
import WhyKwoc from "../components/WhyKwoc";
import Particle from "../components/Particle";

function Home() {
  return (
    <>
      <section>
        <Hero />
        <Particle />
      </section>
      <section className="sticky w-full h-screen z-10">
        <About />
        <WhyKwoc />
      </section>
    </>
  );
}

export default Home;
