import { useState, type ReactElement } from "react";
import { StopIcon } from "@radix-ui/react-icons";
import { playClick, playAlarm } from "../sfx";
import {
  type TimerState,
  type ActivityType,
  getActivityDurationS,
  formatDurationS,
} from "./pomodoro";
import PlayPauseButton from "../ui/play-pause-button";
import ActivityTypeControl from "../ui/activity-type-control";
import { useActivityTimerEffect } from "./activity-timer";
import Button from "../ui/button";

export function PomodoroTimer(): ReactElement {
  const [timerState, setTimerState] = useState("Ready" as TimerState);
  const [targetDurationS, setTargetDurationS] = useState(60 * 60);
  const [elapsedS, setElapsedS] = useState(0);
  const [activityType, setActivityType] = useState("Work" as ActivityType);

  useActivityTimerEffect(
    timerState,
    targetDurationS,
    elapsedS,
    setElapsedS,
    (event) => {
      console.log(event);
      if (event.id === "DurationCompleted") {
        playAlarm();
      }
    },
  );

  function onSetIsPlaying(desiredIsPlaying: boolean) {
    if (desiredIsPlaying) {
      setTimerState("Running");
    } else {
      if (timerState === "Running") {
        setTimerState("Paused");
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <ActivityTypeControl
        disabled={timerState !== "Ready"}
        value={activityType}
        onValueChanged={(value: ActivityType) => {
          setActivityType(value);
          setTargetDurationS(getActivityDurationS(value));
        }}
      />
      <div className="flex items-end justify-center gap-5">
        <span
          className="text-5xl font-medium"
          // align="center"
          style={{
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatDurationS(elapsedS)}
        </span>
        <span className="text-xl font-light">
          {/* TODO(jw): text align="center"> */}/{" "}
          {formatDurationS(targetDurationS)}
        </span>
      </div>
      <div className="space-x-3">
        <PlayPauseButton
          isPlaying={timerState === "Running"}
          setIsPlaying={onSetIsPlaying}
        />
        <Button
          disabled={timerState === "Ready"}
          aria-label="stop"
          onClick={() => {
            playClick();
            setTimerState("Ready");
            setElapsedS(0);
          }}
        >
          <StopIcon width="1.375rem" height="1.375rem" />
        </Button>
      </div>
    </div>
  );
}
