import React from 'react';
import styles from './mainCard.module.css';
import RatingDisplay from '../RatingDisplay/RatingDisplay';
import type { ObjectId } from 'mongodb';

export type mainCardProps = {
  _id?: ObjectId;
  ownerId?: ObjectId;
  imageSrc: string;
  ratingValue: number;
  ratingCondition: number;
  type: 'own' | 'other';
};

const MainCard = ({
  imageSrc,
  ratingValue,
  ratingCondition,
}: mainCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} className={styles.image} />

        <div className={styles.positionerValue}>
          <RatingDisplay value={ratingValue} type="value" />
        </div>
        <div className={styles.positionerCondition}>
          <RatingDisplay value={ratingCondition} type="condition" />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
