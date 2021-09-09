import React from 'react';
import styles from './RatingInput.module.css';
import ConditionIcon from '../assets/ConditionIcon';
import ValueIcon from '../assets/ValueIcon';

export type RatingInputProps = {
  type: 'value' | 'condition';
  value: 1 | 2 | 3 | 4 | 5;
  onValueClick: (value: string) => void;
};

const RatingInput = ({
  value,
  type,
  onValueClick,
}: RatingInputProps): JSX.Element => {
  return (
    <div className="ratingWrapper">
      <div className={styles.headlineWrapper}>
        {type === 'value' ? <ValueIcon /> : <ConditionIcon />}
        <p className="headline">{type === 'value' ? 'Value' : 'Condition'}</p>
      </div>

      <div className={styles.ratingBox}>
        <div className={styles.rating}>
          <label>
            {type === 'value' ? '0-50€' : 'needs repair'}
            <input
              className={styles.ratingInput}
              type="radio"
              name={type === 'value' ? 'value' : 'condition'}
              checked={value === 1}
              onChange={() => onValueClick('1')}
            />

            <div
              className={`${styles.indicator} ${
                value >= 1 ? styles.low : styles.neutral
              }`}
            ></div>
          </label>
        </div>

        <div className={styles.rating}>
          <label>
            {type === 'value' ? '50-100€' : 'very used'}
            <input
              className={styles.rating}
              type="radio"
              name={type === 'value' ? 'value' : 'condition'}
              checked={value === 2}
              onChange={() => onValueClick('2')}
            />
            <div
              className={`${styles.indicator} ${
                value >= 2 ? styles.low : styles.neutral
              }`}
            ></div>
          </label>
        </div>

        <div className={styles.rating}>
          <label>
            {type === 'value' ? '100-250€' : 'used'}
            <input
              className={styles.rating}
              type="radio"
              name={type === 'value' ? 'value' : 'condition'}
              checked={value === 3}
              onChange={() => onValueClick('3')}
            />
            <div
              className={`${styles.indicator} ${
                value >= 3 ? styles.medium : styles.neutral
              }`}
            ></div>
          </label>
        </div>

        <div className={styles.rating}>
          <label>
            {type === 'value' ? '250-500€' : 'good as new'}
            <input
              className={styles.rating}
              type="radio"
              name={type === 'value' ? 'value' : 'condition'}
              checked={value === 4}
              onChange={() => onValueClick('4')}
            />
            <div
              className={`${styles.indicator} ${
                value >= 4 ? styles.high : styles.neutral
              }`}
            ></div>
          </label>
        </div>

        <div className={styles.rating}>
          <label>
            {type === 'value' ? 'over 500€' : 'new'}
            <input
              className={styles.rating}
              type="radio"
              name={type === 'value' ? 'value' : 'condition'}
              checked={value === 5}
              onChange={() => onValueClick('5')}
            />
            <div
              className={`${styles.indicator} ${
                value == 5 ? styles.high : styles.neutral
              }`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RatingInput;
