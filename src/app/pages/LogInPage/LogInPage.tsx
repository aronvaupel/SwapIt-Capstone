import React from 'react';
import styles from './LogInPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import ActionButton from '../../components/ActionButton/ActionButton';

function LogInPage(): JSX.Element {
  const handleClick = () => {
    console.log('Click');
  };
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <div className={styles.input}>
          <Input placeholder="Enter username" label="Username" id="username" />
          <Input placeholder="Enter password" label="Password" id="password" />
        </div>
        <div className={styles.action}>
          <ActionButton type="submit" value="Submit" onClick={handleClick} />
        </div>
      </main>
      <Nav />
    </div>
  );
}
export default LogInPage;
