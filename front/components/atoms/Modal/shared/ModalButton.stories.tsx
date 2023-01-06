import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalButton from "./ModalButton";

export default {
  title: "Atoms/Modal/ModalButton",
  component: ModalButton,
} as ComponentMeta<typeof ModalButton>;

const Template: ComponentStory<typeof ModalButton> = (args) => (
  <ModalButton {...args}>press button</ModalButton>
);

const defaultModalProps = {
  title: "Modal button title",
  children: "Modal button description",
};

export const Page = Template.bind({});
Page.args = {
  modalProps: {
    ...defaultModalProps,
    type: "page",
    onClose: () => console.log("close"),
  },
};

export const Alert = Template.bind({});
Alert.args = {
  modalProps: {
    ...defaultModalProps,
    type: "alert",
    onClose: () => console.log("close"),
    onCheckClick: () => console.log("check"),
  },
};

export const Check = Template.bind({});
Check.args = {
  modalProps: {
    ...defaultModalProps,
    type: "check",
    onClose: () => console.log("close"),
    onYesClick: () => console.log("yes"),
    onNoClick: () => console.log("no"),
  },
};
