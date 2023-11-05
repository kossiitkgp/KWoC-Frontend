import React from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageLink: string;
  blogLink: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, quote, imageLink, blogLink } = testimonial;

  const cardStyle = {
    border: "1px solid #000",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    display: "flex",
    alignItems: "center", // Vertically center the content
    justifyContent: "space-between", // Align items left and right
  };

  const leftColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center image and text vertically
    marginRight: "20px", // Add space between image and text
  };

  const rightColumnStyle = {
    flex: 1, // Take remaining horizontal space
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Right-align the quote and blog button
  };

  return (
    <div className="m-auto p-8" style={cardStyle}>
      <div style={leftColumnStyle}>
        <img src={imageLink} alt={name} className="rounded-full" />
        <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
        <p className="text-zinc-300 text-sm mb-4">{role}</p>
      </div>
      <div style={rightColumnStyle}>
        <p className="text-zinc-300 text-2xl my-2">{quote}</p>
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="text-white text-center font-bold">Blog</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
