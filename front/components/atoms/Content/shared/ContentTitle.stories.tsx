import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ContentTitle from "./ContentTitle";

export default {
  title: "Atoms/Content/ContentTitle",
  component: ContentTitle,
} as ComponentMeta<typeof ContentTitle>;

const Template: ComponentStory<typeof ContentTitle> = (args) => (
  <ContentTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Content Title",
};
