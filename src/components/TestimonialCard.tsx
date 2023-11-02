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
    border: '1px solid #000', // Set the border style here
    borderRadius: '10px', // Add rounded corners to the card
    padding: '16px',
  };

  return (
    <div className="m-auto p-8" style={cardStyle}>
      <div className="w-1/3 sm:w-1/5 m-auto">
        <img
          src={imageLink}
          alt={name}
          className="rounded-full" // Apply rounded corners for a circular image
        />
      </div>
      <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
      <p className="text-zinc-300 text-sm mb-4">{role}</p>
      <div className="sm:w-1/5 m-auto">
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10">
            <p className="text-zinc-400 text-center font-bold">Blog</p>
          </div>
        </a>
      </div>
      <p className="text-zinc-400 text-1xl my-4 px-4 sm:px-16">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
