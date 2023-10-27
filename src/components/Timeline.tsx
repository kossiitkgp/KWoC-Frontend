import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../styles/TimelineStyle.css";
import Lenis from '@studio-freight/lenis';


gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
gsap.defaults({ease: "none"});


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
    .to(".ball01", {duration: 0.01, autoAlpha: 1})
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


  return (
    <div className=" mb-60">
      <h1 className="text-zinc-300 text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36  -mb-36 lg:text-8xl">TIMELINE</h1>      
      <div className="flex justify-center mb-1/10">
        <svg id="svg" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 1200">
          <path className="line00 line" d="M -1000 0  2000 0" ></path>
          <path className="line01 line" d="M -1000 200  2000 200" ></path>
          <path className="line02 line" d="M -1000 400  2000 400" ></path>
          <path className="line03 line" d="M -1000 600  2000 600" ></path>
          <path className="line04 line" d="M -1000 800  2000 800" ></path>
          <path className="line05 line" d="M -1000 1000 2000 1000" ></path>
          <path className="line05 line" d="M -1000 1200 2000 1200" ></path>
          <text className="text00" x="-200" y="-10">date0</text><text className="text00" x="700" y="-10">thing0</text>
          <text className="text01" x="-200" y="190">date1</text><text className="text01" x="700" y="190">thing1</text>
          <text className="text02" x="-200" y="390">date2</text><text className="text02" x="700" y="390">thing2</text>
          <text className="text03" x="-200" y="590">date3</text><text className="text03" x="700" y="590">thing3</text>
          <text className="text04" x="-200" y="790">date4</text><text className="text04" x="700" y="790">thing4</text>
          <text className="text05" x="-200" y="990">date5</text><text className="text05" x="700" y="990">thing5</text>
          <text className="text06" x="-200" y="1190">date6</text><text className="text06" x="700" y="1190">thing6</text>

          <path className="theLine" 
                d="M -5,0
                  Q 450 230 300 450 
                  T 130 750
                  Q 100 850 300 1000
                  T 150 1200"
                fill="none" stroke="white" stroke-width="10px" />   

          <circle className="startball" r="15" cx="0" cy="0"></circle>
          <circle className="ball ball01" r="15" cx="50" cy="100"></circle>
          <circle className="ball ball02" r="15" cx="278" cy="201"></circle>
          <circle className="ball ball03" r="15" cx="327" cy="401"></circle>
          <circle className="ball ball04" r="15" cx="203" cy="601"></circle>
          <circle className="ball ball05" r="15" cx="128" cy="801"></circle>
          <circle className="ball ball06" r="15" cx="300" cy="1001"></circle>
          <circle className="ball ball07" r="15" cx="147" cy="1201"></circle>
        </svg>
      </div>
    </div>
  );
}

export default Timeline;