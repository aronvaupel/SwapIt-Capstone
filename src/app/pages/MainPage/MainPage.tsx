import React from 'react';
import styles from './MainPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MainCard from '../../components/mainCard/mainCard';
import IconButton from '../../components/Buttons/IconButton';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import type { Item } from '../../../utils/types';

function MainPage(): JSX.Element {
  const [ownItems, setOwnItems] = useState<Item[]>([]);
  const [otherItems, setOtherItems] = useState<Item[]>([]);

  async function fetchOwnItems(): Promise<Item[]> {
    const response = await fetch('/api/items/currentuser');
    const ownItems = await response.json();
    console.log(response.json);
    setOwnItems(ownItems);
    return ownItems;
  }

  async function fetchOtherItems(): Promise<Item[]> {
    const response = await fetch('/api/items/otherusers');
    const otherItems = await response.json();
    console.log(response.json);
    setOtherItems(otherItems);

    return otherItems;
  }

  const handleClick = () => {
    console.log('click');
  };

  useEffect(() => {
    fetchOwnItems();
    fetchOtherItems();
  }, [handleClick]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <section className={styles.upper}>
          <p>Your offer</p>
          <Carousel infiniteLoop={true} showThumbs={false}>
            {ownItems.map((item) => (
              <MainCard
                imageSrc={item.itemSrc}
                ratingValue={item.valueInput}
                ratingCondition={item.conditionInput}
                {...item}
              />
            ))}
          </Carousel>
        </section>
        <div className={styles.separationLine}></div>
        <section className={styles.lower}>
          <p>Somebody's offer</p>
          <Carousel infiniteLoop={true} showThumbs={false}>
            {otherItems.map((item) => (
              <MainCard
                imageSrc={item.itemSrc}
                ratingValue={item.valueInput}
                ratingCondition={item.conditionInput}
                {...item}
              />
            ))}
          </Carousel>
        </section>
      </main>
      <div className={styles.iconBackground}>
        <IconButton iconType="swap" isActive={true} onClick={handleClick} />
      </div>
      <Nav activeLink="home" />
    </div>
  );
}
export default MainPage;
