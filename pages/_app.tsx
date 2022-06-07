import {Banner, NavBar} from '@components';
import {Box, ContentContainer, Flex, Perspective, SiteText} from '@elements';
import type {AppProps} from 'next/app';
import Link from 'next/link';
import {useRouter} from 'next/router';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  let matchPost = Boolean(router.route.match(/^\/posts\/\d$/g));

  return (
    <Layout>
      <Perspective>
        <Box
          css={{
            position: 'absolute',
            top: 40,
            left: 30,
            zIndex: 998,
          }}>
          <Link href='/' passHref>
            <SiteText
              as='a'
              className='banner'
              size={3}
              color='dark'
              responsive='desktop'
              weight={900}>
              macro dev refinement
            </SiteText>
          </Link>
          <Link href='/' passHref>
            <SiteText
              as='a'
              className='banner'
              size={3}
              color='dark'
              responsive='mobile'
              weight={900}>
              mdr
            </SiteText>
          </Link>
        </Box>

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
