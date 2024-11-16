import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../data/testimonials.json";
import "../styles/Testimonials.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <section className="testimonials-header">
        <h1 className="testimonials-title">
          <em >What Past Participants Say</em>
        </h1>
        <p className="testimonials-subtitle" style={{color:"white", fontSize: "2rem", fontWeight: "600" }}>
          Stories of Growth and Success!
        </p>
        <br />
      </section>
      
      
      <div className="testimonial-slideshow">
        {testimonialsData.testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            isActive={index === currentIndex}
            isPrevious={index === currentIndex - 1 || (currentIndex === 0 && index === testimonialsData.testimonials.length - 1)}
            isNext={index === currentIndex + 1 || (currentIndex === testimonialsData.testimonials.length - 1 && index === 0)}
          />
        ))}
      </div>

     
    </div>
  );
}

export default Testimonials;
