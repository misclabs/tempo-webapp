import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import "./main.css";
import { Layout } from "./layout.tsx";
import { About } from "./pages/about.tsx";
import { PomodoroTimer } from "./pomodoro/pomodoro-timer.tsx";
import { Bluescreen } from "./pages/bluescreen.tsx";
import { BuildInfo } from "./build-info.tsx";

window.addEventListener("vite:preloadError", (event) => {
  // see: https://vite.dev/guide/build#load-error-handling
  // should probably check for a new version; reload if there's a new version; report error otherwise
  console.log(event);
  window.location.reload();
});

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    {/* TODO(jw): <Theme accentColor="indigo" grayColor="slate"> */}
    <ErrorBoundary FallbackComponent={Bluescreen}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<PomodoroTimer />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <BuildInfo />
    </ErrorBoundary>
    {/* </Theme> */}
  </StrictMode>,
);
