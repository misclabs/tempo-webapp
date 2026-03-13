import type { ReactElement } from "react";
import { Outlet } from "react-router";
import Header from "./ui/header";

export function Layout(): ReactElement {
  return (
    <>
      <Header />
      {/* <header className="flex items-end justify-between border-b px-4 py-2">
        <h1 className="text-xl font-semibold">Tempo</h1>
        <nav className="flex gap-2">
          <Link to="/">Timer</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
      <main> */}
      <Outlet />
      {/* </main> */}
    </>
  );
}
