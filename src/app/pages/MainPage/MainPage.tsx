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

  async function fetchOwnItems(): Promise<void> {
    const response = await fetch('/api/items/currentuser');
    const unfilteredOwnItems: Item[] = await response.json();
    const ownItems = unfilteredOwnItems.filter(
      (item) => item.proposed === false
    );
    setOwnItems(ownItems);
  }

  async function fetchOtherItems(): Promise<void> {
    const response = await fetch('/api/items/otherusers');
    const unfilteredOtherItems: Item[] = await response.json();
    const otherItems = unfilteredOtherItems.filter(
      (item) => item.proposed === false
    );
    setOtherItems(otherItems);
  }

  useEffect(() => {
    fetchOwnItems();
    fetchOtherItems();
  }, []);

  async function handleClick() {
    const newProposal = {
      items: [ownItems[0]._id, otherItems[0]._id].sort(),
      users: [ownItems[0].ownerId, otherItems[0].ownerId].sort(),
    };
    await fetch('/api/swap', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProposal),
    });

    const updatedStatus: Item = {
      _id: ownItems[0]._id,
      ownerId: ownItems[0].ownerId,
      itemName: ownItems[0].itemName,
      valueInput: ownItems[0].valueInput,
      conditionInput: ownItems[0].conditionInput,
      description: ownItems[0].description,
      itemSrc: ownItems[0].itemSrc,
      proposed: true,
    };
    await fetch(`/api/items/:${updatedStatus._id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedStatus),
    });
    fetchOwnItems();
    fetchOtherItems();
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <section className={styles.upper}>
          <p>Your offer</p>
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            className={styles.carousel}
          >
            {ownItems.map((item) => (
              <MainCard
                type="own"
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
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            className={styles.carousel}
          >
            {otherItems.map((item) => (
              <MainCard
                type="other"
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
