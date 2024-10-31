import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import ThemeProvider from "../providers/ThemeProvider/ThemeProvider";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <ThemeProvider>
      <Outlet />
      {import.meta.env.VITE_ROUTER_DEVTOOLS === '1' && <TanStackRouterDevtools />}
    </ThemeProvider>
  );
}
