import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import type { ReactElement } from "react";
import { playClick } from "../sfx";
import type { TimerState } from "./pomodoro";
import TeButton, { type TeButtonProps } from "../ui/te-button";

export type PlayPauseButtonProps = {
  timerState: TimerState;
  setTimerState: (timerState: TimerState) => void;
};

export function PlayPauseButton({
  timerState,
  setTimerState,
  ...rest
}: PlayPauseButtonProps & TeButtonProps): ReactElement {
  function onClick(timerState: TimerState): void {
    playClick();
    setTimerState(timerState);
  }

  switch (timerState) {
    case "Ready":
      return (
        <TeButton
          aria-label="start"
          onClick={() => onClick("Running")}
          {...rest}
        >
          <PlayIcon width="22" height="22" />
        </TeButton>
      );

    case "Running":
      return (
        <TeButton
          aria-label="pause"
          onClick={() => onClick("Paused")}
          {...rest}
        >
          <PauseIcon width="22" height="22" />
        </TeButton>
      );

    case "Paused":
      return (
        <TeButton
          aria-label="resume"
          onClick={() => onClick("Running")}
          {...rest}
        >
          <PlayIcon width="22" height="22" />
        </TeButton>
      );
  }
}
