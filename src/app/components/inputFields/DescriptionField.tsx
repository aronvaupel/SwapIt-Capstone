import React from 'react';
import styles from './DescriptionField.module.css';

export type DescriptionFieldProps = {
  placeholder: string;
  id: string;
  label: string;
  value?: string;
  onChange: (value: string) => void;
};

const DescriptionField = ({
  placeholder,
  id,
  label,
  onChange,
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
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default DescriptionField;
