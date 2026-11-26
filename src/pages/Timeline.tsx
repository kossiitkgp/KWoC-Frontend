import { useEffect, useRef } from "react";
import Button from "../components/Button";
import { ThemeButton } from "../components/Header";
import Scene from "../components/Scene";
import Snow from "../components/Snow";
import {
  cardVisibility,
  clamp,
  DUNES,
  layerPose,
  thanksVisibility,
} from "../data/journey";
import { milestones } from "../data/timeline";
import { getStrength, VOID_RANGE, VOID_START } from "../data/timelineConfig";
import "../styles/timeline-page.css";

/**
 * Scroll-driven flight over the dunes. Scroll progress p (0..1) becomes a camera distance
 * c = p x DUNES x strength; data/journey.ts turns c into a pose for every layer.
 */
export default function Timeline() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const thanksRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const voidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers: HTMLElement[] = Array.from(
      stageRef.current!.querySelectorAll<HTMLElement>(".layer"),
    );
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const strength = getStrength();
    let target = 0,
      cur = 0,
      raf = 0,
      last = performance.now();

    const readScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      target = max > 0 ? clamp(scrollY / max) : 0;
    };

    const render = (p: number) => {
      const c = p * DUNES * strength;
      const voidK = clamp((c - VOID_START) / VOID_RANGE);
      for (const el of layers) {
        const idx = Number(el.dataset.index);
        const pose = layerPose(idx, c);
        el.style.transform = pose.transform;
        el.style.visibility = pose.hidden ? "hidden" : "visible";
        const fade = idx === 2 ? 1 - clamp((pose.q - 0.3) / 0.7) : 1;
        el.style.opacity = idx <= 2 ? String((1 - voidK) * fade) : "1";
      }
      if (voidRef.current) voidRef.current.style.opacity = String(voidK);
      milestones.forEach((_, i) => {
        const el = cardRefs.current[i];
        if (!el) return;
        const k = cardVisibility(i, c);
        el.style.opacity = String(k);
        el.style.transform = `translate3d(0,${(1 - k) * 24}px,0)`;
        el.style.pointerEvents = k > 0.6 ? "auto" : "none";
      });
      if (hintRef.current)
        hintRef.current.style.opacity = String(1 - clamp(c / 0.15));
      if (thanksRef.current) {
        const tk = thanksVisibility(c);
        thanksRef.current.style.opacity = String(tk);
        thanksRef.current.style.transform = `translate3d(-50%, calc(-50% + ${(1 - tk) * 24}px), 0)`;
        thanksRef.current.style.pointerEvents = tk > 0.6 ? "auto" : "none";
      }
      if (barRef.current) barRef.current.style.transform = `scaleY(${p})`;
    };

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      cur = reduce ? target : cur + (target - cur) * (1 - Math.exp(-dt * 8));
      if (Math.abs(target - cur) < 0.00005) cur = target;
      render(cur);
      raf = requestAnimationFrame(loop);
    };

    window.scrollTo(0, 0);
    readScroll();
    addEventListener("scroll", readScroll, { passive: true });
    addEventListener("resize", readScroll);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", readScroll);
      removeEventListener("resize", readScroll);
    };
  }, []);

  return (
    <div className="tl">
      <div className="tl-fixed">
        <Scene ref={stageRef} />
        <div className="veil" />
        <Snow density={90} paused={false} />
        <div className="tl-void" ref={voidRef} aria-hidden="true" />

        <header className="tl-top">
          <Button variant="secondary" to="/">
            ← Back
          </Button>
          <ThemeButton />
        </header>

        <div className="tl-hint" ref={hintRef}>
          <span className="tl-kicker">
            <span className="tl-kicker-line" aria-hidden="true" />
            Timeline
          </span>
          <h1>
            Scroll to travel
            <br />
            <span>over the winter.</span>
          </h1>
          <p>Cross the dunes from the first listing to the final results.</p>
        </div>

        {milestones.map((m, i) => (
          <article
            className="tl-card"
            key={m.title}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <div className="tl-rail-top" aria-hidden="true" />
            <span className="tl-stage">{m.stage}</span>

            <div className="tl-rail-node" aria-hidden="true">
              <span className="tl-rail-seg" />
              <span className="tl-node" />
              <span className="tl-rail-seg" />
            </div>
            <h2>{m.title}</h2>

            <div className="tl-rail-bottom" aria-hidden="true" />
            <div className="tl-body">
              <div className="tl-date">{m.date}</div>
              <p>{m.text}</p>
            </div>
          </article>
        ))}

        <div className="tl-thanks" ref={thanksRef}>
          <h2>
            Thank <span>you.</span>
          </h2>
          <p>
            See you this winter — keep learning, building, and contributing to
            open source.
          </p>
          <Button variant="secondary" to="/">
            ← Back to Home
          </Button>
        </div>

        <div className="tl-progress" aria-hidden="true">
          <div ref={barRef} />
        </div>
      </div>
      <div className="tl-spacer" aria-hidden="true" />
      <div className="tl-curtain" aria-hidden="true" />
    </div>
  );
}
