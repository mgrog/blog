import { Flex, LinkObfuscator, Text } from '@components';
import { Section } from '@layout';
import Link from 'next/link';
import * as styles from './Footer.css';

const Footer = () => (
  <Section as='footer' color='3' className={styles.footerSection}>
    <Flex h='full' w='full' justifyContent='space-around'>
      <Flex col justifyContent={'space-between'}>
        <Text as='h2' fontSize={2} paddingY='0'>
          Contact
        </Text>
        <a href='https://www.github.com/mgrog'>Github</a>
        <LinkObfuscator href='https://t.me/mikegroganchat'>Telegram</LinkObfuscator>
        <LinkObfuscator href='mailto:mikegroganware@gmail.com'>Email</LinkObfuscator>
      </Flex>

      <Flex col justifyContent='space-between' gap='2'>
        <Text as='h2' fontSize={2} paddingY='0'>
          Links
        </Text>
        <Link href='/#root'>/home</Link>
        <Link href='/posts#content'>/posts</Link>
        <Link href='/cv#content'>/resume</Link>
        <Link href='/about#content'>/about</Link>
      </Flex>
    </Flex>
    <Flex centered>
      <a href='#root'>Back to Top</a>
    </Flex>
  </Section>
);

export { Footer };
