import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostList from "./PostList";
import { dummyNotionPages } from "@local/shared/dist/datas/notionPage";

export default {
  title: "Organisms/PostList",
  component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = (args) => (
  <PostList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  postData: dummyNotionPages,
};

export const Blank = Template.bind({});
Blank.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
