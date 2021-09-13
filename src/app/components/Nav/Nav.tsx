import React from 'react';
import IconLink from '../Links/IconLink';
import styles from './Nav.module.css';

export type NavProps = {
  activeLink: 'home' | 'add' | 'handshake';
};

const Nav = ({ activeLink }: NavProps): JSX.Element => {
  const active = {
    isActive: true,
  };

  const inactive = {
    isActive: false,
  };

  return (
    <div className={styles.nav}>
      <IconLink
        iconType="home"
        {...(activeLink === 'home' ? active : inactive)}
        href=""
      />
      <IconLink
        iconType="add"
        {...(activeLink === 'add' ? active : inactive)}
        href=""
      />
      <IconLink
        iconType="handshake"
        {...(activeLink === 'handshake' ? active : inactive)}
        href=""
      />
    </div>
  );
};

export default Nav;
