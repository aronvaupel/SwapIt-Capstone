import React from 'react';
import SwapIcon from '../assets/SwapIcon';

export type IconButtonProps = {
  iconType: 'swap';
  onButtonClick: () => void;
  isActive: boolean;
};

const IconButton = ({
  isActive,
  iconType,
  onButtonClick,
}: IconButtonProps): JSX.Element => {
  const active = {
    fill: 'var(--clr-accent)',
    stroke: 'var(--clr-accent)',
  };

  const inactive = {
    fill: 'var(--clr-text-secondary',
    stroke: 'var(--clr-text-secondary)',
  };

  const iconStateMap = {
    swap: <SwapIcon {...(isActive ? active : inactive)} />,
  };

  return <a onClick={onButtonClick}>{iconStateMap[iconType]}</a>;
};

export default IconButton;
