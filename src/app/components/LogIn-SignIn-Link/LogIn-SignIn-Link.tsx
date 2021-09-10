import React from 'react';
import styles from './LogIn-SignIn-Link.module.css';
import { Link } from 'react-router-dom';

export type LogInSignInLinkProps = {
  url: string;
  value: 'Log in' | 'Sign in';
};

const LogInSignInLink = ({ value, url }: LogInSignInLinkProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Link to={url} className={styles.Link}>
        {value}
      </Link>
    </div>
  );
};

export default LogInSignInLink;
