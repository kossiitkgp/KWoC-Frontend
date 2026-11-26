import data from "../../data/why-kwoc.json";
import gitIcon from "../../assets/git.svg";
import terminalIcon from "../../assets/terminal.svg";
import certificateIcon from "../../assets/certificateIcon.svg";
import "../../styles/Home/whyKwoc.css";

const icons = [gitIcon, terminalIcon, certificateIcon];

function WhyKwocSection() {
  return (
    <div className="whyKwoc">
      <h1>
        Why <span className="hl">KWOC</span>?
      </h1>
      <section className="cards">
        {data.map((item, index) => (
          <Card
            key={index}
            index={index}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
}

interface CardProps {
  index: number;
  heading: string;
  description: string;
}

function Card({ index, heading, description }: CardProps) {
  const number = String(index + 1).padStart(2, "0");
  const icon = icons[index % icons.length];

  return (
    <div className="card">
      <div className="card-top">
        <span className="card-icon" aria-hidden="true">
          <span
            className="card-icon-svg"
            style={{
              WebkitMaskImage: `url(${icon})`,
              maskImage: `url(${icon})`,
            }}
          />
        </span>
        <span className="card-num" aria-hidden="true">
          {number}
        </span>
      </div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className="card-line" aria-hidden="true" />
    </div>
  );
}

export default WhyKwocSection;
