import { useState } from "react";
import { FAQItem, FAQs } from "../data/faq";
import "../styles/faq.css";

function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = FAQs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()),
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
}

function FaqBox({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"faqBox"}>
      <div
        className={`faqQuestion ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
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
}

export default FAQPage;
