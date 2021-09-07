import React from 'react';
import styles from './IconLink.module.css';

import AddIcon from '../assets/AddIcon';

import HandshakeIcon from '../assets/HandshakeIcon';
import HomeIcon from '../assets/HomeIcon';

export type IconLinkProps = {
  iconType: 'add' | 'handshake' | 'home';
  handleClick: () => void;
  isActive: boolean;
  href?: string;
};

const IconLink = ({
  isActive,
  iconType,
  handleClick,
}: IconLinkProps): JSX.Element => {
  const active = {
    fill: 'var(--clr-accent)',
    stroke: 'var(--clr-accent)',
  };

  const inactive = {
    fill: 'var(--clr-text-secondary',
    stroke: 'var(--clr-text-secondary)',
  };

  const iconStateMap = {
    add: <AddIcon {...(isActive ? active : inactive)} />,
    home: <HomeIcon {...(isActive ? active : inactive)} />,
    handshake: <HandshakeIcon {...(isActive ? active : inactive)} />,
  };

  return (
    <a className={styles.Link} onClick={handleClick}>
      {iconStateMap[iconType]}
    </a>
  );
};

export default IconLink;
