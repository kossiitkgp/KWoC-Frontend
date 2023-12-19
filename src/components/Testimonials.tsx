import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../data/testimonials.json";
// Import necessary types/interfaces if using TypeScript

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
  
  let testimonialsDatatoRender = testimonialsData.testimonials.slice(0, 5);

  return (
    <div
      id="testimonial"
      className="testimonials-container m-auto w-[95%] md:w-[70%] bg-black/50 py-12 md:px-20 rounded-lg  border border-[#FFFFFF]/[0.16]"
    >
      <div className="content-container">
        <h1 className=" font-display  text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-7xl">
          What Past Participants Say
        </h1>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          autoPlay={true}
          interval={6000}
          swipeable={false}
        >
          {testimonialsDatatoRender.map((testimonial, index: number) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Carousel>
        <div className="sm:w-1/5 m-auto text-center text-zinc-400 font-bold text-xl underline underline-offset-4">
          {/* <Link to={ROUTER_PATHS.TESTIMONIALS} className="hover:text-zinc-300">
            See More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

