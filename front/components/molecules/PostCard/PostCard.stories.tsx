import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostCard from "./PostCard";
import { dummyNotionPages } from "@local/shared/dist/datas/notionPage";

export default {
  title: "Molecules/PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  path: "/",
  data: dummyNotionPages[5],
};

export const Detail = Template.bind({});
Detail.args = {
  path: "/",
  data: dummyNotionPages[5],
  type: "detail",
};
