import {Header} from '@components';
import {Flex} from '@elements';
import type {AppProps} from 'next/app';
import {styled} from '~/stitches.config';
import '../styles/globals.css';

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

const Container = styled('div', {
  marginTop: 40,
  variants: {
    size: {
      mobile: {
        width: '100%',
        maxWidth: 500,
        marginX: 'auto',
      },
      desktop: {
        width: '100%',
        maxWidth: 1125,
      },
    },
  },
});

function Content({children}: {children: React.ReactNode}) {
  return (
    <Flex
      w-full
      css={{
        paddingBottom: 50,
        justifyContent: 'center',
        maxWidth: 1230,
      }}>
      <Container size={{'@initial': 'mobile', '@bp2': 'desktop'}}>{children}</Container>
    </Flex>
  );
}

export default MyApp;
