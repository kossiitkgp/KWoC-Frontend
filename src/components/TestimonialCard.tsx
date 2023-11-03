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
    border: '1px solid #000',
    borderRadius: '10px',
    padding: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    transition: 'transform 0.2s ease-in-out', 
  };

  return (
    <div className="m-auto p-8" style={cardStyle}>
      <div className="w-1/6 sm:w-1/15 m-auto">
        <img
          src={imageLink}
          alt={name}
          className="rounded-full"
        />
      </div>
      <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
      <p className="text-zinc-300 text-sm mb-4">{role}</p>
      <div className="sm:w-1/5 m-auto">
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
        <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
  <p className="text-white text-center font-bold">Blog</p>
</div>
        </a>
      </div>
      <p className="text-white text-2xl my-4 px-4 sm:px-16">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
