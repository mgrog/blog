import {NavBar, Banner} from '@components';
import {ContentContainer, Flex, Perspective} from '@elements';
import type {AppProps} from 'next/app';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import {styled} from '~/stitches.config';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  let matchPost = Boolean(router.route.match(/^\/posts\/\d$/g));
  console.log(router.route, matchPost);

  return (
    <Layout>
      <Perspective>
        <NavBar />
        <Banner />
        <Content markdown={matchPost}>
          <Component {...pageProps} />
        </Content>
      </Perspective>
    </Layout>
  );
}

function Layout({children}: {children: React.ReactNode}) {
  return (
    <Flex col centered w100>
      {children}
    </Flex>
  );
}

type ContentProps = {
  markdown?: boolean;
  children: React.ReactNode;
};

function Content({markdown, children}: ContentProps) {
  return (
    <Flex
      css={{
        paddingBottom: 50,
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#000',
        minHeight: 'calc(100vh - 604px)',
        zIndex: 10,
        position: 'absolute',
        '-webkit-transform': 'translateZ(0px)',
        '@bp0': {
          fontSize: 12,
        },
        '@bp2': {
          fontSize: 16,
        },
      }}>
      {markdown ? <ContentContainer>{children}</ContentContainer> : children}
    </Flex>
  );
}

export default MyApp;
