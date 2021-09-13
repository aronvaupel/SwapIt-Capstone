import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  placeholder: string;
  id?: string;
  label: string;
  inputType: 'text' | 'password';
};

const Input = ({
  placeholder,
  id,
  label,
  inputType,
}: InputProps): JSX.Element => {
  return (
    <div className="wrapper">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={inputType}
        className={styles.inputSmall}
        required
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default Input;
