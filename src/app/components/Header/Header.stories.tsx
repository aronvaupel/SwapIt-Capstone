import React from 'react';
import Header from './Header';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/Header',
  component: Header,
};

const Template: Story = (args) => <Header {...args} />;

export const HeaderSection = Template.bind({});
