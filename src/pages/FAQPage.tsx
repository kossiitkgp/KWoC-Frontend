import { useState } from "react";
import { FAQItem, FAQs } from "../data/faq";
import snowflakeIcon from "../assets/snowflake.svg";
import arrowUpIcon from "../assets/arrowup.svg";
import arrowDownIcon from "../assets/arrowdown.svg";
import "../styles/faq.css";

function SnowflakeIcon() {
  return (
    <img src={snowflakeIcon} className="faqSnowflake" alt="" aria-hidden="true" />
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <img
      src={open ? arrowUpIcon : arrowDownIcon}
      className="faqToggle"
      alt=""
      aria-hidden="true"
    />
  );
}

function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = FAQs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="faqPage">
      <div className="faqContainer">
        <h1 className="faqHeading">Frequently Asked Questions</h1>
        <p className="faqSubtitle">Wanna ask us a question? Check these first.</p>

        <div className="faqSearchWrap">
          <svg
            className="faqSearchIcon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.2" y2="16.2" />
          </svg>
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="faqSearch"
          />
        </div>

        <div className="faqs">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <FaqBox
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <p className="faqEmpty">No matching questions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function FaqBox({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqBox">
      <button
        type="button"
        className={`faqQuestion ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <SnowflakeIcon />
        <h3>{question}</h3>
        <ChevronIcon open={isOpen} />
      </button>

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
