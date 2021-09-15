import React from 'react';
import styles from './MainPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MainCard from '../../components/mainCard/mainCard';
import IconButton from '../../components/Buttons/IconButton';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function MainPage(): JSX.Element {
  const mockupData = [
    {
      src: 'src/app/components/assets/1.jpg',
      value: 1,
      condition: 2,
    },
    {
      src: 'src/app/components/assets/1.jpg',
      value: 2,
      condition: 3,
    },
    {
      src: 'src/app/components/assets/1.jpg',
      value: 3,
      condition: 4,
    },
    {
      src: 'src/app/components/assets/1.jpg',
      value: 4,
      condition: 5,
    },
    {
      src: 'src/app/components/assets/1.jpg',
      value: 1,
      condition: 5,
    },
  ];

  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainWrapper}>
        <section className={styles.upper}>
          <p>Your offer</p>
          <Carousel infiniteLoop={true} showThumbs={false}>
            {mockupData.map((item) => (
              <MainCard
                imageSrc={item.src}
                ratingValue={item.value}
                ratingCondition={item.condition}
                {...item}
              />
            ))}
          </Carousel>
        </section>{' '}
        <div className={styles.separationLine}></div>
        <section className={styles.lower}>
          <p>Somebody´s offer</p>
          <Carousel infiniteLoop={true} showThumbs={false}>
            {mockupData.map((item) => (
              <MainCard
                imageSrc={item.src}
                ratingValue={item.value}
                ratingCondition={item.condition}
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
