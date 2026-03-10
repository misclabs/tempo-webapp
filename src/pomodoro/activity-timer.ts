import { useEffect } from "react";
import type { TimerState, SetElapsedSDispatch } from "./pomodoro";

// Number of milliseconds to start the timer at to make the timer feel more responsive.
const AdvanceTimerMs = 600;

type DurationCompletedEvent = {
  id: "DurationCompleted";
  targetDurationS: number;
};

type TimerEvent = DurationCompletedEvent;

export function useActivityTimerEffect(
  timerState: TimerState,
  targetDurationS: number,
  startingElapsedS: number,
  setElapsedS: SetElapsedSDispatch,
  onTimerEvent: (event: TimerEvent) => void,
): void {
  // Timer effect to count down when timer is active.
  useEffect(() => {
    if (timerState !== "Running") return;

    // Timestamp for last time component state elapsedSec was updated
    let lastUpdateToElapsedMs = Date.now() - AdvanceTimerMs;
    let elapsedS = startingElapsedS;
    let timeoutId = setTimeout(update, 0);
    function update() {
      const now = Date.now();
      const deltaMs = now - lastUpdateToElapsedMs;
      const deltaSec = Math.floor(deltaMs / 1000);
      if (deltaSec > 0) {
        elapsedS = elapsedS + deltaSec;
        // setElapsedS((prevElapsedS) => prevElapsedS + deltaSec);
        if (elapsedS === targetDurationS) {
          onTimerEvent({
            id: "DurationCompleted",
            targetDurationS,
          });
        }
        setElapsedS(elapsedS);
        lastUpdateToElapsedMs = now - (deltaMs % 1000);
      }

      timeoutId = setTimeout(update, 1000 - (deltaMs % 1000));
    }

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerState]);
}
