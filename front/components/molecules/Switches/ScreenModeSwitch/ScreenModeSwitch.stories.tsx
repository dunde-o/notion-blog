import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ScreenModeSwitch from "./ScreenModeSwitch";

export default {
  title: "Molecules/Switches/ScreenModeSwitch",
  component: ScreenModeSwitch,
} as ComponentMeta<typeof ScreenModeSwitch>;

const Template: ComponentStory<typeof ScreenModeSwitch> = (args) => (
  <ScreenModeSwitch {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
