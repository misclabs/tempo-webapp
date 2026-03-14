import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import "../main.css";
import NotFoundPage from "./404";

const meta = {
  title: "Pages/404",
  component: NotFoundPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { setActivity: fn() },
} satisfies Meta<typeof NotFoundPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const NotFound: Story = {
  // args: {
  //   activity: "Work",
  // },
};
