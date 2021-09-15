import React from 'react';
import styles from './RatingDisplay.module.css';
import ConditionIcon from '../assets/ConditionIcon';
import ValueIcon from '../assets/ValueIcon';

export type RatingDisplayProps = {
  type: 'value' | 'condition';
  value: number;
};

const RatingDisplay = ({ value, type }: RatingDisplayProps): JSX.Element => {
  return (
    <div className={styles.ratingDisplayWrapper}>
      <div className={styles.icon}>
        {type === 'value' ? <ValueIcon /> : <ConditionIcon />}
      </div>

      <div
        className={`${styles.indicator} ${
          value >= 5 ? styles.high : styles.neutral
        }`}
      ></div>

      <div
        className={`${styles.indicator} ${
          value >= 4 ? styles.high : styles.neutral
        }`}
      ></div>

      <div
        className={`${styles.indicator} ${
          value >= 3 ? styles.medium : styles.neutral
        }`}
      ></div>

      <div
        className={`${styles.indicator} ${
          value >= 2 ? styles.low : styles.neutral
        }`}
      ></div>

      <div
        className={`${styles.indicator} ${
          value >= 1 ? styles.low : styles.neutral
        }`}
      ></div>
    </div>
  );
};

export default RatingDisplay;
