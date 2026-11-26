import { layerFiles, layerUrl } from "../theme/layers";
import { useTheme, type ThemeName } from "./ThemeContext";

const THEMES: ThemeName[] = ["night", "day"];

/** Shared, decorative 2026 landscape. The app keeps one copy behind all routes. */
export default function SceneBackdrop() {
  const { theme, seasonPosition } = useTheme();

  return (
    <div
      className="site-background"
      data-season-position={seasonPosition.toFixed(3)}
      aria-hidden="true"
    >
      <div className="scene-stage">
        {THEMES.map((variant) => (
          <div
            className={`scene-theme${variant === theme ? " active" : ""}`}
            key={variant}
          >
            {layerFiles(variant).map((file, index) => (
              <img
                className="scene-layer"
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
}
