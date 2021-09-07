import React from 'react';
import styles from './IconButton.module.css';
import SwapIcon from '../assets/SwapIcon';
import AddIcon from '../assets/AddIcon';
import CallIcon from '../assets/CallIcon';
import HandshakeIcon from '../assets/HandshakeIcon';
import HomeIcon from '../assets/HomeIcon';
import MailIcon from '../assets/MailIcon';
import NextIcon from '../assets/NextIcon';
import PreviousIcon from '../assets/PreviousIcon';
import TrashbinIcon from '../assets/TrashbinIcon';

export type IconButtonProps = {
  iconType:
    | 'swap'
    | 'add'
    | 'call'
    | 'handshake'
    | 'home'
    | 'mail'
    | 'next'
    | 'previous'
    | 'trashbin';
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
    add: <AddIcon {...(isActive ? active : inactive)} />,
    call: <CallIcon {...(isActive ? active : inactive)} />,
    home: <HomeIcon {...(isActive ? active : inactive)} />,
    next: <NextIcon {...(isActive ? active : inactive)} />,
    previous: <PreviousIcon {...(isActive ? active : inactive)} />,
    trashbin: <TrashbinIcon {...(isActive ? active : inactive)} />,
    handshake: <HandshakeIcon {...(isActive ? active : inactive)} />,
    mail: <MailIcon {...(isActive ? active : inactive)} />,
  };

  return (
    <button className={styles.button} onClick={onButtonClick}>
      {iconStateMap[iconType]}
    </button>
  );
};

export default IconButton;
