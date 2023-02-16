import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Profile from './Profile';

export default {
  title: 'Templates/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
