import type { ThemeName } from "../components/ThemeContext";

const LAYER_NAMES = [
  "01-sky",
  "02-moon",
  "03-mountains",
  "04-dune-01-back-right",
  "05-dune-02-back-left",
  "06-trees-far-left",
  "07-trees-far-center",
  "08-trees-right-ridge",
  "09-trees-left-forest",
  "10-trees-middle-left",
  "11-trees-middle-right",
  "12-dune-03-middle-right",
  "13-cabin",
  "14-dune-04-middle-left",
  "15-dune-05-front-left",
  "16-dune-06-front-right",
  "17-trees-foreground-left",
  "18-trees-foreground-right",
] as const;

export function layerFiles(theme: ThemeName): string[] {
  return LAYER_NAMES.map((name) =>
    name === "02-moon" && theme === "day" ? "02-sun" : name,
  );
}

export function layerUrl(theme: ThemeName, file: string): string {
  return `${import.meta.env.BASE_URL}layers/${theme}/${file}.svg`;
}
