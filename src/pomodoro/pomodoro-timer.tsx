import { useState, type ReactElement } from "react";
import { StopIcon } from "@heroicons/react/24/solid";
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
import TeButton from "../ui/button";

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
    <div className="flex justify-center">
      <div className="mt-32 flex max-w-96 flex-col items-stretch rounded-lg border border-gray-700 bg-gray-800">
        <div className="border-b border-gray-700 p-3">
          <h1 className="text-center">Timer</h1>
        </div>
        <div className="flex flex-col items-center gap-6 p-6">
          <ActivityTypeControl
            disabled={timerState !== "Ready"}
            activity={activityType}
            setActivity={(value: ActivityType) => {
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
            <TeButton
              disabled={timerState === "Ready"}
              aria-label="stop"
              onClick={() => {
                playClick();
                setTimerState("Ready");
                setElapsedS(0);
              }}
            >
              <StopIcon width="1.375rem" height="1.375rem" />
            </TeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
