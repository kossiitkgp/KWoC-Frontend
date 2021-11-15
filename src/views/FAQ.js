import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function FAQ() {
  const [text, setText] = useState("");

  useEffect(() => {
    async function getText() {
      const markdown = await fetch("/faq.md");
      const text = await markdown.text();
      console.log(text);

      setText(text);
    }
    getText();
  }, []);

  return (
    <div className="FAQs">
      <section className="hero" id="faq">
        <div className="hero-body">
          <div className="container" id="content-faq">
            <h1 className="title">Frequently Asked Questions</h1>
            <h2 className="subtitle">
              Wanna Ask us a question? Check these first!
            </h2>
          </div>
        </div>
      </section>

      <div className="container">
        <ReactMarkdown plugins={[gfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
