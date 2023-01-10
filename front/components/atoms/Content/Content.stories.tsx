import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Content from "./Content";

export default {
  title: "Atoms/Content",
  component: Content,
} as ComponentMeta<typeof Content>;

const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args}>
    <div>test1</div>
    <div>test2</div>
  </Content>
);

export const Primary = Template.bind({});
Primary.args = {};
