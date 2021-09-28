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
    const ownItems: Item[] = await response.json();
    setOwnItems(ownItems);
  }

  async function fetchOtherItems(): Promise<void> {
    const response = await fetch('/api/items/otherusers');
    const otherItems: Item[] = await response.json();
    setOtherItems(otherItems);
  }

  useEffect(() => {
    fetchOwnItems();
    fetchOtherItems();
    localStorage.setItem('ownIndex', '0');
    localStorage.setItem('otherIndex', '0');
  }, []);

  function handleOwnChange(selectedIndex: number) {
    localStorage.setItem('ownIndex', selectedIndex.toString());
  }
  function handleOtherChange(selectedIndex: number) {
    localStorage.setItem('otherIndex', selectedIndex.toString());
  }

  async function handleClick() {
    const ownIndexString = localStorage.getItem('ownIndex');
    const ownIndex = ownIndexString ? parseInt(ownIndexString) : 0;

    const otherIndexString = localStorage.getItem('otherIndex');
    const otherIndex = otherIndexString ? parseInt(otherIndexString) : 0;

    const newProposal = {
      items: [ownItems[ownIndex]._id, otherItems[otherIndex]._id].sort(),
      users: [
        ownItems[ownIndex].ownerId,
        otherItems[otherIndex].ownerId,
      ].sort(),
      srcOwn: ownItems[ownIndex].itemSrc,
      srcOther: otherItems[otherIndex].itemSrc,
    };
    await fetch('/api/swap', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newProposal),
    });

    const updatedStatus: Partial<Item> = {
      _id: ownItems[ownIndex]._id,
      proposedBy: ownItems[ownIndex].ownerId,
    };
    await fetch(`/api/items/update`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedStatus),
    });

    const updatedOtherStatus: Partial<Item> = {
      _id: otherItems[otherIndex]._id,
      proposedBy: ownItems[ownIndex].ownerId,
    };
    await fetch(`/api/items/update`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedOtherStatus),
    });

    fetchOwnItems();
    fetchOtherItems();
    localStorage.setItem('ownIndex', '0');
    localStorage.setItem('otherIndex', '0');
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <section className={styles.upper}>
          <p>Your offer</p>
          <Carousel
            onChange={handleOwnChange}
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
            onChange={handleOtherChange}
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
