import React from 'react';
import styles from './DescriptionField.module.css';

export type DescriptionFieldProps = {
  placeholder: string;
  id: string;
  label: string;
};

const DescriptionField = ({
  placeholder,
  id,
  label,
}: DescriptionFieldProps): JSX.Element => {
  return (
    <div className="wrapper">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        className={styles.DescriptionField}
        required
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

export default DescriptionField;
