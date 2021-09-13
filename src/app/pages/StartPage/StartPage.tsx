import React from 'react';
import styles from './StartPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import SwapIcon from '../../components/assets/SwapIcon';
import Logo from '../../components/assets/Logo';
import LogInSignInLink from '../../components/LogIn-SignIn-Link/LogIn-SignIn-Link';

function StartPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <p>
          You have something you don't need.
          <br />
          Others have something they don't need.
          <br /> Now you can click
        </p>
        <div className={styles.iconWrapper}>
          <SwapIcon className={styles.swapIcon} />
        </div>
        <p>and</p>
        <Logo />
        <div className={styles.linkWrapper}>
          <LogInSignInLink url="/start" value="Get started" />
        </div>
      </main>
      <Nav activeLink="allInactive" />
    </div>
  );
}
export default StartPage;
