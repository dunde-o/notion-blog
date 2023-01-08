import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Main from "./Main";
import { dummyNotionPages } from "@local/shared/dist/datas/notionPage";

export default {
  title: "Templates/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bannerMessage: "banner message",
  postData: dummyNotionPages,
};
