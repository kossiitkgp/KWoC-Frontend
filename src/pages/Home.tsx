import Hero from "../components/Hero";
import About from "../components/About";
import WhyKwoc from "../components/WhyKwoc";
import FooterSection from "../components/FooterSection";


function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="backdrop-blur-sm bg-black/80 py-64 clip-path-polygonDesign">
        <About />
        <WhyKwoc />
      </section>
      <FooterSection />
    </>
  );
}

export default Home;
