import Fuse from 'fuse.js';
import React, { useState, ChangeEvent } from 'react';
import { FAQs } from '../data/FAQs';
import FooterSection from '../components/FooterSection';
import { IconContext } from 'react-icons';
import { MdCancel } from 'react-icons/md';

interface FAQItem {
  question: string;
  answer: string[];
}

export default function FAQ() {
  const [query, setQuery] = useState<string>('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const fuse = new Fuse<FAQItem>(FAQs, {
    keys: ['question'],
  });

  const results = fuse.search(query);

  const searchResults: FAQItem[] = query ? results.map((result) => result.item) : FAQs;

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
          <ul className="list-none py-2 space-y-12">
            {searchResults.map((FAQ, i) => {
              const { question, answer } = FAQ;
              return (
                <li className="space-y-4" key={`q-${i}`}>
                  <div className="font-bold text-lg">
                    <strong>{question}</strong>
                  </div>
                  <div>
                    <ul className="list-disc mx-12 space-y-2 leading-6">
                      {answer.map((item) => {
                        return (
                          <li
                            key={item}
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <FooterSection />
    </>
  );
}
