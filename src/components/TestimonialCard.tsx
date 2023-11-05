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
    <div
      className="m-auto p-4 w-[90%]"
    >
      <div>
        <img
          src={imageLink}
          alt={name}
          className="rounded-full max-w-[100px] md:max-w-[200px]"
        />
        <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
        <p className="text-zinc-300 text-sm mb-4">{role}</p>
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="w-fit m-auto px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="text-white text-center font-bold">Blog</p>
          </div>
        </a>
      </div>
      <div>
        <p className=" my-2 py-4 px-8 md:px-32 lg:px-64 text-zinc-300 text-[15px] sm:text-xl">{quote}</p>
      </div>
    </div>
  );
}
