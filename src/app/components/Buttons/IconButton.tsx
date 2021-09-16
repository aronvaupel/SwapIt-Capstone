import React from 'react';
import styles from './IconButton.module.css';
import SwapIcon from '../svg/SwapIcon';
import CallIcon from '../svg/CallIcon';
import MailIcon from '../svg/MailIcon';
import TrashbinIcon from '../svg/TrashbinIcon';

export type IconButtonProps = {
  iconType: 'swap' | 'call' | 'mail' | 'trashbin';
  onClick: () => void;
  isActive: boolean;
};

const IconButton = ({
  isActive,
  iconType,
  onClick,
}: IconButtonProps): JSX.Element => {
  const active = {
    fill:
      iconType !== 'mail' && iconType !== 'call'
        ? 'var(--clr-accent)'
        : 'var(--clr-high)',
    stroke: 'var(--clr-accent)',
  };

  const inactive = {
    fill: 'var(--clr-text-secondary',
    stroke: 'var(--clr-text-secondary)',
  };

  const iconStateMap = {
    swap: <SwapIcon {...(isActive ? active : inactive)} />,
    call: <CallIcon {...(isActive ? active : inactive)} />,
    trashbin: <TrashbinIcon {...(isActive ? active : inactive)} />,
    mail: <MailIcon {...(isActive ? active : inactive)} />,
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

export default IconButton;
