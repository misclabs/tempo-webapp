import type { ReactElement } from "react";
import { Outlet, Link } from "react-router";

export function Layout(): ReactElement {
  return (
    <>
      <header>
        <h1>Tempo Pomodoro 0.1</h1>
        <nav>
          <Link to="/">Timer</Link> |<Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
