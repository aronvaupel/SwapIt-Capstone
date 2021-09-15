import React from 'react';
import styles from './LogInPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useState } from 'react';

function LogInPage(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validUsername = () => username.length < 3;
  const validPassword = () => password.length < 8;

  const isDisabled = validUsername() || validPassword();

  const handleSubmit = () => {
    console.log('Click');
  };
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <form className={styles.form}>
          <div className={styles.input}>
            <Input
              placeholder="Enter username"
              label="Username"
              id="username"
              inputType="text"
              value={username}
              onChange={(value) => setUsername(value)}
            />
            <Input
              placeholder="Enter password"
              label="Password"
              id="password"
              inputType="password"
              value={password}
              onChange={(value) => setPassword(value)}
            />
          </div>
          <div className={styles.action}>
            <ActionButton
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              disabled={isDisabled}
              isActive={!isDisabled}
            />
          </div>
        </form>
      </main>
      <Nav />
    </div>
  );
}
export default LogInPage;
