import React from 'react';
import Counter from './Counter';
import type { Story } from '@storybook/react';
import type { CounterProps } from './Counter';

export default {
  title: 'Component/Counter',
  component: Counter,
  argTypes: {
    counterType: {
      options: ['1', '2', '3', '4', '5', '5+', '?', 'checked'],
      control: { type: 'select' },
    },
  },
};

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Counter1 = Template.bind({});
Counter1.args = {
  counterType: '1',
};

export const Counter2 = Template.bind({});
Counter2.args = {
  counterType: '2',
};

export const Counter3 = Template.bind({});
Counter3.args = {
  counterType: '3',
};

export const Counter4 = Template.bind({});
Counter4.args = {
  counterType: '4',
};

export const Counter5 = Template.bind({});
Counter5.args = {
  counterType: '5',
};

export const Counter5plus = Template.bind({});
Counter5plus.args = {
  counterType: '5+',
};

export const CounterQuestion = Template.bind({});
CounterQuestion.args = {
  counterType: '?',
};

export const CounterChecked = Template.bind({});
CounterChecked.args = {
  counterType: 'checked',
};
