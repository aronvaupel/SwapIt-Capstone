import React from 'react';
import ScrollIconButton from './ScrollIconButton';
import type { Story } from '@storybook/react';
import type { ScrollIconButtonProps } from './ScrollIconButton';

export default {
  title: 'Component/ScrollIconButton',
  component: ScrollIconButton,
  argTypes: {
    iconType: {
      options: ['next', 'previous'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<ScrollIconButtonProps> = (args) => (
  <ScrollIconButton {...args} />
);

export const NextIcon = Template.bind({});
NextIcon.args = {
  iconType: 'next',
  isActive: true,
};

export const PreviousIcon = Template.bind({});
PreviousIcon.args = {
  iconType: 'previous',
  isActive: true,
};
