import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RouterButton from "./RouterButton";

export default {
  title: "Atoms/RouterButton",
  component: RouterButton,
} as ComponentMeta<typeof RouterButton>;

const Template: ComponentStory<typeof RouterButton> = (args) => (
  <RouterButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  path: "/",
  children: "button child",
};
