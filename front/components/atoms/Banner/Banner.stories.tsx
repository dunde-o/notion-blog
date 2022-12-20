import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "./Banner";

export default {
  title: "Atoms/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: "Dunde's notion blog",
};
