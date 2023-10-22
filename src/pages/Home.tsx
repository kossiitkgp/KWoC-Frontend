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
      <section>
        <About />
        <WhyKwoc />
        <FooterSection />
      </section>
    </>
  );
}

export default Home;
