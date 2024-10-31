import {
  HomeIcon,
  AcademicCapIcon,
  CogIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { Icon, Tabbar, TabbarLink } from "konsta/react";
import { useRouter } from "@tanstack/react-router";

export default function Tabs() {
  const { history } = useRouter();
  const currentPath = history.location.pathname;

  return (
    <Tabbar labels icons className="left-0 bottom-0 fixed">
      <TabbarLink
        active={currentPath === "/"}
        icon={
          <Icon
            ios={<HomeIcon className="w-7 h-7" />}
            material={<HomeIcon className="w-6 h-6" />}
          />
        }
        label="Home"
        onClick={() => history.push("/")}
      />
      <TabbarLink
        active={currentPath === "/cards"}
        icon={
          <Icon
            ios={<AcademicCapIcon className="w-7 h-7" />}
            material={<AcademicCapIcon className="w-6 h-6" />}
          />
        }
        label="Learn"
        onClick={() => history.push("/cards")}
      />
      <TabbarLink
        active={currentPath === "/settings"}
        icon={
          <Icon
            ios={<CogIcon className="w-7 h-7" />}
            material={<Cog6ToothIcon className="w-6 h-6" />}
          />
        }
        label="Settings"
        onClick={() => history.push("/settings")}
      />
    </Tabbar>
  );
}
