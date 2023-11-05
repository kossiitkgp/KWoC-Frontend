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
      className="m-auto p-4"
      style={{
        maxWidth: "900px",
        border: "1px solid #000",
        borderRadius: "10px",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "0",
        }}
      >
        <img
          src={imageLink}
          alt={name}
          className="rounded-full"
          style={{
            maxWidth: "150px",
            maxHeight: "150px",
            borderRadius: "50%",
          }}
        />
        <h3 className="text-zinc-400 text-2xl my-2">{name}</h3>
        <p className="text-zinc-300 text-sm mb-4">{role}</p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p className="text-zinc-300 text-xl my-2">{quote}</p>
        <a href={blogLink} target="_blank" rel="noopener noreferrer">
          <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10 hover:text-black hover:shadow-md transition-all duration-300 ease-in-out">
            <p className="text-white text-center font-bold">Blog</p>
          </div>
        </a>
      </div>
    </div>
  );
}
