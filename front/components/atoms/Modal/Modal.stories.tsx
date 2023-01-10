import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Atoms/Modal",
  component: Modal,
  args: {
    title: "Modal title",
    children: "Modal description",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Page = Template.bind({});
Page.args = {
  type: "page",
  onClose: () => console.log("close"),
};

export const Alert = Template.bind({});
Alert.args = {
  type: "alert",
  onClose: () => console.log("close"),
  onCheckClick: () => console.log("check"),
};

export const Check = Template.bind({});
Check.args = {
  type: "check",
  onClose: () => console.log("close"),
  onYesClick: () => console.log("yes"),
  onNoClick: () => console.log("no"),
};
