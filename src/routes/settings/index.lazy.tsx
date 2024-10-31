import { Toggle, Segmented, SegmentedButton } from "konsta/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../../components/Layout/Layout";
import useThemeContext from "../../providers/ThemeProvider/useThemeContext";

export const Route = createLazyFileRoute("/settings/")({
  component: Settings,
});

function Settings() {
  const { setOsTheme, isDarkTheme, toggleTheme, osTheme } = useThemeContext();

  return (
    <Layout title="Settings">
      <Segmented strong>
        <SegmentedButton
          strong
          active={osTheme === "material"}
          onClick={() => setOsTheme("material")}
        >
          Material
        </SegmentedButton>
        <SegmentedButton
          strong
          active={osTheme === "ios"}
          onClick={() => setOsTheme("ios")}
        >
          IOS
        </SegmentedButton>
      </Segmented>

      <label className="flex items-center space-x-3 mt-4">
        <p className="text-lg">{isDarkTheme ? "Dark" : "Light"}</p>
        <Toggle onChange={toggleTheme} checked={isDarkTheme} />
      </label>
    </Layout>
  );
}
