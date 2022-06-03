import React from 'react';
import {ContentContainer, SiteText} from '@elements';
import {NextPage} from 'next';
import HomeText from './HomeText.mdx';
import styles from '../styles/Home.module.css';

const Home: NextPage<{}> = () => {
  return (
    <ContentContainer size={{'@initial': 'mobile', '@bp2': 'desktop'}} className={styles.hometext}>
      <HomeText aria-label='home-text' />
    </ContentContainer>
  );
};

export default Home;
