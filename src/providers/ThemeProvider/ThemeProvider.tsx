import { App } from "konsta/react";
import {
  PropsWithChildren,
  useState,
} from "react";
import useLightDarkTheme, {
  THEME_NAMES,
} from "../../hooks/useLightDarkTheme";
import { OsTheme, ThemeContext } from "./useThemeContext";



export default function ThemeProvider({ children }: PropsWithChildren) {
  const [osTheme, setOsTheme] = useState<OsTheme>("ios");
  const { theme, toggleTheme } = useLightDarkTheme();
  const isDarkTheme = theme === THEME_NAMES.DARK;

  return (
    <ThemeContext.Provider value={{ osTheme, setOsTheme, theme, toggleTheme, isDarkTheme }}>
      <App theme={osTheme} dark={isDarkTheme}>
        {children}
      </App>
    </ThemeContext.Provider>
  );
}
