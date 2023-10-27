import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../styles/TimelineStyle.css";
import Lenis from '@studio-freight/lenis';



gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
gsap.defaults({ease: "none", duration: 2});


function Timeline() {
  
  useEffect(() => {
    const lenis = new Lenis()
    
    lenis.on('scroll', (e: any) => {
      console.log(e)
    })
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    
    const pulses = gsap.timeline({
      defaults: {
        duration: 0.5, 
        autoAlpha: 1, 
        scale: 1.5, 
        transformOrigin: 'center', 
        ease: "elastic(2.5, 1)"
      }})
      .to(".startball, .text00", {}, 0)
      .to(".ball02, .text01", {}, 0.25) 
      .to(".ball03, .text02", {}, 0.42)
      .to(".ball04, .text03", {}, 0.63)
      .to(".ball05, .text04", {}, 0.85)
      .to(".ball06, .text05", {}, 1.1)
      .to(".ball07, .text06", {}, 1.45)
        
    const main = gsap.timeline({defaults: {duration: 1.5},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
        end: "bottom center"
      }})
    .to(".ball01", {duration: 0, autoAlpha: 1})
    .from(".theLine", {drawSVG: 0}, 0)
    .to(".ball01", {motionPath: {
      path: ".theLine", 
      align:".theLine",
      alignOrigin: [0.5, 0.5],
    }}, 0)
    .add(pulses, 0);
    
    return () => {
      main.kill();
      pulses.kill();
    }
  }, []);

  const timelineData = [
    {date: "DATE1", content: "INFO1"}, 
    {date: "DATE2", content: "INFO2"}, 
    {date: "DATE3", content: "INFO3"}, 
    {date: "DATE4", content: "INFO4"}, 
    {date: "DATE5", content: "INFO5"}, 
    {date: "DATE6", content: "INFO6"}, 
    {date: "DATE7", content: "INFO7"}
  ];

  return (
    <div className=" mb-60">
      <h1 className="text-zinc-300 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36  mb-36 lg:text-8xl">TIMELINE</h1>      
      <div className="flex justify-center mb-1/10">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200" className="max-w-[min(550px,_55%)] w-full h-full overflow-visible">

          {
            Array.from(Array(7).keys()).map((i) => {
              return (
                <path className={`line0${i} line`} d={`M -1000 ${i*200}  2000 ${i*200}`} fill="none" stroke="white" strokeWidth={'2px'}></path>
              )})
          }

          {
            timelineData.map((item, i) => {
              return (
                <>
                  <text className={`text0${i}`} x="-200" y={`${i*200-10}`} fill="white" visibility={'hidden'} fontSize={'1.5rem'}>{item.date}</text>
                  <text className={`text0${i}`} x="700" y={`${i*200-10}`} fill="white" visibility={'hidden'} fontSize={'1.5rem'}>{item.content}</text>
                </>
              )})
          }

          <path d="M -5,0
                  Q 450 230 300 450 
                  T 130 750
                  Q 100 850 300 1000
                  T 150 1200"
                fill="none" stroke="white" strokeOpacity={0.2} stroke-width="10px" strokeLinecap="round" />   
          <path className="theLine" 
                d="M -5,0
                  Q 450 230 300 450 
                  T 130 750
                  Q 100 850 300 1000
                  T 150 1200"
                fill="none" stroke="white" stroke-width="10px" strokeLinecap="round" />   


          <circle className="startball" r="15" cx="-5" cy="0" fill="white"></circle>
          <circle className="ball ball01" r="15" cx="50" cy="100" fill="white" visibility={'hidden'}></circle>
          <circle className="ball ball02" r="15" cx="278" cy="201" fill="white" visibility={'hidden'}></circle>
          <circle className="ball ball03" r="15" cx="327" cy="401" fill="white" visibility={'hidden'}></circle>
          <circle className="ball ball04" r="15" cx="203" cy="601" fill="white" visibility={'hidden'}></circle>
          <circle className="ball ball05" r="15" cx="128" cy="801" fill="white" visibility={'hidden'}></circle>
          <circle className="ball ball06" r="15" cx="300" cy="1001" fill="white" visibility={'hidden'}></circle>
          <circle className="ball ball07" r="15" cx="147" cy="1201" fill="white" visibility={'hidden'}></circle>
        </svg>
      </div>
    </div>
  );
}

export default Timeline;