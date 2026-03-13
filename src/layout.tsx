import type { ReactElement } from "react";
import { Outlet } from "react-router";
import Header from "./ui/header";

export function Layout(): ReactElement {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
