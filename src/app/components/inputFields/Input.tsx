import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  fieldType: 'small' | 'large';
  placeholder: string;
  id: string;
  label: string;
};

const Input = ({
  fieldType,
  placeholder,
  id,
  label,
}: InputProps): JSX.Element => {
  return (
    <div className="wrapper">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        className={
          fieldType === 'small' ? styles.inputSmall : styles.inputLarge
        }
        required
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default Input;
