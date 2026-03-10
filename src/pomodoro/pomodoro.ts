export type TimerState = "Ready" | "Running" | "Paused";
export type ActivityType = "Work" | "ShortRest" | "LongRest";

export function getActivityDurationS(activityType: ActivityType): number {
  switch (activityType) {
    case "Work":
      return 60 * 60;
    case "ShortRest":
      return 60 * 5;
    case "LongRest":
      return 60 * 15;
  }
}

export type SetElapsedSDispatch = React.Dispatch<React.SetStateAction<number>>;

const secondsFormat = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

export function formatDurationS(durationS: number): string {
  const minutes = Math.floor(durationS / 60);
  const seconds = durationS % 60;

  return `${minutes}:${secondsFormat.format(seconds)}`;
}
