import { useRef, useState, useEffect } from "react";
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

function Home() {
  const [number_of_particles, set_number_of_particles] = useState(50);
  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    set_number_of_particles(() => Math.floor(windowWidth.current / 18.8 * .5));
  });
  return (
    <>
      <Snowfall
        style={{
          position: 'fixed',
          width: '100%',
          height: '120%',
          zIndex: -1,
        }}
        snowflakeCount={number_of_particles}
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
