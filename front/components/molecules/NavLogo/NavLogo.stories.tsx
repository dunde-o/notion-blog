import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavLogo from './NavLogo';

export default {
  title: 'Molecules/NavLogo',
  component: NavLogo,
} as ComponentMeta<typeof NavLogo>;

const Template: ComponentStory<typeof NavLogo> = (args) => <NavLogo {...args} />;

export const Primary = Template.bind({});

export const DarkMode = Template.bind({});
DarkMode.args = {
  mode: 'dark',
};

export const LightMode = Template.bind({});
LightMode.args = {
  mode: 'light',
};
