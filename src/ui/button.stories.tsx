import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import "../main.css";
import Button from "./button";

const meta = {
  title: "Controls/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Primary",
    type: "primary",
  },
};
export const PrimaryDisabled: Story = {
  args: {
    children: "Primary",
    type: "primary",
    disabled: true,
  },
};
export const Danger: Story = {
  args: {
    children: "Danger",
    type: "danger",
  },
};
export const DangerDisabled: Story = {
  args: {
    children: "Danger",
    type: "danger",
    disabled: true,
  },
};
