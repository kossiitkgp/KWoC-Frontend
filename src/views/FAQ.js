import Fuse from "fuse.js";
import React, { useState } from "react";
import FAQs from "./FAQ.json";

export default function FAQ() {
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   async function getText() {
  //     const markdown = await fetch("/faq.md");
  //     const text = await markdown.text();
  //     console.log(text);

  //     setText(text);
  //   }
  //   getText();
  // }, []);

  const [query, setQuery] = useState("");

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const fuse = new Fuse(FAQs, {
    keys: ["q"],
  });

  const results = fuse.search(query);

  console.log(results);
  const searchResults = query ? results.map((result) => result.item) : FAQs;

  return (
    <div className="faq">
      <section className="faq-hero">
        <h1 className="title">Frequently Asked Questions</h1>
        <p>Wanna ask us a question? Check these first.</p>
      </section>

      <div class="faq-hero-search">
        <h1 class="title">Search</h1>
      </div>

      <div className="faq-search-box">
        <div class="field">
          <input
            class="input"
            type="text"
            placeholder="Search your query"
            onChange={onChangeHandler}
            value={query}
          ></input>
        </div>
      </div>

      <div className="container">
        {searchResults.map((FAQ) => {
          const { q, a } = FAQ;
          return (
            <div>
              <div>
                <strong>{q}</strong>
              </div>
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
