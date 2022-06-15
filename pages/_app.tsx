import {Banner, NavBar, Footer} from '@components';
import {Box, ContentContainer, Flex, Parallax, SiteText} from '@elements';
import type {AppProps} from 'next/app';
import Link from 'next/link';
import {useRouter} from 'next/router';
import '../styles/globals.css';
import {styled} from '~/stitches.config';
import {useEffect} from 'react';

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  let matchPost = Boolean(router.route.match(/^\/posts\/\d$/g));

  return (
    <Layout>
      <Parallax.Perspective>
        <Box id='root' css={{visibility: 'hidden'}} />
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
              size={4}
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
              size={4}
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
      </Parallax.Perspective>
    </Layout>
  );
}

function Layout({children}: {children: React.ReactNode}) {
  return (
    <Flex col centered>
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
    <Wrapper col centered='horizontal'>
      {markdown ? (
        <>
          <ContentContainer className='blog-post'>
            <Link href='/posts'>&larr; All Posts</Link>
            {children}
          </ContentContainer>
          <Footer />
        </>
      ) : (
        <>
          {children}
          <Footer />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Flex, {
  height: 'auto',
  width: '100%',
  backgroundColor: '$dark-neutral',
  zIndex: 10,
  position: 'absolute',
  overflow: 'hidden',
  '-webkit-transform': 'translateZ(0px)',
  '@bp0': {
    fontSize: 14,
  },
  '@bp2': {
    fontSize: 18,
  },
});

export default MyApp;
