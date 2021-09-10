import React from 'react';
import ActionButton from './ActionButton';
import type { Story } from '@storybook/react';
import type { ActionButtonProps } from './ActionButton';

export default {
  title: 'Component/ActionButton',
  component: ActionButton,
};

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const ActionButtonSubmit = Template.bind({});
ActionButtonSubmit.args = {
  value: 'Submit',
  isActive: true,
};

export const ActionButtonUpload = Template.bind({});
ActionButtonUpload.args = {
  value: 'Upload photo',
  isActive: true,
};
