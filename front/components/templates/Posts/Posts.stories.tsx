import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Posts from "./Posts";

export default {
  title: "Templates/Posts",
  component: Posts,
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = (args) => <Posts {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
