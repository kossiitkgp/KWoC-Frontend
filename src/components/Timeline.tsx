import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
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

    const linePath = document.querySelector(".theLine") as SVGPathElement;
    const len = linePath.getTotalLength();
    linePath.style.strokeDasharray = len + " " + len;
    linePath.style.strokeDashoffset = len.toString();
    
    const pulses = gsap.timeline({
      defaults: {
        duration: 0.5, 
        autoAlpha: 1, 
        fill: "white",
        scale: 2,
        transformOrigin: 'center', 
        ease: "elastic(1.5, 1)"
      }})
      .to(".ball02", {}, 0.08) 
      .to(".ball03", {}, 0.25)
      .to(".ball04", {}, 0.40)
      .to(".ball05", {}, 0.58)
      .to(".ball06", {}, 0.75)
      .to(".ball07", {}, 0.9)
        
    const main = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top 200",
        end: "bottom",
      }})
    .to(".theLine", {strokeDashoffset: 0}, 0)
    .add(pulses, 0);
    
    return () => {
      main.kill();
      pulses.kill();
    }
  }, []);

  return (
    <>
      <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl lg:mb-36">TIMELINE</h1>
      <div className="flex justify-center mb-1/10">
        <svg className="md:scale-110 lg:scale-125 mt-36" id="svg" width="900" height="1579" viewBox="0 0 403 1579" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Frame 1">

            <path d="M9.99976 30C313.333 183.333 416.5 341.5 286.5 391.5C97.4998 464.192 63.4998 480.5 63.4998 513.5C63.4998 634 516.526 745.129 358.5 808C265.5 845 -46.4881 953.224 112.5 1047C260 1134 662 1227.5 73 1486" stroke="gray" stroke-width="10" stroke-linecap="round"/>
            <path className="theLine" d="M9.99976 30C313.333 183.333 416.5 341.5 286.5 391.5C97.4998 464.192 63.4998 480.5 63.4998 513.5C63.4998 634 516.526 745.129 358.5 808C265.5 845 -46.4881 953.224 112.5 1047C260 1134 662 1227.5 73 1486" stroke="white" stroke-width="10" stroke-linecap="round"/>

            <path className="Line-1" d="M10 29.5H388" stroke="gray" stroke-width="2"/>
            <path className="Line-2" d="M10 273H324" stroke="gray" stroke-width="2"/>
            <path className="Line-3" d="M65 516L388 516" stroke="gray" stroke-width="2"/>
            <path className="Line-4" d="M65 759L388 759" stroke="gray" stroke-width="2"/>
            <path className="Line-5" d="M65 1002L388 1002" stroke="gray" stroke-width="2"/>
            <path className="Line-6" d="M65 1245L388 1245" stroke="gray" stroke-width="2"/>
            <path className="Line-7" d="M71 1488L394 1488" stroke="gray" stroke-width="2"/>
            
            <circle className="ball01" cx="13" cy="30" r="16" fill="white"/>
            <circle visibility={'hidden'} className="ball02" cx="326" cy="273.5" r="8" fill="gray"/>
            <circle visibility={'hidden'} className="ball03" cx="65" cy="517" r="8" fill="gray"/>
            <circle visibility={'hidden'} className="ball04" cx="384" cy="760" r="8" fill="gray"/>
            <circle visibility={'hidden'} className="ball05" cx="70" cy="1003" r="8" fill="gray"/>
            <circle visibility={'hidden'} className="ball06" cx="383" cy="1246" r="8" fill="gray"/>
            <circle visibility={'hidden'} className="ball07" cx="71" cy="1489" r="8" fill="gray"/>
            
            <text className="text1" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="162.878" y="24.65">25 November 2023</tspan></text>
            <text className="subtext1" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="180.85" y="47.69">Registrations for Students </tspan><tspan x="209.399" y="66.69">and Projects Begin</tspan></text>
            
            <text className="text5" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="161.021" y="995.65">20 December 2023</tspan></text>
            <text className="subtext5" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="221.972" y="1018.69">Mid Evaluations</tspan></text>
            
            <text className="text3" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="166.588" y="510.65">12 December 2023</tspan></text>
            <text className="subtext3" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="180.919" y="533.69">End of Project Registration</tspan></text>
            
            <text className="text2" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="10" y="267.65">6 December 2023</tspan></text>
            <text className="subtext2" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="45.6025" y="287.69">Coding Period Starts</tspan></text>
            
            <text className="text4" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="65" y="754.65">17 December 2023</tspan></text>
            <text className="subtext4" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="73.979" y="775.69">End of Student Registration</tspan></text>
            
            <text className="text7" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="206.427" y="1482.65">8 January 2024</tspan></text>
            <text className="subtext7" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="215.698" y="1505.69">Deadline to Submit End </tspan><tspan x="254.905" y="1524.69">Evals Report </tspan></text>
            
            <text className="text6" fill="white" font-family="Space Grotesk" font-size="25" letter-spacing="0em"><tspan x="65" y="1237.65">4 January 2024</tspan></text>
            <text className="subtext6" fill="white" font-family="Space Grotesk" font-size="15" letter-spacing="0em"><tspan x="87.1348" y="1263.69">Coding Period Ends 
            </tspan><tspan x="67.3667" y="1282.69">but we encourage you to </tspan><tspan x="93.6826" y="1301.69">keep contributing</tspan></text>
          </g>
        </svg>
      </div>
    </>
  );
}

export default Timeline;