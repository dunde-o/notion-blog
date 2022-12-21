import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostCard from "./PostCard";

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
  data: {
    createTime: new Date(),
    updateTime: new Date(),
    coverImgUrl: "/assets/images/sample.jpeg",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageHead: {
      title: "테스트용 Title",
      description: "테스트용 상세설명 입니다. Test description.",
      category: "테스트용 카테고리",
      tag: ["태그1", "태그2", "태그3"],
    },
    pageLink: "/",
  },
};
