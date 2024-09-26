/* eslint-disable @next/next/no-img-element */
import { Github, LinkedIn, Telegram } from '@assets/icons';
import { Box, Flex } from '@components';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import * as styles from './NavBar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [linksClass, setLinksClass] = useState('');

  let openClass = open ? 'open' : '';
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        setLinksClass('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleEnter = () => {
    setOpen(true);
  };

  const handleLeave = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (!open) {
      setLinksClass('');
    }
    setOpen(true);
  };

  const handleOnTransitionEnd = () => {
    setLinksClass('enabled');
  };

  return (
    <Box position='absolute' right={{ bp0: '12', bp2: '14' }} top='12' zIndex='overlayLevel0'>
      <nav
        aria-label='navigation'
        ref={ref}
        tabIndex={0}
        className={clsx(openClass, styles.navball)}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}>
        <Flex
          col
          h='full'
          justifyContent='space-between'
          className={clsx(openClass, linksClass, styles.navlinksContainer)}
          onTransitionEnd={handleOnTransitionEnd}>
          <Link href='/' passHref className={styles.navlink}>
            Home
          </Link>
          <Link href='/posts#content' passHref scroll={false} className={styles.navlink}>
            Blog Posts
          </Link>
          <Link href='/cv#content' passHref scroll={false} className={styles.navlink}>
            CV/Resume
          </Link>
          <Link href='/about#content' passHref scroll={false} className={styles.navlink}>
            About Me
          </Link>
        </Flex>
        <div className={styles.tip}>nav here!</div>
      </nav>
      <Flex col position='absolute' left='fullPlus10' top='-4' gap='5'>
        <a className={styles.iconbtn} href='https://www.github.com/mgrog'>
          <img src={Github.src} height={35} width={35} alt='Github Icon' />
        </a>
        <a className={styles.iconbtn} href='https://t.me/mikegroganchat'>
          <img src={Telegram.src} height={35} width={35} alt='Telegram Icon' />
        </a>
        <a className={styles.iconbtn} href='https://www.linkedin.com/in/michael-grogan-2a164666/'>
          <img src={LinkedIn.src} height={35} width={35} alt='LinkedIn Icon' />
        </a>
      </Flex>
    </Box>
  );
};

export { NavBar };
