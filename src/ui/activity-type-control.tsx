import type { ReactElement } from "react";
import { ToggleGroup } from "radix-ui";
import type { ActivityType } from "../pomodoro/pomodoro";
// import { playClick } from "../sfx";

interface ActivityTypeControlProps {
  onValueChanged: (value: ActivityType) => void;
  value: ActivityType;
  disabled?: boolean;
}
export default function ActivityTypeControl({
  onValueChanged,
  disabled,
  ...rest
}: ActivityTypeControlProps): ReactElement {
  const rootStateClasses = disabled
    ? "bg-slate-300 text-slate-400 shadow-none"
    : "bg-blue-600 shadow-sm";
  const itemStateClasses = disabled
    ? "text-blue-50 data-[state=on]:bg-slate-200 data-[state=on]:text-slate-400"
    : "text-blue-50 data-[state=on]:bg-blue-500";
  const itemClassName = `${itemStateClasses} px-3 py-2 font-semibold rounded focus-visible:outline-2 focus-visible:outline-sky-300`;
  return (
    <ToggleGroup.Root
      {...rest}
      type="single"
      onValueChange={(value: ActivityType) => {
        // playClick();
        onValueChanged(value);
      }}
      disabled={disabled}
      aria-label="Activity type"
      className={`${rootStateClasses} inline-flex rounded shadow-slate-400`}
    >
      <ToggleGroup.Item
        value="Work"
        aria-label="Work"
        className={itemClassName}
      >
        Work
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="ShortRest"
        aria-label="Short rest"
        className={itemClassName}
      >
        Short rest
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="LongRest"
        aria-label="Long rest"
        className={itemClassName}
      >
        Long rest
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
