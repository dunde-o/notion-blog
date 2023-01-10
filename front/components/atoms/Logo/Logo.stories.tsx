import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.args = {
  mode: 'dark',
};

export const LightMode = Template.bind({});
LightMode.args = {
  mode: 'light',
};
