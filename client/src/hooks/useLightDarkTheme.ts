import { useCallback, useEffect, useState } from "react";
import { ValueOf } from "../utils/types.t";

export const THEME_NAMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = ValueOf<typeof THEME_NAMES>;

export default function useLightDarkTheme(
  initialTheme: Theme = THEME_NAMES.LIGHT
) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (!html) return;
    html.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
