import React from 'react';
import styles from './MatchPage.module.css';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import MatchCard from '../../components/MatchCard/MatchCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function MatchPage(): JSX.Element {
  const mockupData = [
    {
      srcOwn: 'src/app/components/assets/1.jpg',
      srcOther: 'src/app/components/assets/1.jpg',
    },
    {
      srcOwn: 'src/app/components/assets/1.jpg',
      srcOther: 'src/app/components/assets/1.jpg',
    },
    {
      srcOwn: 'src/app/components/assets/1.jpg',
      srcOther: 'src/app/components/assets/1.jpg',
    },
    {
      srcOwn: 'src/app/components/assets/1.jpg',
      srcOther: 'src/app/components/assets/1.jpg',
    },
    {
      srcOwn: 'src/app/components/assets/1.jpg',
      srcOther: 'src/app/components/assets/1.jpg',
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
          <p>Swaps you proposed</p>
          <Carousel infiniteLoop={true} showThumbs={false}>
            {mockupData.map((item) => (
              <MatchCard
                type="proposal"
                imageSrcOwn={item.srcOwn}
                imageSrcOther={item.srcOther}
                handleClick={handleClick}
                {...item}
              />
            ))}
          </Carousel>
        </section>
        <div className={styles.separationLine}></div>
        <section className={styles.lower}>
          <p>Swaps both sides agreed to</p>
          <Carousel infiniteLoop={true} showThumbs={false}>
            {mockupData.map((item) => (
              <MatchCard
                type="accept"
                imageSrcOwn={item.srcOwn}
                imageSrcOther={item.srcOther}
                handleClick={handleClick}
                {...item}
              />
            ))}
          </Carousel>
        </section>
      </main>
      <Nav />
    </div>
  );
}
export default MatchPage;
