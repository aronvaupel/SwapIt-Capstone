import React from 'react';
import styles from './Counter.module.css';
import CheckedIcon from '../../../public/assets/CheckedIcon';

export type CounterProps = {
  counterType: '1' | '2' | '3' | '4' | '5' | '5+' | '?' | 'checked';
};

const Counter = ({ counterType }: CounterProps): JSX.Element => {
  return (
    <div className={styles.Counter}>
      {counterType !== 'checked' ? counterType : <CheckedIcon />}
    </div>
  );
};

export default Counter;
