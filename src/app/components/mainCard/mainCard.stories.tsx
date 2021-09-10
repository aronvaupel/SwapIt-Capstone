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
  imageSrc: 'src/app/components/assets/1.jpg',
  ratingValue: 1,
  ratingCondition: 3,
};

export const MainCardDark = Template.bind({});
MainCardDark.args = {
  imageSrc: 'src/app/components/assets/4.jpg',
  ratingValue: 4,
  ratingCondition: 5,
};
