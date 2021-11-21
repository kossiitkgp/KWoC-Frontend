import React from "react";
import testimonialData from "../data/testimonials.json";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <section className="hero-body">
        <h1 className="title">Testimonials</h1>
        <h2 className="subtitle">
          Check out how enjoyable KWoC was for the previous participants
        </h2>
      </section>
      {/* TODO: maybe a markdown renderer here if time permits, reading and editing these shouldn't require writing code */}
      <section className="testimonial-list">
        {testimonialData.testimonials.map((testimonial) => (
          <div className="testimonial-box">
            <div className="testimonial-header">
              <img src={testimonial.imageLink} alt="" />
              <div className="testimonial-header-column">
                <div className="testimonial-name">{testimonial.Name}</div>
                <div className="testimonial-biotext">
                  <div>{testimonial.role}</div>
                </div>
                <a className="button" href={testimonial.blogLink}>
                  Blog
                </a>
              </div>
            </div>
            <div className="testimonial-desc">{testimonial.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
