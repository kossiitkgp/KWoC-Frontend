import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { ThemeName } from "../data/layers";

export type { ThemeName } from "../data/layers";

type Ctx = { theme: ThemeName; toggle: () => void };
const ThemeCtx = createContext<Ctx>({ theme: "night", toggle: () => {} });
export const useTheme = () => useContext(ThemeCtx);

const read = (): ThemeName => {
  try {
    return localStorage.getItem("kwoc-theme") === "day" ? "day" : "night";
  } catch {
    return "night";
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>(read);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("kwoc-theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);
  return (
    <ThemeCtx.Provider
      value={{
        theme,
        toggle: () => setTheme((t) => (t === "night" ? "day" : "night")),
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}
