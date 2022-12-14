import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavMenu from './NavMenu';

export default {
  title: 'Molecules/NavMenu',
  component: NavMenu,
} as ComponentMeta<typeof NavMenu>;

const Template: ComponentStory<typeof NavMenu> = (args) => <NavMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
