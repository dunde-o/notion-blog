import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SwitchScreen from "./SwitchScreen";

export default {
  title: "Organisms/SwitchScreen",
  component: SwitchScreen,
} as ComponentMeta<typeof SwitchScreen>;

const Template: ComponentStory<typeof SwitchScreen> = (args) => (
  <SwitchScreen {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
