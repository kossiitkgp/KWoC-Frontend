import React, { useState } from "react";
import FaqBox from "../faq/faqBox";
import { FAQs } from "../../data/faq"; 
import "../../styles/faq.css";

const Faq: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

 
  const filteredFaqs = FAQs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faqPage">
      <h1 className="faqHeading">Frequently Asked Questions</h1>
      <p>Wanna ask us a question? Check these first.</p>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="faqSearch"
      />

      <div className="faqs">
        {filteredFaqs.map((faq, index) => (
          <FaqBox key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
