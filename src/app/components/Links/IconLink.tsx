import React from 'react';
import styles from './IconLink.module.css';
import AddIcon from '../svg/AddIcon';
import HandshakeIcon from '../svg/HandshakeIcon';
import HomeIcon from '../svg/HomeIcon';

export type IconLinkProps = {
  iconType: 'add' | 'handshake' | 'home';
  isActive: boolean;
  href?: string;
};

const IconLink = ({ isActive, iconType, href }: IconLinkProps): JSX.Element => {
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
    <div className={isActive ? styles.link : styles.linkInactive}>
      <a href={href}>{iconStateMap[iconType]}</a>
    </div>
  );
};

export default IconLink;
