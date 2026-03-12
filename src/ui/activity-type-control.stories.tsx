import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import "../main.css";
import PlayPauseButton from "./play-pause-button";

const meta = {
  title: "Controls/PlayPauseButton",
  component: PlayPauseButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { setIsPlaying: fn() },
} satisfies Meta<typeof PlayPauseButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Paused: Story = {
  args: {
    isPlaying: false,
  },
};
export const PausedDisabled: Story = {
  args: {
    isPlaying: false,
    disabled: true,
  },
};
export const Playing: Story = {
  args: {
    isPlaying: true,
  },
};
export const PlayingDisabled: Story = {
  args: {
    isPlaying: true,
    disabled: true,
  },
};
