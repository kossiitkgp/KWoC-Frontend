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

export default function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, quote, imageLink, blogLink } = props.testimonial;

  return (
    <div className="m-auto lg:my-16 p-2 w-[90%] lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-[30%]">
        <img
          src={imageLink}
          alt={name}
          className="rounded-full max-w-[100px] md:max-w-[200px]"
        />
        <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
        <p className="text-zinc-300 text-sm mb-4">{role}</p>
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="w-fit m-auto px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="text-white text-center font-bold">Read Full Blog</p>
          </div>
        </a>
      </div>
      <div className="lg:w-[70%]">
        <div className="mx-auto mt-8 md:mb-8 md:flex justify-center items-center">
          <svg
            className="w-10 h-10 mx-auto rotate-180 text-zinc-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="my-auto px-2 sm:w-[60%] text-[15px] sm:text-xl italic font-medium text-zinc-100">
            {quote}
          </p>
          <svg
            className="w-10 h-10 mx-auto text-zinc-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
