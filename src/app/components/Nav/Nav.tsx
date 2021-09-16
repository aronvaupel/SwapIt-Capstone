import React from 'react';
import IconLink from '../Links/IconLink';
import styles from './Nav.module.css';

export type NavProps = {
  activeLink?: 'home' | 'add' | 'handshake';
};

const Nav = ({ activeLink }: NavProps): JSX.Element => {
  return (
    <div className={styles.nav}>
      <IconLink iconType="home" isActive={activeLink !== 'home'} href="/home" />
      <IconLink iconType="add" isActive={activeLink !== 'add'} href="/add" />
      <IconLink
        iconType="handshake"
        isActive={activeLink !== 'handshake'}
        href="/proposals"
      />
    </div>
  );
};

export default Nav;
