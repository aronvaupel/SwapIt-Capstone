import React from 'react';
import styles from './IconButton.module.css';
import SwapIcon from '../assets/SwapIcon';
import CallIcon from '../assets/CallIcon';
import MailIcon from '../assets/MailIcon';
import NextIcon from '../assets/NextIcon';
import PreviousIcon from '../assets/PreviousIcon';
import TrashbinIcon from '../assets/TrashbinIcon';

export type IconButtonProps = {
  iconType: 'swap' | 'call' | 'mail' | 'next' | 'previous' | 'trashbin';
  handleClick: () => void;
  isActive: boolean;
};

const IconButton = ({
  isActive,
  iconType,
  handleClick,
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
    call: <CallIcon {...(isActive ? active : inactive)} />,
    next: <NextIcon {...(isActive ? active : inactive)} />,
    previous: <PreviousIcon {...(isActive ? active : inactive)} />,
    trashbin: <TrashbinIcon {...(isActive ? active : inactive)} />,
    mail: <MailIcon {...(isActive ? active : inactive)} />,
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {iconStateMap[iconType]}
    </button>
  );
};

export default IconButton;
