import React from "react";
import Card from "./WhyKwocCard";
import { whyData } from "../data/WhyKwoc";
import "../styles/whyKwoc.css"

const WhySection: React.FC = () => {
  return (
    <div className="whyKwoc">
      <h1>Why KWOC</h1>
      <section className="whyKwocSection">
        {whyData.map((item, index) => (
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

export default WhySection;
