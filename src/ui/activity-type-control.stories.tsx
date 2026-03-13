import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import "../main.css";
import ActivityTypeControl from "./activity-type-control";

const meta = {
  title: "Controls/ActivityTypeControl",
  component: ActivityTypeControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { setActivity: fn() },
} satisfies Meta<typeof ActivityTypeControl>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Work: Story = {
  args: {
    activity: "Work",
  },
};
export const WorkDisabled: Story = {
  args: {
    activity: "Work",
    disabled: true,
  },
};

export const ShortRest: Story = {
  args: {
    activity: "ShortRest",
  },
};
export const LongRest: Story = {
  args: {
    activity: "LongRest",
  },
};
