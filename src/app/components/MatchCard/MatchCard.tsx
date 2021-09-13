import React from 'react';
import styles from './MatchCard.module.css';
import SwapIcon from '../assets/SwapIcon';
import Counter from '../Counter/Counter';

import IconButton from '../Buttons/IconButton';

export type MatchCardProps = {
  imageSrcOwn: string;
  imageSrcOther: string;
  type: 'proposal' | 'accept';
  handleClick: () => void;
};

const MatchCard = ({
  imageSrcOwn,
  imageSrcOther,
  type,
  handleClick,
}: MatchCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={imageSrcOwn} className={styles.image} />
        <img src={imageSrcOther} className={styles.image} />
        <div className={styles.indicator}>
          <div className={styles.iconWrapper}>
            <SwapIcon className={styles.swapIcon} />
          </div>
          <div className={styles.counterIcon}>
            <Counter counterType={type === 'proposal' ? '?' : 'checked'} />
          </div>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <IconButton iconType="mail" onClick={handleClick} isActive={false} />
        <IconButton iconType="call" onClick={handleClick} isActive={false} />
        <IconButton iconType="trashbin" onClick={handleClick} isActive={true} />
      </div>
    </div>
  );
};

export default MatchCard;
