import {Banner, NavBar} from '@components';
import {ContentContainer, Flex, Perspective} from '@elements';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  let matchPost = Boolean(router.route.match(/^\/posts\/\d$/g));

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
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '$dark-neutral',
        minHeight: 'calc(100vh - 604px)',
        height: '-webkit-fill-available',
        zIndex: 10,
        position: 'absolute',
        overflow: 'hidden',
        '-webkit-transform': 'translateZ(0px)',
        '-webkit-overflow-scrolling': 'touch',
        '@bp0': {
          fontSize: 14,
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
