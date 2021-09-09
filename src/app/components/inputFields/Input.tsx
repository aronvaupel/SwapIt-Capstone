import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  placeholder: string;
  id: string;
  label: string;
};

const Input = ({ placeholder, id, label }: InputProps): JSX.Element => {
  return (
    <div className="wrapper">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        className={styles.inputSmall}
        required
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default Input;
