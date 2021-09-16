import React from 'react';
import styles from './ScrollIconButton.module.css';
import NextIcon from '../../../public/assets/NextIcon';
import PreviousIcon from '../../../public/assets/PreviousIcon';

export type ScrollIconButtonProps = {
  iconType: 'next' | 'previous';
  onClick: () => void;
  isActive: boolean;
};

const ScrollIconButton = ({
  isActive,
  iconType,
  onClick,
}: ScrollIconButtonProps): JSX.Element => {
  const active = {
    fill: 'var(--clr-accent)',
    stroke: 'var(--clr-accent)',
  };

  const inactive = {
    fill: 'var(--clr-text-secondary',
    stroke: 'var(--clr-text-secondary)',
  };

  const iconStateMap = {
    next: <NextIcon {...(isActive ? active : inactive)} />,
    previous: <PreviousIcon {...(isActive ? active : inactive)} />,
  };

  return (
    <button
      className={isActive ? styles.button : styles.buttonInactive}
      onClick={onClick}
    >
      {iconStateMap[iconType]}
    </button>
  );
};

export default ScrollIconButton;
