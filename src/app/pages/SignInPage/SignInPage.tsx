import React from 'react';
import styles from './SignInPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useState } from 'react';

function SignInPage(): JSX.Element {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validUsername = () => {
    username.length > 3 ? false : true;
  };

  const validPhonenumber = () => {
    phoneNumber.length > 3 ? false : true;
  };

  const validEmail = () => {
    email.length > 3 ? false : true;
  };

  const validPassword = () => {
    password.length > 8 ? false : true;
  };

  function handleSubmit() {
    console.log('hello');
  }

  const isDisabled =
    !validUsername || !validPhonenumber || !validEmail || !validPassword
      ? true
      : false;

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <form className={styles.form}>
          <Input
            placeholder="Enter username"
            label="Username"
            inputType="text"
            id="username"
            value={username}
            onChange={(value) => setUsername(value)}
          />
          <Input
            placeholder="Enter phone number"
            label="Phone number"
            inputType="text"
            id="Phone"
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value)}
          />
          <Input
            placeholder="Enter email"
            label="Email"
            inputType="text"
            id="Email"
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <Input
            placeholder="Enter password"
            label="Password"
            inputType="password"
            id="Password"
            value={password}
            onChange={(value) => setPassword(value)}
          />

          <ActionButton
            value="Submit"
            onClick={handleSubmit}
            type="submit"
            disabled={isDisabled}
          />
        </form>
      </main>
      <Nav />
    </div>
  );
}
export default SignInPage;
