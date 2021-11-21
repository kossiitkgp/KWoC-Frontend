import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import testimonialData from "../data/testimonials.json";

export default function Testimonial() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function getText() {
      const markdown = await fetch("/testimonials.md");
      const text = await markdown.text();
      console.log(text);

      setText(text);
    }
    getText();
  }, []);

  return (
    <div className="testimonial">
      <section className="hero-body">
        <h1 className="title">Testimonials</h1>
        <h2 className="subtitle">
          Check out how enjoyable KWoC was for the previous participants
        </h2>
      </section>
      {/* TODO: maybe a markdown renderer here if time permits, reading and editing these shouldn't require writing code */}
      <ReactMarkdown plugins={[gfm]}>{text}</ReactMarkdown>
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
                <a href={testimonial.blogLink}>Blog</a>
              </div>
            </div>
            <div className="testimonial-desc">{testimonial.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
