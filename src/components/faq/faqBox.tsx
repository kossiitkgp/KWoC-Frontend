import React, { useState } from "react";
import "../../styles/faq.css";
import { FAQItem } from "../../data/faq";

const FaqBox: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faqBox ${isOpen ? "open" : ""}`}>
      <div className="faqQuestion" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className="faqToggle">{isOpen ? "−" : "+"}</span>
      </div>

      {isOpen && (
        <div className="faqAnswer">
          {answer.map((line, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FaqBox;
