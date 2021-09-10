import React from 'react';
import Nav from './Nav';
import type { Story } from '@storybook/react';
import type { NavProps } from './Nav';

export default {
  title: 'Component/Nav',
  component: Nav,
};

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const NavHome = Template.bind({});
NavHome.args = {
  activeLink: 'home',
};
export const NavAdd = Template.bind({});
NavAdd.args = {
  activeLink: 'add',
};
export const NavHandshake = Template.bind({});
NavHandshake.args = {
  activeLink: 'handshake',
};
