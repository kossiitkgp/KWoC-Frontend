import data from "../../data/why-kwoc.json";
import "../../styles/Home/whyKwoc.css";

function WhyKwocSection() {
  return (
    <div className="whyKwoc">
      <h1>Why <span className="hl">KWOC</span>?</h1>
      <section className="cards">
        {data.map((item, index) => (
          <Card
            key={index}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
};


interface CardProps {
  heading: string;
  description: string;
}

function Card({ heading, description }: CardProps) {
  return (
    <div className="card">
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
};


export default WhyKwocSection;
