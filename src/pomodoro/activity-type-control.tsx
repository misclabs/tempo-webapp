import type { ReactElement } from "react";
import { ToggleGroup } from "radix-ui";
import type { ActivityType } from "./pomodoro";
import { playClick } from "../sfx";

interface ActivityTypeControlProps {
  disabled?: boolean;
  value: ActivityType;
  onValueChanged: (value: ActivityType) => void;
}
export function ActivityTypeControl(
  props: ActivityTypeControlProps,
): ReactElement {
  return (
    <ToggleGroup.Root
      type="single"
      disabled={props.disabled}
      value={props.value}
      onValueChange={(value: ActivityType) => {
        playClick();
        props.onValueChanged(value);
      }}
    >
      <ToggleGroup.Item value="Work">Work</ToggleGroup.Item>
      <ToggleGroup.Item value="ShortRest">Short Rest</ToggleGroup.Item>
      <ToggleGroup.Item value="LongRest">Long Rest</ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
