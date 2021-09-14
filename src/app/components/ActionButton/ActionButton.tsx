import React from 'react';
import styles from './ActionButton.module.css';

export type ActionButtonProps = {
  value: 'Submit' | 'Upload photo';
  onClick?: () => void;
  type?: 'submit' | 'button';
  isActive?: boolean;
  disabled?: boolean;
};

const ActionButton = ({
  value,
  onClick,
  type = 'button',
  isActive,
  disabled,
}: ActionButtonProps): JSX.Element => {
  return (
    <div className={styles.ActionButtonWrapper}>
      <button
        disabled={disabled}
        className={`${styles.button} ${isActive && styles.active}`}
        onClick={onClick}
        type={type}
      >
        {value}
      </button>
    </div>
  );
};

export default ActionButton;
