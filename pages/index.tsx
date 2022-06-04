import {ContentContainer} from '@elements';
import HomeMD from '@pageMarkdown/HomeMD.mdx';
import {NextPage} from 'next';
import React from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage<{}> = () => {
  return (
    <ContentContainer size={{'@initial': 'mobile', '@bp2': 'desktop'}} className={styles.hometext}>
      <HomeMD />
    </ContentContainer>
  );
};

export default Home;
