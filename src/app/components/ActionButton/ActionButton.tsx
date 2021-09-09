import React from 'react';
import styles from './ActionButton.module.css';

export type ActionButtonProps = {
  value: 'Submit' | 'Upload photo';
  onClick: () => void;
  type: 'submit' | 'button' | 'reset' | undefined;
  isActive?: boolean;
};

const ActionButton = ({
  value,
  onClick,
  type,
  isActive,
}: ActionButtonProps): JSX.Element => {
  return (
    <div className={styles.ActionButtonWrapper}>
      <button
        className={isActive ? styles.ActionButton : styles.ActionButtonInactive}
        onClick={onClick}
        type={type}
      >
        {value}
      </button>
    </div>
  );
};

export default ActionButton;
