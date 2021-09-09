import React from 'react';
import styles from './LogIn-SignIn-Link.module.css';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

export type LogInSignInLinkProps = {
  url: string;
  value: 'Log in' | 'Sign in';
};

const LogInSignInLink = ({ value, url }: LogInSignInLinkProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Route>
        <Switch>
          <Link to={url} className={styles.Link}>
            {value}
          </Link>
        </Switch>
      </Route>
    </div>
  );
};

export default LogInSignInLink;
