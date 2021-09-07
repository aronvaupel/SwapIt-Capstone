import React from 'react';
import IconButton from './IconButton';
import type { Story } from '@storybook/react';
import type { IconButtonProps } from './IconButton';

export default {
  title: 'Component/IconButton',
  component: IconButton,
  argTypes: {
    iconType: {
      options: [
        'swap',
        'add',
        'call',
        'mail',
        'next',
        'previous',
        'home',
        'trashbin',
        'handshake',
      ],
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

export const AddIcon = Template.bind({});
AddIcon.args = {
  iconType: 'add',
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

export const HandshakeIcon = Template.bind({});
HandshakeIcon.args = {
  iconType: 'handshake',
  isActive: true,
};

export const NextIcon = Template.bind({});
NextIcon.args = {
  iconType: 'next',
  isActive: true,
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconType: 'home',
  isActive: true,
};

export const PreviousIcon = Template.bind({});
PreviousIcon.args = {
  iconType: 'previous',
  isActive: true,
};
