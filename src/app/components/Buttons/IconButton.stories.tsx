import React from 'react';
import IconButton from './IconButton';
import type { Story } from '@storybook/react';
import type { IconButtonProps } from './IconButton';

export default {
  title: 'Component/IconButton',
  component: IconButton,
  argTypes: {
    iconType: {
      options: ['swap', 'call', 'mail', 'next', 'previous', 'trashbin'],
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

export const CallIcon = Template.bind({});
CallIcon.args = {
  iconType: 'call',
  isActive: true,
};

export const MailIcon = Template.bind({});
MailIcon.args = {
  iconType: 'mail',
  isActive: true,
};

export const TrashbinIcon = Template.bind({});
TrashbinIcon.args = {
  iconType: 'trashbin',
  isActive: true,
};
