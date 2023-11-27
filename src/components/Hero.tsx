import { useState, useEffect, MouseEvent, useCallback } from "react";
import Santa from "../assets/Santa.png";
import Moon from "../assets/Moon.png";
import StarsBG from "../assets/stars.png";
import { MENTOR_MANUAL_LINK, STUDENT_MANUAL_LINK } from "../util/constants";

function ManualButton() {
  return (
    <div className="flex justify-center">
      <a
        target="_blank"
        rel="noreferrer"
        href={STUDENT_MANUAL_LINK}
        className="text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
      >
        Student Manual
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={MENTOR_MANUAL_LINK}
        className="text-white focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 border-gray-700"
      >
        Mentor Manual
      </a>
    </div>
  );
}

function Hero() {
  const [text, setText] = useState("100010101");

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz";
    const finalText = "KWoC 2023";

    let hypr = () => {
      let iteration = 0;

      setInterval(() => {
        setText((prevText) => {
          return prevText
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return finalText[index];
              } else {
                return letters[
                  Math.floor(Math.random() * (letters.length - 1))
                ];
              }
            })
            .join("");
        });

        iteration += 0.5;
      }, 35);
    };
    hypr();
  }, []);

  function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }

  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    [],
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex h-screen">
      <img src={StarsBG} className="fixed z-[-4] w-[100%] h-[100%]" />
      <img
        src={Santa}
        alt="Santa"
        className="bottom-[-10%] sm:top-[45%] sm:right-[25%] z-[-2] fixed lg:visible lg:top-[0] lg:right-[0]"
      />
      <img
        src={Moon}
        alt="Moon"
        className="bottom-[-10%] sm:top-[40%] z-[-3] fixed lg:top-[-70%] lg:right-[-36%] brightness-[35%] lg:brightness-[50%] overflow-x-hidden"
      />
      <div className="m-auto">
        <h1
          data-value="KWoC 23"
          className="justify-center font-display text-center mb-4 font-extrabold leading-none tracking-tight text-[60px] sm:text-[120px] lg:text-[156px] text-white  select-none"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={() => {
            window.location.reload();
          }}
          style={{
            transform: `perspective(1000px) rotateX(${
              rotate.x / 3
            }deg) rotateY(${rotate.y / 3}deg) scale3d(1, 1, 1)`,
            transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
          }}
        >
          {text}
        </h1>
        <h3 className="justify-center text-center mb-16 font-extrabold leading-none tracking-tight text-[20px] lg:text-[35px] text-white select-none">
          For the love of open source!
        </h3>
        <ManualButton />
        <div className="m-auto flex justify-center mt-10">
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="LightBlue"
              className="w-12 h-12 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
