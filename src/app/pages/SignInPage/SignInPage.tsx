import React from 'react';
import styles from './SignInPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignInPage(): JSX.Element {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const invalidUsername = () => username.length < 3;
  const invalidPhonenumber = () => phoneNumber.length < 3;
  const invalidEmail = () => email.length < 3;
  const invalidPassword = () => password.length < 8;

  async function handleSubmit() {
    const newUser = {
      username: username,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    history.push('/add');
    console.log(await response.json());
    alert('Done');
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
        <form
          className={styles.form}
          onSubmit={(event) => {
            handleSubmit();
            event.preventDefault();
          }}
        >
          <Input
            placeholder="Enter username"
            label="Username"
            inputType="text"
            id="username"
            value={username}
            onChange={(username) => setUsername(username)}
          />
          <Input
            placeholder="Enter phone number"
            label="Phone number"
            inputType="text"
            id="Phone"
            value={phoneNumber}
            onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
          />
          <Input
            placeholder="Enter email"
            label="Email"
            inputType="text"
            id="Email"
            value={email}
            onChange={(email) => setEmail(email)}
          />
          <Input
            placeholder="Enter password"
            label="Password"
            inputType="password"
            id="Password"
            value={password}
            onChange={(password) => setPassword(password)}
          />

          <ActionButton
            value="Submit"
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
