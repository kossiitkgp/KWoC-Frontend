import { useEffect, useMemo, useRef, useState } from "react";
import Snow from "../Snow";
import TimelineScene from "./TimelineScene";
import { KWOC_MILESTONES, getMilestoneCameraPositions } from "../../data/kwocTimeline";
import { getTravelStrength, VOID_RANGE, VOID_START } from "../../data/kwocTimelineConfig";
import { cardVisibility, clamp, DUNES, layerPose } from "../../data/winterJourney";
import "../../styles/Home/season-timeline.css";

/**
 * Homepage-embedded, scroll-driven winter journey based on the 2026 demo.
 * The section pins the landscape while the visitor scrolls through milestones.
 */
function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const hintRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const voidRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const milestonePositions = useMemo(
    () => getMilestoneCameraPositions(KWOC_MILESTONES),
    [],
  );

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const layers = Array.from(
      stage.querySelectorAll<HTMLElement>(".season-timeline__layer"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const strength = getTravelStrength();
    let target = 0;
    let current = 0;
    let frame = 0;
    let lastFrameTime = 0;
    let active = false;

    const render = (progress: number) => {
      const camera = progress * DUNES * strength;
      const voidProgress = clamp((camera - VOID_START) / VOID_RANGE);

      for (const layer of layers) {
        const index = Number(layer.dataset.index);
        const pose = layerPose(index, camera);
        layer.style.transform = pose.transform;
        layer.style.visibility = pose.hidden ? "hidden" : "visible";
        const mountainFade =
          index === 2 ? 1 - clamp((pose.q - 0.3) / 0.7) : 1;
        layer.style.opacity =
          index <= 2 ? String((1 - voidProgress) * mountainFade) : "1";
      }

      if (voidRef.current) {
        voidRef.current.style.opacity = String(voidProgress);
      }

      KWOC_MILESTONES.forEach((_, index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        const visibility = cardVisibility(index, camera, milestonePositions);
        card.style.opacity = String(visibility);
        card.style.transform = `translate3d(0,${(1 - visibility) * 24}px,0)`;
        card.style.pointerEvents = visibility > 0.6 ? "auto" : "none";
        card.setAttribute("aria-hidden", String(visibility <= 0.6));
      });

      if (hintRef.current) {
        hintRef.current.style.opacity = String(1 - clamp(camera / 0.25));
      }
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleY(${progress})`;
        progressRef.current.parentElement?.setAttribute(
          "aria-valuenow",
          String(Math.round(progress * 100)),
        );
      }
    };

    const animate = (now: number) => {
      frame = 0;
      const delta = Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;
      current = reduceMotion
        ? target
        : current + (target - current) * (1 - Math.exp(-delta * 8));
      if (Math.abs(target - current) < 0.00005) current = target;
      render(current);

      // Do not keep a permanent RAF alive while the user is idle.
      if (Math.abs(target - current) >= 0.00005) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const scheduleRender = () => {
      if (!active) return;
      if (reduceMotion) {
        current = target;
        render(current);
        return;
      }
      if (!frame) {
        lastFrameTime = performance.now();
        frame = window.requestAnimationFrame(animate);
      }
    };

    const readScroll = () => {
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const sectionProgress = -section.getBoundingClientRect().top / scrollableDistance;
      target = clamp(sectionProgress);
      scheduleRender();
    };

    const onResize = () => readScroll();
    const onScroll = () => readScroll();

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        setIsActive(active);
        if (active) {
          window.addEventListener("scroll", onScroll, { passive: true });
          window.addEventListener("resize", onResize);
          readScroll();
        } else {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onResize);
          if (frame) window.cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { rootMargin: "80px 0px" },
    );

    observer.observe(section);
    render(0);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [milestonePositions]);

  return (
    <section
      className="season-timeline"
      id="timeline"
      ref={sectionRef}
      aria-label="KWoC program timeline"
    >
      <div className="season-timeline__sticky">
        <TimelineScene ref={stageRef} />
        <div className="season-timeline__veil" aria-hidden="true" />
        <Snow paused={!isActive} />
        <div className="season-timeline__void" ref={voidRef} aria-hidden="true" />

        <div className="season-timeline__hint" ref={hintRef}>
          <span className="season-timeline__eyebrow">
            <span className="season-timeline__dot" /> KWoC timeline
          </span>
          <h2>
            Scroll to travel
            <br />
            <span>through the winter.</span>
          </h2>
          <p>
            Follow the milestones from the first project listings to the final results.
          </p>
          <span className="season-timeline__scroll-note">SCROLL TO EXPLORE ↓</span>
        </div>

        {KWOC_MILESTONES.map((milestone, index) => (
          <article
            className={`season-timeline__card${index % 2 === 1 ? " is-right" : ""}`}
            key={milestone.id}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            aria-label={`${milestone.label}: ${milestone.title}`}
            aria-hidden="true"
          >
            <span className="season-timeline__eyebrow">{milestone.label}</span>
            {milestone.date && (
              <time className="season-timeline__date">{milestone.date}</time>
            )}
            <h3>{milestone.title}</h3>
            <p>{milestone.text}</p>
          </article>
        ))}

        <div
          className="season-timeline__progress"
          role="progressbar"
          aria-label="Timeline scroll progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
        >
          <div ref={progressRef} />
        </div>
        <span className="season-timeline__counter" aria-hidden="true">
          {String(KWOC_MILESTONES.length).padStart(2, "0")} MILESTONES
        </span>
      </div>
    </section>
  );
}

export default Timeline;
