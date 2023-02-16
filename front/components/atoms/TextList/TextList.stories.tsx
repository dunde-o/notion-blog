import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextList from "./TextList";

export default {
  title: "Atoms/TextList",
  component: TextList,
} as ComponentMeta<typeof TextList>;

const Template: ComponentStory<typeof TextList> = (args) => (
  <TextList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  textList: {
    ["1번"]: { description: "1번 텍스트 " },
    ["2번"]: { description: "2번 텍스트 " },
  },
};

export const UseMarker = Template.bind({});
UseMarker.args = {
  textList: {
    ["1번"]: { description: "1번 텍스트 " },
    ["2번"]: { description: "2번 텍스트 " },
  },
  textOption: { marker: "‣" },
};

export const NoMarker = Template.bind({});
NoMarker.args = {
  textList: {
    ["1번"]: { description: "1번 텍스트 " },
    ["2번"]: { description: "2번 텍스트 " },
  },
  textOption: { marker: false },
};
