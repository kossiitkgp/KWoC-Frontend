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
    <div className="faq">
      <section className="faq-hero">
        <h1 className="title">Frequently Asked Questions</h1>
        <p>Wanna ask us a question? Check these first.</p>
      </section>

      <div className="container">
        <ReactMarkdown plugins={[gfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
