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

  const invalidUsername = () => username.length < 3;
  const invalidPhonenumber = () => phoneNumber.length < 3;
  const invalidEmail = () => email.length < 3;
  const invalidPassword = () => password.length < 8;

  function handleSubmit() {
    console.log('Click');
  }

  const isDisabled =
    invalidUsername() ||
    invalidPhonenumber() ||
    invalidEmail() ||
    invalidPassword();

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
            isActive={!isDisabled}
          />
        </form>
      </main>
      <Nav />
    </div>
  );
}
export default SignInPage;
