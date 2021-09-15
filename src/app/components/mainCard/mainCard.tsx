import React from 'react';
import styles from './mainCard.module.css';
import RatingDisplay from '../RatingDisplay/RatingDisplay';

export type mainCardProps = {
  imageSrc: string;
  ratingValue: number;
  ratingCondition: number;
};

const MainCard = ({
  imageSrc,
  ratingValue,
  ratingCondition,
}: mainCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img src={imageSrc} className={styles.image} />
      <div className={styles.positionerValue}>
        <RatingDisplay value={ratingValue} type="value" />
      </div>
      <div className={styles.positionerCondition}>
        <RatingDisplay value={ratingCondition} type="condition" />
      </div>
    </div>
  );
};

export default MainCard;
