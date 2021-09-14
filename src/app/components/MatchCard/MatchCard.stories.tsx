import React from 'react';
import MatchCard from './MatchCard';
import type { Story } from '@storybook/react';
import type { MatchCardProps } from './MatchCard';

export default {
  title: 'Component/MatchCard',
  component: MatchCard,
};

const Template: Story<MatchCardProps> = (args) => <MatchCard {...args} />;

export const MatchCardProposal = Template.bind({});
MatchCardProposal.args = {
  imageSrcOwn: 'src/app/components/assets/1.jpg',
  imageSrcOther: 'src/app/components/assets/2.jpg',
  type: 'proposal',
};

export const MatchCardAccept = Template.bind({});
MatchCardAccept.args = {
  imageSrcOwn: 'src/app/components/assets/3.jpg',
  imageSrcOther: 'src/app/components/assets/4.jpg',
  type: 'accept',
};
