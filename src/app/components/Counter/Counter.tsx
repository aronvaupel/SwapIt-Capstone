import React from 'react';
import styles from './Counter.module.css';
import CheckedIcon from '../assets/CheckedIcon';

export type CounterProps = {
  counterType: '1' | '2' | '3' | '4' | '5' | '5+' | '?' | 'checked';
};

const Counter = ({ counterType }: CounterProps): JSX.Element => {
  const counterTypeMap = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    '5+': '5+',
    '?': '?',
    checked: <CheckedIcon />,
  };

  return <div className={styles.Counter}>{counterTypeMap[counterType]}</div>;
};

export default Counter;
