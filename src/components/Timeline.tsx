import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
gsap.defaults({ease: "none", duration: 2});

function Timeline() {
  useEffect(() => {
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
      .to(".dot1", {}, 0.10)
      .to(".dot2", {}, 0.25)
      .to(".dot3", {}, 0.38)
      .to(".dot4", {}, 0.53)
      .to(".dot5", {}, 0.67)
      .to(".dot6", {}, 0.81)
      .to(".dot7", {}, 0.93)

    const main = gsap.timeline({defaults: {duration: 1},
      scrollTrigger: {
        trigger: "#timeline-svg",
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
    <div className=" mb-60">
      <h1 className="text-zinc-300 text-center  mb-24 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl lg:mb-36">TIMELINE</h1>
      <div className="flex justify-center mb-1/10">
        <svg id="timeline-svg" width="410" height="1760" viewBox="0 0 392 1760" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path d="M39 35L382 35" stroke="#808080" stroke-width="2"/>
        <path d="M3.50012 278H338.5" stroke="#808080" stroke-width="2"/>
        <path d="M58.5001 521H381.5" stroke="#808080" stroke-width="2"/>
        <path d="M58.5001 764H381.5" stroke="#808080" stroke-width="2"/>
        <path d="M58.5001 1493H381.5" stroke="#808080" stroke-width="2"/>
        <path d="M58.5001 1736H381.5" stroke="#808080" stroke-width="2"/>
        <path d="M58.5001 1250H381.5" stroke="#808080" stroke-width="2"/>
        <path d="M58.5001 1007H381.5" stroke="#808080" stroke-width="2"/>

        <TheLine d="M39.5 34.5 C340.333 188.333 403.5 260.5 286.5 334 C115.03 441.718 56.9995 485.5 56.9995 518.5 C56.9995 639 608 716.5 267 842 C171 877.331 -74.3463 984.362 160 1107.5 C435 1252 493.162 1227.01 137 1412 C-53 1510.69 110 1576 380.5 1734" />

        <TimelineDot id={0} cx={39.5} cy={22.5} r={22.5} visible={true} />
        <TimelineDot id={1} cx={339.5} cy={277.5} r={7.5} />
        <TimelineDot id={2} cx={57.5001} cy={520.5} r={7.5} />
        <TimelineDot id={3} cx={378.5} cy={763.5} r={7.5} />
        <TimelineDot id={4} cx={62.5001} cy={1007.5} r={7.5} />
        <TimelineDot id={5} cx={384.5} cy={1249.5} r={7.5} />
        <TimelineDot id={6} cx={54.5} cy={1492.5} r={7.5} />
        <TimelineDot id={7} cx={380.5} cy={1734.5} r={7.5} />

        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="171.476" y="27.1558">8 November 2023</tspan></text>
        <text fill="white" font-family="Roboto" font-size="15" letter-spacing="0em"><tspan x="192.193" y="56.127">Mentor Registrations Begins</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="156" y="999.156">16 December 2023</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="271" y="1025.29">Mid Evaluations </tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="175" y="513.156">2 December 2023</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="271" y="538.293">Mid Evaluations </tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="0" y="266.156">15 November 2023</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="200" y="1486.16">7 January 2024</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="199" y="1512.29">Final Submission Deadline</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="58" y="1242.16">31December 2023</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="58" y="1268.29">Student and Mentor Registrations </tspan><tspan x="58" y="1289.29">Close</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="58" y="1728.16">21 January 2024</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="58" y="1755.29">Results</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="4" y="298.293">Student Registration Begins </tspan></text>
        <text fill="white" font-family="Cantarell" font-size="25" font-weight="500" letter-spacing="0em"><tspan x="56" y="756.156">9 December 2023</tspan></text>
        <text fill="white" font-family="Cantarell" font-size="15" font-weight="500" letter-spacing="0em"><tspan x="56" y="782.293">Student and Mentor Registrations </tspan><tspan x="56" y="803.293">Close</tspan></text>
        </svg>
      </div>
    </div>
  );
}

function TimelineDot({id, cx, cy, r, visible}: {id: number, cx: number, cy: number, r: number, visible?: boolean}) {
  return <circle className={`dot${id}`} visibility={visible ? undefined : 'hidden'} cx={cx} cy={cy} r={r} fill="white"/>
}

function TheLine({d}: {d: string}) {
  return <>
    <path d={d} stroke="#808080" stroke-width="10" stroke-linecap="round" />
    <path className="theLine" d={d} stroke="white" stroke-width="10" stroke-linecap="round" />
  </>
}

export default Timeline;