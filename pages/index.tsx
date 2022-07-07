import { ContentContainer } from '@layout';
import HomeMD from '@pageMarkdown/HomeMD.mdx';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage<{}> = () => {
  return (
    <ContentContainer className={styles.hometext} paddingBottom='24'>
      <Head>
        <title>Macro Dev Refinement Home Page</title>
      </Head>
      <HomeMD />
    </ContentContainer>
  );
};

export default Home;
