import React from 'react';
import styles from './LogIn-SignIn-Link.module.css';

export type LogInSignInLinkProps = {
  href: string;
  value: 'Log in' | 'Sign in';
};

const LogInSignInLink = ({
  href,
  value,
}: LogInSignInLinkProps): JSX.Element => {
  return (
    <div className={styles.LogInSignInLinkWrapper}>
      <a className={styles.LogInSignInLink} href={href}>
        {value}
      </a>
    </div>
  );
};

export default LogInSignInLink;
