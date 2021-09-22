import React from 'react';
import styles from './AddPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Input from '../../components/inputFields/Input';
import RatingInput from '../../components/Rating/RatingInput';
import DescriptionField from '../../components/inputFields/DescriptionField';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddPage(): JSX.Element {
  const [itemName, setItemname] = useState('');
  const [valueInput, setValueInput] = useState(0);
  const [conditionInput, setConditionInput] = useState(0);
  const [description, setDescription] = useState('');
  const [itemSrc, setItemSrc] = useState('');
  const history = useHistory();

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
    setItemSrc(itemSrc);
  };

  async function handleSubmit() {
    const newItem = {
      itemName: itemName,
      valueInput: valueInput,
      conditionInput: conditionInput,
      description: description,
      itemSrc: itemSrc,
    };
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    history.push('/home');
    console.log(await response.json());
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <div className={styles.elements}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <Input
              label="What do you want to swap?"
              id="name"
              placeholder="Enter a name for your item"
              inputType="text"
              value={itemName}
              onChange={(itemName) => setItemname(itemName)}
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
              onChange={(description) => setDescription(description)}
            />
            <ActionButton
              value="Upload photo"
              type="button"
              onClick={handleClickPhoto}
              isActive={true}
            />
            <div className={styles.submit}>
              <ActionButton
                value="Submit"
                type="submit"
                disabled={isDisabled}
                isActive={!isDisabled}
              />
            </div>
          </form>
        </div>
      </main>
      <Nav activeLink="add" />
    </div>
  );
}

export default AddPage;
