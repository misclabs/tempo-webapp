import { useState, type ReactElement } from "react";
import { StopIcon } from "@radix-ui/react-icons";
import { playClick, playAlarm } from "../sfx";
import {
  type TimerState,
  type ActivityType,
  getActivityDurationS,
  formatDurationS,
} from "./pomodoro";
import { PlayPauseButton } from "./play-pause-button";
import { ActivityTypeControl } from "./activity-type-control";
import { useActivityTimerEffect } from "./activity-timer";
import TeButton from "../ui/te-button";

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

  return (
    <div>
      {/* TODO(jw) direction="column" gap="5"> */}
      <ActivityTypeControl
        disabled={timerState !== "Ready"}
        value={activityType}
        onValueChanged={(value: ActivityType) => {
          setActivityType(value);
          setTargetDurationS(getActivityDurationS(value));
        }}
      />
      <div>
        {/* TODO(jw) flex gap="5" justify="center" align="end"> */}
        <p
          // align="center"
          // size="9"
          // weight="medium"
          style={{
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {formatDurationS(elapsedS)}
        </p>
        <p>
          {/* TODO(jw): text align="center" size="5" weight="light"> */}/{" "}
          {formatDurationS(targetDurationS)}
        </p>
      </div>
      <div className="space-x-2">
        {/* TODO(jw) flex justify="center" align="end" gap="5"> */}
        <PlayPauseButton
          timerState={timerState}
          setTimerState={setTimerState}
        />
        <TeButton
          disabled={timerState === "Ready"}
          // variant="soft"
          // size="4"
          aria-label="stop"
          onClick={() => {
            playClick();
            setTimerState("Ready");
            setElapsedS(0);
          }}
        >
          <StopIcon width="22" height="22" />
        </TeButton>
      </div>
    </div>
  );
}
