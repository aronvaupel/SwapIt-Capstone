import React from 'react';
import LogInSignInLink from './LogIn-SignIn-Link';
import type { Story } from '@storybook/react';
import type { LogInSignInLinkProps } from './LogIn-SignIn-Link';

export default {
  title: 'Component/LogIn-SignIn-Link',
  component: LogInSignInLink,
};

const Template: Story<LogInSignInLinkProps> = (args) => (
  <LogInSignInLink {...args} />
);

export const SignInLink = Template.bind({});
SignInLink.args = {
  value: 'Sign in',
};

export const LogInLink = Template.bind({});
LogInLink.args = {
  value: 'Log in',
};
