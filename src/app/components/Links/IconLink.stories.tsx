import React from 'react';
import IconLink from './IconLink';
import type { Story } from '@storybook/react';
import type { IconLinkProps } from './IconLink';

export default {
  title: 'Component/IconLink',
  component: IconLink,
  argTypes: {
    iconType: {
      options: ['add', 'home', 'handshake'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<IconLinkProps> = (args) => <IconLink {...args} />;

export const AddIcon = Template.bind({});
AddIcon.args = {
  iconType: 'add',
  isActive: true,
};

export const HandshakeIcon = Template.bind({});
HandshakeIcon.args = {
  iconType: 'handshake',
  isActive: true,
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconType: 'home',
  isActive: true,
};
