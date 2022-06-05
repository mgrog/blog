import {Banner, NavBar} from '@components';
import {ContentContainer, Flex, Perspective, SiteText} from '@elements';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  let matchPost = Boolean(router.route.match(/^\/posts\/\d$/g));

  return (
    <Layout>
      <Perspective>
        <SiteText
          color='dark'
          weight={900}
          css={{position: 'absolute', top: 10, left: 30, zIndex: 998}}>
          macro dev refinement
        </SiteText>
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
        height: 'auto',
        width: '100%',
        backgroundColor: '$dark-neutral',
        zIndex: 10,
        position: 'absolute',
        overflow: 'hidden',
        paddingBottom: 50,
        '-webkit-transform': 'translateZ(0px)',
        '@bp0': {
          fontSize: 14,
        },
        '@bp2': {
          fontSize: 18,
        },
      }}>
      {markdown ? <ContentContainer css={{minHeight: 500}}>{children}</ContentContainer> : children}
    </Flex>
  );
}

export default MyApp;
