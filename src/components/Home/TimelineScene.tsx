import { forwardRef } from "react";
import { layerFiles, layerUrl } from "../../theme/layers";
import { useTheme, type ThemeName } from "../ThemeContext";

const THEMES: readonly ThemeName[] = ["night", "day"];

/** Isolated copy of the layered scene so the timeline can animate without moving the site backdrop. */
const TimelineScene = forwardRef<HTMLDivElement>(function TimelineScene(_, ref) {
  const { theme } = useTheme();

  return (
    <div className="season-timeline__scene" aria-hidden="true">
      <div className="season-timeline__stage" ref={ref}>
        {THEMES.map((variant) => (
          <div
            className={`season-timeline__theme${variant === theme ? " is-active" : ""}`}
            key={variant}
          >
            {layerFiles(variant).map((file, index) => (
              <img
                className="season-timeline__layer"
                data-index={index}
                key={`${variant}-${file}`}
                src={layerUrl(variant, file)}
                alt=""
                draggable={false}
                decoding="async"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default TimelineScene;
