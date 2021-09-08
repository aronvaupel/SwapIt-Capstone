import React from 'react';
import DescriptionField from './DescriptionField';
import type { Story } from '@storybook/react';
import type { DescriptionFieldProps } from './DescriptionField';

export default {
  title: 'Component/DescriptionField',
  component: DescriptionField,
  argTypes: {},
};

const Template: Story<DescriptionFieldProps> = (args) => (
  <DescriptionField {...args} />
);

export const Descriptionfield = Template.bind({});
Descriptionfield.args = {
  placeholder: 'Describe item',
  label: 'Description',
};
