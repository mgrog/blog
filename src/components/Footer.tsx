import {LinkObfuscator} from '@components';
import {Flex, Section, SiteText} from '@elements';
import {styled} from '~/stitches.config';
import Link from 'next/link';

const Footer = () => (
  <StyledSection as='footer' color={3}>
    <Flex h100>
      <Links css={{gap: 18}}>
        <SiteText as='h2' size={2} pad={0}>
          Contact
        </SiteText>
        <a href='https://www.github.com/mgrog'>Github</a>
        <LinkObfuscator href='https://t.me/mikegroganchat'>Telegram</LinkObfuscator>
        <LinkObfuscator href='mailto:mikegroganware@gmail.com'>Email</LinkObfuscator>
      </Links>

      <Links>
        <SiteText as='h2' size={2} pad={0}>
          Links
        </SiteText>
        <Link href='/'>/home</Link>
        <Link href='/posts'>/posts</Link>
        <Link href='/cv'>/resume</Link>
        <Link href='/about'>/about</Link>
      </Links>
    </Flex>
    <Flex centered css={{marginTop: 30}}>
      <a href='#root'>Back to Top</a>
    </Flex>
  </StyledSection>
);

const StyledSection = styled(Section, {
  paddingBottom: 50,
  zIndex: 11,
  margin: '0 -20px',
  width: '100vw',
});

const Links = styled(Flex, {
  justifyContent: 'space-between',
  flexDirection: 'column',
  flexGrow: 1,
  marginLeft: '15%',
  '& a': {
    width: 'fit-content',
  },
});

export {Footer};
