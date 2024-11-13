import "../styles/TestimonialCard.css";
import quoteimg from "../assets/quote.png";


interface Testimonial {
  name: string;
  role: string;
  quote: string;
  imageLink: string;
  blogLink: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  isPrevious: boolean;
  isNext: boolean;
}

export default function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, quote, imageLink, blogLink } = props.testimonial;
  const { isActive, isPrevious, isNext } = props;

  return (
    <div
      className={`card ${isActive ? "active" : ""} ${isPrevious ? "previous" : ""} ${isNext ? "next" : ""}`}
      style={{
        transform: isActive ? "scale(1)" : "scale(0.8)",
        opacity: isActive ? 1 : 0.6,
        zIndex: isActive ? 1 : isPrevious || isNext ? 0 : -1,
      }}
    >
      <div className="testimonial-card">
        
      <div className="testimonial-avatar">
        <img className="avatar" src={imageLink} alt={name} />
      </div>
        <div className="testimonial-quote-container">
          <p className="testimonial-quote">
            <span className="testimonial-quote-symbol"><img className="q" src={quoteimg} /></span>
            <span className="t-quote"><br />{quote}</span>
            <p><br></br><br></br><hr className="line"></hr></p>
          </p>
        </div>
        <div>
          <h6 className="testimonial-name">{name}</h6>
          <p className="testimonial-role">{role}</p>
        </div>
      
      <a href={blogLink} target="_blank" rel="noopener noreferrer">
        <div className="read-blog-button">
          <p><u ><h3>Read Full Blog</h3></u></p>
        </div>
      </a>
      </div>
    </div>
  );
}
