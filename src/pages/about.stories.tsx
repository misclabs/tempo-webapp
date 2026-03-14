import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import "../main.css";
import AboutPage from "./about";

const meta = {
  title: "Pages/About",
  component: AboutPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { setActivity: fn() },
} satisfies Meta<typeof AboutPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const About: Story = {
  // args: {
  //   activity: "Work",
  // },
};
