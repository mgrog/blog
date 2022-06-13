import {ContentContainer} from '@elements';
import HomeMD from '@pageMarkdown/HomeMD.mdx';
import {NextPage} from 'next';
import React from 'react';
import styles from '../styles/Home.module.css';

const Home: NextPage<{}> = () => {
  return (
    <ContentContainer className={styles.hometext} css={{paddingBottom: 100}}>
      <HomeMD />
    </ContentContainer>
  );
};

export default Home;
