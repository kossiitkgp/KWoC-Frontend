import { useState, useEffect } from 'react';

function ManualButton(){
  return (
    <div className="flex justify-center">
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Student Manual</button>
      <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Mentor Manual</button>
    </div>
  );
}


function Hero () {  
  const [text, setText] = useState("1000101");

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz";
    const finalText = "KWoC-23";
    let hypr = () => {
      let iteration = 0;

      setInterval(() => {
        setText(prevText => {
          return prevText.split("").map((_ , index) => {
            if (index < iteration ) {
              return finalText[index];
            } else {
              return letters[Math.floor(Math.random() * (letters.length - 1))];
            }
            }).join("");
          })
          iteration += 1/3;
        }, 35);
      }
      hypr();      
    },[]);  

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <h1 data-value="KWoC 23" className="justify-center text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-9xl dark:text-white">
          {text}
        </h1>
        <ManualButton /> 
      </div>
      
    </div>
  );
}

export default Hero;
