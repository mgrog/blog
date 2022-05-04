import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Flex, Box} from '@elements';
import {Header} from '@components';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Header img={'https://via.placeholder.com/1600x300.png/2b2a33/'}>
        This is the blog title
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}

function Layout({children}: {children: React.ReactNode}) {
  return (
    <Flex col centered w-full css={{backgroundColor: 'white', padding: 10}}>
      {children}
    </Flex>
  );
}

const BoxStyles = {
  borderLeft: '2px solid #eee',
  borderRight: '2px solid #eee',
  padding: 20,
  paddingBottom: 50,
  justifyContent: 'center',
  maxWidth: 1230,
};

function Content({children}: {children: React.ReactNode}) {
  return (
    <Flex w-full css={BoxStyles}>
      <Box size={{'@initial': 'mobile', '@bp2': 'desktop'}}>{children}</Box>
    </Flex>
  );
}

export default MyApp;
