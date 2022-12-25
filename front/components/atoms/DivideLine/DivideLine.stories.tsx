import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DivideLine from "./DivideLine";

export default {
  title: "Atoms/DivideLine",
  component: DivideLine,
} as ComponentMeta<typeof DivideLine>;

const Template: ComponentStory<typeof DivideLine> = (args) => (
  <DivideLine {...args} />
);

export const Primary = Template.bind({});
export const Vertical = Template.bind({});
Vertical.args = {
  direction: "vertical",
};
export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "horizontal",
};
