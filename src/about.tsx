import type { ReactElement } from "react";
import TeButton from "./ui/te-button";

export function About(): ReactElement {
  return (
    <>
      <h1>About</h1>
      <div>
        <TeButton>Solid</TeButton>
        <TeButton type="secondary">Secondary</TeButton>
        <TeButton type="danger">Danger</TeButton>
      </div>
    </>
  );
}
