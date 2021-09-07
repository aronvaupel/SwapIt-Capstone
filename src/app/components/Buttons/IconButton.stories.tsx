import React from 'react';
import IconButton from './IconButton';
import type { Story } from '@storybook/react';
import type { IconButtonProps } from './IconButton';

export default {
  title: 'Component/IconButton',
  component: IconButton,
  argTypes: {
    iconType: {
      options: ['swap'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const SwapIcon = Template.bind({});
SwapIcon.args = {
  iconType: 'swap',
  isActive: true,
};
