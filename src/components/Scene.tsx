import { forwardRef } from "react";
import { layerFiles, layerUrl, type ThemeName } from "../data/layers";
import { useTheme } from "./ThemeContext";

const themes: ThemeName[] = ["night", "day"];

/** Layered vector landscape. Every <img.layer> carries data-index (0 = sky ... 17 = nearest trees). */
const Scene = forwardRef<HTMLDivElement>(function Scene(_, ref) {
  const { theme } = useTheme();
  return (
    <div className="scene" aria-hidden="true">
      <div className="stage" ref={ref}>
        {themes.map((t) => (
          <div key={t} className={"theme" + (t === theme ? " active" : "")}>
            {layerFiles(t).map((f, i) => (
              <img
                key={f}
                className="layer"
                data-index={i}
                src={layerUrl(t, f)}
                alt=""
                draggable={false}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Scene;
