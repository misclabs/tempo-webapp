import { expect, test } from "vitest";
import {
  formatDurationS,
  getActivityDurationS,
  type ActivityType,
} from "./pomodoro";

test.each([
  ["Work", 60 * 60],
  ["ShortRest", 60 * 5],
  ["LongRest", 60 * 15],
])(
  "getActivityDurationS(%s) maps to correct %i s.",
  (activityType, expected) => {
    expect(getActivityDurationS(activityType as ActivityType)).toBe(expected);
  },
);

test.each([
  [0, "0:00"],
  [5, "0:05"],
  [10, "0:10"],
  [60, "1:00"],
  [60 * 10, "10:00"],
  [60 * 100, "100:00"],
])("formatDurationS(%i) outputs %s", (durationS, expected) => {
  expect(formatDurationS(durationS)).toBe(expected);
});
