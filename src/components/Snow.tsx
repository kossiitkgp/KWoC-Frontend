import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

type P = {
  x: number;
  y: number;
  z: number;
  r: number;
  s: number;
  a: number;
  phase: number;
  drift: number;
};
// Number of flakes on each snowy scene. Set to 0 to disable snowfall.
const SNOWFLAKE_COUNT = 90;
type Props = { paused: boolean };

export default function Snow({ paused }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const live = useRef({ paused, theme: "night" });
  const { theme } = useTheme();
  live.current = { paused, theme };

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const host = canvas.parentElement!;
    let w = 0,
      h = 0,
      last = 0,
      raf = 0;
    if (!ctx || SNOWFLAKE_COUNT <= 0) return;
    let parts: P[] = [];
    const make = (randomY = true): P => {
      const z = Math.random();
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -8,
        z,
        r: 0.65 + z * 2.45,
        s: 12 + z * 47,
        a: 0.26 + z * 0.59,
        phase: Math.random() * Math.PI * 2,
        drift: 3 + Math.random() * 10,
      };
    };
    const resize = () => {
      const r = host.getBoundingClientRect(),
        d = Math.min(devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * d);
      canvas.height = Math.round(h * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      parts = Array.from({ length: SNOWFLAKE_COUNT }, () => make());
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    const frame = (t: number) => {
      const dt = Math.min((t - last) / 1000 || 0, 0.04);
      last = t;
      ctx.clearRect(0, 0, w, h);
      const { paused: p0, theme: th } = live.current;
      for (let i = 0; i < parts.length; i++) {
        let p = parts[i];
        if (!p0) {
          p.y += p.s * dt;
          p.x += (p.drift + Math.sin(t * 0.00065 + p.phase) * 9) * dt;
          if (p.y > h + 8) {
            parts[i] = make(false);
            p = parts[i];
          }
          if (p.x > w + 8) p.x = -8;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          th === "night"
            ? `rgba(240,248,255,${p.a})`
            : `rgba(255,255,255,${Math.min(1, p.a + 0.18)})`;
        if (th === "day") {
          ctx.shadowBlur = 2;
          ctx.shadowColor = "rgba(66,113,139,.32)";
        } else {
          ctx.shadowBlur = p.z > 0.8 ? 3 : 0;
          ctx.shadowColor = "rgba(215,240,255,.4)";
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas id="snow" ref={ref} aria-hidden="true" />;
}
