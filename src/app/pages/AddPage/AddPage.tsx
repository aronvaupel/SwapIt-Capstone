import React from 'react';
import styles from './AddPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import RatingInput from '../../components/Rating/RatingInput';
import DescriptionField from '../../components/inputFields/DescriptionField';
import ActionButton from '../../components/ActionButton/ActionButton';

function AddPage(): JSX.Element {
  const handleValueClick = () => {
    console.log('Value');
  };

  const handleClickPhoto = () => {
    console.log('Photo');
  };
  const handleClickSubmit = () => {
    console.log('Submit');
  };

  const valueInput = 1;

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <div className={styles.elements}>
          <Input
            label="What do you want to swap?"
            id="name"
            placeholder="Enter a name for your item"
          />
          <RatingInput
            type="value"
            value={valueInput}
            onValueClick={handleValueClick}
          />
          <RatingInput
            type="condition"
            value={valueInput}
            onValueClick={handleValueClick}
          />
          <DescriptionField
            label="Description"
            placeholder="Enter information about your item"
            id="description"
          />
          <ActionButton value="Upload photo" onClick={handleClickPhoto} />
          <div className={styles.submit}>
            <ActionButton value="Submit" onClick={handleClickSubmit} />
          </div>
        </div>
      </main>
      <Nav />
    </div>
  );
}
export default AddPage;
