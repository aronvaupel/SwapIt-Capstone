import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  placeholder: string;
  id?: string;
  label: string;
  inputType: 'text' | 'password';
  onChange: (value: string) => void;
  value: string;
};

const Input = ({
  placeholder,
  id,
  label,
  inputType,
  value,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <div className="wrapper">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
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
