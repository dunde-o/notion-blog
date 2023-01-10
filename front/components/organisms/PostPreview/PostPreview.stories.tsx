import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostPreview from "./PostPreview";
import { dummyNotionPages } from "@local/shared/dist/datas/notionPage";

export default {
  title: "Organisms/PostPreview",
  component: PostPreview,
} as ComponentMeta<typeof PostPreview>;

const Template: ComponentStory<typeof PostPreview> = (args) => (
  <PostPreview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  postData: dummyNotionPages,
};

export const BlankData = Template.bind({});
