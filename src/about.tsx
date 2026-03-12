import type { ReactElement } from "react";
import Button from "./ui/button";

export function About(): ReactElement {
  return (
    <>
      <h1>About</h1>
      <div>
        <Button>Solid</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="danger">Danger</Button>
      </div>
    </>
  );
}
