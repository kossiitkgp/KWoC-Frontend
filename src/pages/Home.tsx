import { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyKWoC from '../components/WhyKWoC';
import Snowfall  from 'react-snowfall';
import snowflake_particle1 from '../assets/snowflake1.svg';
import snowflake_particle2 from '../assets/snowflake2.svg';
import snowflake_particle3 from '../assets/snowflake3.svg';
import JoinOurCommunity from '../components/JoinOurCommunity';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import FooterSection from '../components/FooterSection';

type SnowflakeImage = HTMLImageElement;

const snowflake_images: SnowflakeImage[] = [
  snowflake_particle1,
  snowflake_particle2,
  snowflake_particle3,
].map((img_src: string) => {
  const img_elem = document.createElement('img');
  img_elem.src = img_src;

  return img_elem;
});

interface HomeProps {} // Add props if needed

const Home: React.FC<HomeProps> = () => {
  const [number_of_particles, set_number_of_particles] = useState<number>(20);
  const windowWidth = useRef<number>(window.innerWidth);

  useEffect(() => {
    set_number_of_particles(() => Math.floor(windowWidth.current / 50));
  });

  return (
    <>
      <section>
        {process.env.NODE_ENV === "production" && (
          <Snowfall
            style={{
              width: "100%",
              height: "120%",
              zIndex: -1,
            }}
            snowflakeCount={number_of_particles}
            images={snowflake_images}
            radius={[15.0, 40.0]}
            speed={[0.5, 4.0]}
            wind={[-0.5, 1.0]}
            rotationSpeed={[-1.0, 1.0]}
          />
        )}
        <Hero />
      </section>
      <section className="bg-black/60 py-32 clip-path-polygonDesignSmall md:clip-path-polygonDesign">
        <About />
        <WhyKWoC />
        <Timeline />
        <Testimonials />
        <JoinOurCommunity />
        <FooterSection />
      </section>
    </>
  );
};

export default Home;
