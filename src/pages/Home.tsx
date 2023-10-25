import Hero from "../components/Hero";
import About from "../components/About";
import WhyKwoc from "../components/WhyKwoc";
import Snowfall from 'react-snowfall'
import snowflake_particle from "../assets/snowflake.png"
import snowflake_particle2 from "../assets/snowflake2.svg"
import snowflake_particle3 from "../assets/snowflake3.svg"
import snowflake_particle4 from "../assets/snowflake4.svg"
import Particle from "../components/Particle";


const snowflake = document.createElement('img')
snowflake.src = snowflake_particle
const snowflake2 = document.createElement('img')
snowflake2.src = snowflake_particle2
const snowflake3 = document.createElement('img')
snowflake3.src = snowflake_particle3
const snowflake4 = document.createElement('img')
snowflake4.src = snowflake_particle4

const images = [snowflake, snowflake2, snowflake3, snowflake4]


if (window.onload) {
  const region = window.document.getElementsByClassName("Snowfall-region")[0];
  console.log(region)
}


function Home() {
  return (
    <>
      <Snowfall
      style={{
        position:'absolute',
        width:'100%',
        height:'100vh',
        zIndex:-1,
      }}
        snowflakeCount={100}
        images={images}
        radius={[15.0, 40.0]}
        speed={[0.5, 4.0]}
        wind={[-0.5, 1.0]}
        rotationSpeed={[-1.0, 1.0]}
      />
      <section>
        <Hero />
      </section>
      <section className="backdrop-blur-sm bg-black/80 py-64 clip-path-polygonDesignSmall md:clip-path-polygonDesign">
        <About />
        <WhyKwoc />
      </section>
      <Particle />
    </>
  );
}

export default Home;
