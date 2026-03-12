import type { ReactElement } from "react";
import Button from "./ui/button";

export function About(): ReactElement {
  return (
    <>
      <h1>About</h1>
      <div>
        <Button>Primary</Button>
        <Button type="danger">Danger</Button>
      </div>
    </>
  );
}
