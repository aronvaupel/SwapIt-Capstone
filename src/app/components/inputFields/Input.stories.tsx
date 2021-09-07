import React from 'react';
import Input from './Input';
import type { Story } from '@storybook/react';
import type { InputProps } from './Input';

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    fieldType: {
      options: ['small', 'large'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputSmall = Template.bind({});
InputSmall.args = {
  fieldType: 'small',
  placeholder: 'Enter username',
  label: 'Username',
};

export const InputLarge = Template.bind({});
InputLarge.args = {
  fieldType: 'large',
  placeholder: 'Describe item',
  label: 'Description',
};
