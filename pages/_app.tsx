import { Banner, Box, Flex, Footer, NavBar, Parallax, Text } from '@components';
import { ContentContainer, HomeLink, Wrapper } from '@layout';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let matchPost = Boolean(router.route.match(/^\/posts\/\d$/g));

  return (
    <Layout>
      <Parallax.Perspective>
        <Box id='root' visibility='hidden' />
        <HomeLink>
          <Link href='/' passHref legacyBehavior>
            <Text
              as='a'
              className='banner'
              fontSize={4}
              color='text-dark'
              responsive='desktop'
              fontWeight={900}>
              Mike Grogan&apos;s Blog
            </Text>
          </Link>
          <Link href='/' passHref legacyBehavior>
            <Text
              as='a'
              className='banner'
              fontSize={4}
              color='text-dark'
              responsive='mobile'
              fontWeight={900}>
              mgb
            </Text>
          </Link>
        </HomeLink>

        <NavBar />
        <Banner />
        <Box visibility='hidden' position='relative'>
          <Box id='content' position='absolute' top='-24' />
        </Box>
        <Content markdown={matchPost}>
          <Component {...pageProps} />
        </Content>
      </Parallax.Perspective>
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <Flex col>{children}</Flex>;
}

type ContentProps = {
  markdown?: boolean;
  children: React.ReactNode;
};

function Content({ markdown, children }: ContentProps) {
  return (
    <Wrapper>
      {markdown ? (
        <>
          <ContentContainer as='article' className='blog-post'>
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
export default MyApp;
