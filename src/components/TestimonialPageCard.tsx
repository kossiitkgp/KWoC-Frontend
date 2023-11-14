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
    <div className=" px-8 py-5 bg-[#0f0f27] rounded-lg">
      <div className="w-full flex mb-8 items-center gap-4">
        <div className="overflow-hidden  rounded-full w-14 h-14">
          <img src={imageLink} alt={name} />
        </div>
        <div className="text-left">
          <h6 className="font-bold text-lg uppercase ">{name}</h6>
          <p className="text-zinc-500 text-sm font-medium">{role}</p>
        </div>
      </div>
      <div className="w-full mb-6 ">
        <p className="text-base text-gray-400 leading-tight">
          <span className="text-lg leading-none italic font-bold  mr-1">"</span>
          <span>{quote}</span>
          <span className="text-lg leading-none italic font-bold ml-1">"</span>
        </p>
      </div>
      <a href={blogLink} target="_blank" rel="noopener noreferrer">
        <div className="w-fit m-auto px-6 py-2 bg-primary-950 hover:bg-primary-900 rounded-lg  hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
          <p className="text-white text-center font-bold">Read Full Blog</p>
        </div>
      </a>
    </div>
  );
}
