import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Switch from "./Switch";
import { IMG_PROPS } from "@common/constants/image";

export default {
  title: "Atoms/Switch",
  component: Switch,
  args: {
    defaultAction: () => alert("change default!"),
    otherAction: () => alert("change other!"),
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "switch",
};

export const StringIcon = Template.bind({});
StringIcon.args = {
  defaultSwitchProps: {
    state: true,
    icon: { default: "☀︎", other: "☾" },
  },
};

export const ImageIcon = Template.bind({});
ImageIcon.args = {
  defaultSwitchProps: {
    state: true,
    icon: { default: IMG_PROPS.LOADING, other: IMG_PROPS.LOADING },
  },
};
