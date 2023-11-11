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
    <div className=" px-4 py-4 border border-[#FFFFFF]/[0.16] rounded-lg">
      <div className="w-full flex mb-4 items-center ">
        <div className="overflow-hidden rounded-full w-10 h-10 border b">
          <img src={imageLink} alt={name} />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase ">{name}</h6>
          <p className="text-zinc-300 text-sm mb-4">{role}</p>
        </div>
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="w-fit m-auto px-2 py-1 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="text-white text-center font-bold">Read Full Blog</p>
          </div>
        </a>
       
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight">
          <span className="text-lg leading-none italic font-bold  mr-1">"</span>
          {quote}
          <span className="text-lg leading-none italic font-bold ml-1">"</span>
        </p>
      </div>
    </div>
  );
}
