import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import type { ReactElement } from "react";
import { playClick } from "../sfx";
import type { TimerState } from "./pomodoro";
import Button from "../ui/button";

export type PlayPauseButtonProps = {
  timerState: TimerState;
  setTimerState: (timerState: TimerState) => void;
};

export function PlayPauseButton({
  timerState,
  setTimerState,
  ...rest
}: PlayPauseButtonProps): ReactElement {
  function onClick(timerState: TimerState): void {
    playClick();
    setTimerState(timerState);
  }

  switch (timerState) {
    case "Ready":
      return (
        <Button aria-label="start" onClick={() => onClick("Running")} {...rest}>
          <PlayIcon width="22" height="22" />
        </Button>
      );

    case "Running":
      return (
        <Button aria-label="pause" onClick={() => onClick("Paused")} {...rest}>
          <PauseIcon width="22" height="22" />
        </Button>
      );

    case "Paused":
      return (
        <Button
          aria-label="resume"
          onClick={() => onClick("Running")}
          {...rest}
        >
          <PlayIcon width="22" height="22" />
        </Button>
      );
  }
}
