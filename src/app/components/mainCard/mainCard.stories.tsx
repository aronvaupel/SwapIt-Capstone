import React from 'react';
import MainCard from './mainCard';
import type { Story } from '@storybook/react';
import type { mainCardProps } from './mainCard';

export default {
  title: 'Component/MainCard',
  component: MainCard,
  argTypes: {
    iconType: {
      options: ['lightPicture', 'darkPicture'],
    },
  },
};

const Template: Story<mainCardProps> = (args) => <MainCard {...args} />;

export const MainCardLight = Template.bind({});
MainCardLight.args = {
  imageSrc:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ratingValue: 1,
  ratingCondition: 3,
};

export const MainCardDark = Template.bind({});
MainCardDark.args = {
  imageSrc:
    'https://images.pexels.com/photos/2591990/pexels-photo-2591990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  ratingValue: 4,
  ratingCondition: 5,
};
