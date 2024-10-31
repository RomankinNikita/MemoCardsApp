import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter, createMemoryHistory } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import "./index.css";

const memoryHistory = createMemoryHistory({
  initialEntries: ['/'],
})

const router = createRouter({ routeTree, history: memoryHistory });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
