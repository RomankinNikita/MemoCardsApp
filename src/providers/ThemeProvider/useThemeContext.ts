import { App } from "konsta/react";
import { ComponentProps, createContext, useContext } from "react";
import { Theme } from "../../hooks/useLightDarkTheme";

type AppProps = ComponentProps<typeof App>;
export type OsTheme = AppProps["theme"];

type ThemeContext = {
  osTheme: OsTheme;
  setOsTheme: (osTheme: OsTheme) => void;
  theme: Theme;
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const initialValue: ThemeContext = {
  osTheme: "ios",
  setOsTheme: () => undefined,
  theme: "dark",
  toggleTheme: () => undefined,
  isDarkTheme: false,
};

export const ThemeContext = createContext<ThemeContext>(initialValue);

export default function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("use useThemeContext inside ThemeProvider");
    }
    return context;
  }