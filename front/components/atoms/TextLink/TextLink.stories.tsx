import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextLink from "./TextLink";

export default {
  title: "Atoms/TextLink",
  component: TextLink,
  argTypes: {
    width: {
      control: "number",
    },
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => (
  <TextLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: "",
  text: "insert text",
  width: "auto",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  href: "",
  text: "insert text",
  width: 100,
};
