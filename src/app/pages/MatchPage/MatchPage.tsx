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
      srcOwn: '../../components/assets/1.jpg',
      srcOther: '../../components/assets/1.jpg',
    },
    {
      srcOwn: '../../components/assets/1.jpg',
      srcOther: '../../components/assets/1.jpg',
    },
    {
      srcOwn: '../../components/assets/1.jpg',
      srcOther: '../../components/assets/1.jpg',
    },
    {
      srcOwn: '../../components/assets/1.jpg',
      srcOther: '../../components/assets/1.jpg',
    },
    {
      srcOwn: '../../components/assets/1.jpg',
      srcOther: '../../components/assets/1.jpg',
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
          <h2>Swaps you proposed</h2>
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            className={styles.carousel}
          >
            {mockupData.map((item) => (
              <div>
                <MatchCard
                  type="proposal"
                  imageSrcOwn={item.srcOwn}
                  imageSrcOther={item.srcOther}
                  handleClick={handleClick}
                  {...item}
                />
              </div>
            ))}
          </Carousel>
        </section>
        <div className={styles.separationLine}></div>
        <section className={styles.lower}>
          <h2>Swaps both sides agreed to</h2>
          <Carousel
            infiniteLoop={true}
            showThumbs={false}
            className={styles.carousel}
          >
            {mockupData.map((item) => (
              <div>
                <MatchCard
                  type="accept"
                  imageSrcOwn={item.srcOwn}
                  imageSrcOther={item.srcOther}
                  handleClick={handleClick}
                  {...item}
                />
              </div>
            ))}
          </Carousel>
        </section>
      </main>
      <Nav activeLink="handshake" />
    </div>
  );
}
export default MatchPage;
