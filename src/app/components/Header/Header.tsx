import React from 'react';
import styles from './Header.module.css';
import Logo from '../svg/Logo';

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
};

export default Header;
