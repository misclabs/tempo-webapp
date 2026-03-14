import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import "../main.css";
import Bluescreen from "./bluescreen";

const meta = {
  title: "Pages/Bluescreen",
  component: Bluescreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { resetErrorBoundary: fn() },
} satisfies Meta<typeof Bluescreen>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleBluescreen: Story = {
  args: {
    error: new Error("This is not a place of honor."),
  },
};
