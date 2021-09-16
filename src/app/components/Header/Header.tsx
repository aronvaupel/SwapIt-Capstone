import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/Logo';

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
};

export default Header;
