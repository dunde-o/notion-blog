import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SourceInfoPageButton from "./SourceInfoPageButton";

export default {
  title: "Molecules/Modals/SourceInfoPageButton",
  component: SourceInfoPageButton,
} as ComponentMeta<typeof SourceInfoPageButton>;

const Template: ComponentStory<typeof SourceInfoPageButton> = (args) => (
  <SourceInfoPageButton {...args}>출처 보기</SourceInfoPageButton>
);

export const Primary = Template.bind({});
Primary.args = {};
