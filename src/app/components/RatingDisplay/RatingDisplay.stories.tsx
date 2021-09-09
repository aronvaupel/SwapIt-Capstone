import React from 'react';
import RatingDisplay from './RatingDisplay';
import type { Story } from '@storybook/react';
import type { RatingDisplayProps } from './RatingDisplay';

export default {
  title: 'Component/RatingDisplay',
  component: RatingDisplay,

  parameters: {
    layout: 'fullscreen',
  },
};

const Template: Story<RatingDisplayProps> = (args) => (
  <RatingDisplay {...args} />
);

export const ConditionDisplay1 = Template.bind({});
ConditionDisplay1.args = {
  type: 'condition',
  value: 1,
};

export const ConditionDisplay2 = Template.bind({});
ConditionDisplay2.args = {
  type: 'condition',
  value: 2,
};

export const ConditionDisplay3 = Template.bind({});
ConditionDisplay3.args = {
  type: 'condition',
  value: 3,
};

export const ConditionDisplay4 = Template.bind({});
ConditionDisplay4.args = {
  type: 'condition',
  value: 4,
};

export const ConditionDisplay5 = Template.bind({});
ConditionDisplay5.args = {
  type: 'condition',
  value: 5,
};

export const ValueDisplay1 = Template.bind({});
ValueDisplay1.args = {
  type: 'value',
  value: 1,
};

export const ValueDisplay2 = Template.bind({});
ValueDisplay2.args = {
  type: 'value',
  value: 2,
};

export const ValueDisplay3 = Template.bind({});
ValueDisplay3.args = {
  type: 'value',
  value: 3,
};

export const ValueDisplay4 = Template.bind({});
ValueDisplay4.args = {
  type: 'value',
  value: 4,
};

export const ValueDisplay5 = Template.bind({});
ValueDisplay5.args = {
  type: 'value',
  value: 5,
};
