import React from 'react';
import styles from './AddPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import RatingInput from '../../components/Rating/RatingInput';
import DescriptionField from '../../components/inputFields/DescriptionField';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useState } from 'react';

function AddPage(): JSX.Element {
  const [itemName, setItemname] = useState('');
  const [valueInput, setValueInput] = useState(0);
  const [conditionInput, setConditionInput] = useState(0);
  const [description, setDescription] = useState('');

  const invalidItemName = () => itemName.length < 3;
  const invalidValueInput = () => valueInput <= 0;
  const invalidConditionInput = () => conditionInput <= 0;

  const isDisabled =
    invalidItemName() || invalidValueInput() || invalidConditionInput();

  const handleValueClick = (value: number) => {
    setValueInput(value);
  };

  const handleConditionClick = (value: number) => {
    setConditionInput(value);
  };

  const handleClickPhoto = () => {
    console.log('Photo');
  };
  const handleClickSubmit = () => {
    console.log('Submit');
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <div className={styles.elements}>
          <form>
            <Input
              label="What do you want to swap?"
              id="name"
              placeholder="Enter a name for your item"
              inputType="text"
              value={itemName}
              onChange={(value) => setItemname(value)}
            />
            <RatingInput
              type="value"
              value={valueInput}
              onValueClick={handleValueClick}
            />
            <RatingInput
              type="condition"
              value={conditionInput}
              onValueClick={handleConditionClick}
            />
            <DescriptionField
              label="Description"
              placeholder="Enter information about your item"
              id="description"
              value={description}
              onChange={(value) => setDescription(value)}
            />
            <ActionButton
              value="Upload photo"
              onClick={handleClickPhoto}
              isActive={true}
            />
            <div className={styles.submit}>
              <ActionButton
                value="Submit"
                onClick={handleClickSubmit}
                disabled={isDisabled}
                isActive={!isDisabled}
              />
            </div>
          </form>
        </div>
      </main>
      <Nav />
    </div>
  );
}
export default AddPage;
