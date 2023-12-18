import Fuse from "fuse.js";
import React, { useState } from "react";
import { FAQs } from "../data/FAQs";
import FooterSection from "../components/FooterSection";
import { IconContext } from "react-icons";
import { MdCancel } from "react-icons/md";

export default function FAQ() {
  const [query, setQuery] = useState("");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const fuse = new Fuse(FAQs, {
    keys: ["question"],
  });

  const results = fuse.search(query);

  const searchResults = query ? results.map((result) => result.item) : FAQs;

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-col items-center pt-24">
        <div className="sticky lg:-top-40 md:-top-40 sm:-top-52 max-[640px]:-top-[10rem] max-[540px]:-top-[12rem] max-[500px]:-top-[14rem] max-[300px]:-top-[18rem] flex flex-col items-center bg-[#0a0a19]">
          <section className="px-16 py-4 my-8 mx-0">
            <h1 className=" font-display font-bold text-3xl sm:text-5xl mb-8 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-xl font-semibold mb-16 text-center">
              Wanna ask us a question? Check these first.
            </p>
          </section>

          <div className="p-4 my-4 mx-0">
            <div className="flex py-4 px-6 rounded-md outline-none w-[80vw] max-w-3xl border-none text-white bg-slate-900 font-semibold bg-none">
              <input
                className="rounded-md outline-none w-full border-none text-white bg-slate-900 font-semibold bg-none"
                type="text"
                placeholder="Search your query"
                onChange={onChangeHandler}
                value={query}
              ></input>
              {query !== "" && (
                <button onClick={() => setQuery("")}>
                  <IconContext.Provider value={{ size: "1.6rem" }}>
                    <MdCancel />
                  </IconContext.Provider>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-3xl px-4">
          <div className=" py-2 space-y-12">
            {searchResults.map((FAQ, i) => {
              const { question, answer } = FAQ;
              return (
                <div key={`q-${i}`}>
                  <h2>
                    <button
                      id="faqs-title-07"
                      type="button"
                      className="flex items-center justify-between w-full text-left font-semibold py-2"
                      onClick={() => toggleAccordion(i)}
                      // aria-expanded={expanded}
                      aria-controls="faqs-text-07"
                    >
                      <span>{question}</span>
                      <svg
                        className={`fill-indigo-500 relative z-[-10] shrink-0 ml-8 transform origin-center transition duration-200 ease-out ${
                          activeIndex === i ? "rotate-180" : ""
                        }`}
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            activeIndex === i ? "rotate-180" : ""
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            activeIndex === i ? "rotate-180" : ""
                          }`}
                        />
                      </svg>
                    </button>
                  </h2>

                  <div
                    id="faqs-text-07"
                    role="region"
                    aria-labelledby="faqs-title-07"
                    className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === i
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {answer.map((item, index) => (
                        <p
                          className="pb-3"
                          key={index}
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
