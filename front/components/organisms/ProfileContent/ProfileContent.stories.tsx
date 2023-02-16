import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileContent from './ProfileContent';

export default {
  title: 'Organisms/ProfileContent',
  component: ProfileContent,
} as ComponentMeta<typeof ProfileContent>;

const Template: ComponentStory<typeof ProfileContent> = (args) => <ProfileContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
