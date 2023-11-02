import React from 'react';

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

  return (
    <>
      <div className="m-auto p-8">
        <div className="w-1/3 sm:w-1/5 m-auto">
          <img src={imageLink} alt={name} />
        </div>
        <h3 className="text-zinc-400 text-2xl my-4">{name}</h3>
        <div className="sm:w-1/5 m-auto">
          <a href={blogLink}>
            <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10">
              <p className="text-zinc-400 text-center font-bold">Blog</p>
            </div>
          </a>
        </div>
        <p className="text-zinc-400 text-1xl my-4 px-4 sm:px-16">{quote}</p>
      </div>
    </>
  );
};

export default TestimonialCard;
