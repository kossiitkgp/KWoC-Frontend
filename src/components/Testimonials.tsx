import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '../data/testimonials.json';

export default class Testimonials extends Component {
  render() {
    const glassStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      backdropFilter: 'blur(10px)', 
      border: '1px solid rgba(255, 255, 255, 0.16)', 
    };

    return (
      <div className="m-auto w-[90%]" style={glassStyle}>
        <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] m-auto pt-16 sm:p-32">
          <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl">
            What Developers think about us
          </h1>
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            interval={2000}
          >
            {testimonialsData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Carousel>
          <div className="sm:w-1/5 m-auto py-8 text-center text-zinc-400 font-bold text-lg">
            <a href="#" className="hover:text-zinc-300">
              Know More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
