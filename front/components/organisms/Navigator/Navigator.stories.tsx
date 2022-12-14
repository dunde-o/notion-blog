import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navigator from './Navigator';

export default {
  title: 'Organisms/Navigator',
  component: Navigator,
} as ComponentMeta<typeof Navigator>;

const Template: ComponentStory<typeof Navigator> = (args) => <Navigator {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
