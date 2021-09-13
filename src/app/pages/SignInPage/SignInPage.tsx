import React from 'react';
import styles from './SignInPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import ActionButton from '../../components/ActionButton/ActionButton';

function SignInPage(): JSX.Element {
  const handleClick = () => {
    console.log('hello');
  };
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <form className={styles.form}>
          <Input
            placeholder="Enter username"
            label="Username"
            inputType="text"
          />
          <Input
            placeholder="Enter phone number"
            label="Phone number"
            inputType="text"
          />
          <Input placeholder="Enter email" label="Email" inputType="text" />
          <Input
            placeholder="Enter username"
            label="Username"
            inputType="password"
          />

          <ActionButton value="Submit" onClick={handleClick} />
        </form>
      </main>
      <Nav activeLink="allInactive" />
    </div>
  );
}
export default SignInPage;
