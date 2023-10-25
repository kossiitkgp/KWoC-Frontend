import { useEffect } from 'react';
import scrollSvg from 'scroll-svg';
import TimelineCard from './TimelineCard';

function Timeline() {
  useEffect(() => {
    const path = document.querySelector("#timeline-path") as SVGPathElement;
    const svg = scrollSvg(path, {});

    return () => svg.remove();
  }, []);

  return (
    <>
      <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-36 lg:text-8xl">Timeline</h1>
      <div className="scale-75 h-full w-full overflow-hidden">
        <svg viewBox="0 0 316 189" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="white"/>
        <circle cx="2" cy="49.5" r="2" fill="white"/>
        <circle cx="2" cy="116" r="2" fill="white"/>
        <circle cx="314" cy="62" r="2" fill="white"/>
        <circle cx="314" cy="106" r="2" fill="white"/>
        <circle cx="2" cy="159" r="2" fill="white"/>
        <circle cx="314" cy="187" r="2" fill="white"/>
        <path id="timeline-path" d="M2 1V50.7059C2 53.4673 4.23858 55.7059 7 55.7059H309C311.761 55.7059 314 57.9445 314 60.7059V105.412C314 108.173 311.761 110.412 309 110.412H7.00001C4.23858 110.412 2 112.65 2 115.412V160.118C2 162.879 4.23858 165.118 7 165.118H309C311.761 165.118 314 167.356 314 170.118V187" stroke="white"/>
        <path d="M2 1V50.7059C2 53.4673 4.23858 55.7059 7 55.7059H309C311.761 55.7059 314 57.9445 314 60.7059V105.412C314 108.173 311.761 110.412 309 110.412H7.00001C4.23858 110.412 2 112.65 2 115.412V160.118C2 162.879 4.23858 165.118 7 165.118H309C311.761 165.118 314 167.356 314 170.118V187" stroke="white" strokeOpacity={0.2}/>
        </svg>
      </div>
      <div>
        <TimelineCard date="10 december" info="KWOC registerations begin" right={true}/>
      </div>
    </>
  );
}

export default Timeline;