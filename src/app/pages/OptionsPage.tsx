import React from 'react';
import styles from './OptionsPage.module.css';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import LogInSignInLink from '../components/LogIn-SignIn-Link/LogIn-SignIn-Link';

function OptionsPage(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <div className={styles.linkWrapper}>
          <LogInSignInLink url="/signIn" value="Sign in" />
          <LogInSignInLink url="/LogIn" value="Log in" />
        </div>
      </main>
      <Nav />
    </div>
  );
}
export default OptionsPage;
