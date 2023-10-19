import Hero from "../components/Hero";
import About from "../components/About";
import Particle from "../components/Particle";

function Home() {
  return (
    <>
      <section className="w-full h-screen">
        <Hero />
        <Particle />
      </section>
      <section className="w-full h-screen">
        <About />
      </section>
    </>
  );
}

export default Home;
