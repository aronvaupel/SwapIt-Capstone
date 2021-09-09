import React from 'react';
import RatingInput from './RatingInput';
import type { Story } from '@storybook/react';
import type { RatingInputProps } from './RatingInput';

export default {
  title: 'Component/RatingInput',
  component: RatingInput,

  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<RatingInputProps> = (args) => <RatingInput {...args} />;

export const ConditionInput1 = Template.bind({});
ConditionInput1.args = {
  type: 'condition',
  value: 1,
  onValueClick: console.log,
};

export const ConditionInput2 = Template.bind({});
ConditionInput2.args = {
  type: 'condition',
  value: 2,
  onValueClick: console.log,
};

export const ConditionInput3 = Template.bind({});
ConditionInput3.args = {
  type: 'condition',
  value: 3,
  onValueClick: console.log,
};

export const ConditionInput4 = Template.bind({});
ConditionInput4.args = {
  type: 'condition',
  value: 4,
  onValueClick: console.log,
};

export const ConditionInput5 = Template.bind({});
ConditionInput5.args = {
  type: 'condition',
  value: 5,
  onValueClick: console.log,
};

export const ValueInput1 = Template.bind({});
ValueInput1.args = {
  type: 'value',
  value: 1,
  onValueClick: console.log,
};

export const ValueInput2 = Template.bind({});
ValueInput2.args = {
  type: 'value',
  value: 2,
  onValueClick: console.log,
};

export const ValueInput3 = Template.bind({});
ValueInput3.args = {
  type: 'value',
  value: 3,
  onValueClick: console.log,
};

export const ValueInput4 = Template.bind({});
ValueInput4.args = {
  type: 'value',
  value: 4,
  onValueClick: console.log,
};

export const ValueInput5 = Template.bind({});
ValueInput5.args = {
  type: 'value',
  value: 5,
  onValueClick: console.log,
};
