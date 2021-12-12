import React, { useEffect, useState } from "react";
import FAQs from "./FAQ.json";

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
        {FAQs.map((FAQ) => {
          const { q, a } = FAQ;
          return (
            <div>
              <div>{q}</div>
              <div>
                <ul>
                  {a.map((ele) => {
                    return <li>{ele}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
