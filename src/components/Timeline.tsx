import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import EVENTS from "../data/timeline.json";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);
gsap.defaults({ease: "none", duration: 2});

type Coordinate = [number, number];

const DOT_LOCATIONS = [
  [32.5, 28.5],
  [339.5, 277.5],
  [57.5, 520.5],
  [378.5, 763.5],
  [62.5001, 1007.5],
  [384.5, 1249.5],
  [54.5, 1492.5],
  [380.5, 1734.5]
]

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
      .to("#tl-dot1", {}, 0.10)
      .to("#tl-dot2", {}, 0.25)
      .to("#tl-dot3", {}, 0.38)
      .to("#tl-dot4", {}, 0.53)
      .to("#tl-dot5", {}, 0.67)
      .to("#tl-dot6", {}, 0.81)
      .to("#tl-dot7", {}, 0.93)

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

          {
            EVENTS.map((event, i) => (
              <TimelineEvent
                date={event.date}
                event={event.event}
                y_level={DOT_LOCATIONS[i][1]}
                x_range={[
                  i % 2 == 0 ? DOT_LOCATIONS[i][0] : 0,
                  i % 2 == 0 ? 382 : DOT_LOCATIONS[i][0]
                ]}
                alignRight={i % 2 == 0}
              />
            ))
          }

          <TheLine d="M39.5 34.5 C340.333 188.333 403.5 260.5 286.5 334 C115.03 441.718 56.9995 485.5 56.9995 518.5 C56.9995 639 608 716.5 267 842 C171 877.331 -74.3463 984.362 160 1107.5 C435 1252 493.162 1227.01 137 1412 C-53 1510.69 110 1576 380.5 1734" />

          {DOT_LOCATIONS.map(([x, y], i) =>
            <TimelineDot id={i} cx={x} cy={y} r={i == 0 ? 15 : 7.5} visible={i == 0} />
          )}
        </svg>
      </div>
    </div>
  );
}

function TimelineEvent({date, event, y_level, x_range, alignRight}: {date: string, event: string, y_level: number, x_range: Coordinate, alignRight?: boolean}) {
  const text_x = alignRight ? x_range[1] : x_range[0];

  return <>
    <path d={`M ${x_range[0]} ${y_level} H ${x_range[1]}`} stroke="#808080" stroke-width="2"/>

    <text x={text_x} y={y_level} fill="white" font-family="Cantarell" font-weight="500" letter-spacing="0em" textAnchor={alignRight ? "end" : "start"}>
      <tspan font-size="25" dy={-10} x={text_x}>{date}</tspan>
      <tspan font-size="15" dy={30} x={text_x}>{event}</tspan>
    </text>
  </>
}

function TimelineDot({id, cx, cy, r, visible}: {id: number, cx: number, cy: number, r: number, visible?: boolean}) {
  return <circle id={`tl-dot${id}`} visibility={visible ? undefined : 'hidden'} cx={cx} cy={cy} r={r} fill="white"/>
}

function TheLine({d}: {d: string}) {
  return <>
    <path d={d} stroke="#808080" stroke-width="10" stroke-linecap="round" />
    <path className="theLine" d={d} stroke="white" stroke-width="10" stroke-linecap="round" />
  </>
}

export default Timeline;