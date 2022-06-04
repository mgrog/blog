import {Flex} from '@elements';
import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';
import {styled} from '~/stitches.config';
import {Github, LinkedIn, Telegram} from '~/icons';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  let className = open ? 'open' : '';
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setOpen]);

  return (
    <Container>
      <StyledNavBall
        aria-label='navigation'
        ref={ref}
        role='button'
        tabIndex={0}
        className={className}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(true)}>
        <StyledBar col h100 spaceBetween className={className}>
          <Link href='/' passHref>
            <NavItem>Home</NavItem>
          </Link>
          <Link href='/posts' passHref>
            <NavItem>Blog Posts</NavItem>
          </Link>
          <Link href='/cv' passHref>
            <NavItem>CV/Resume</NavItem>
          </Link>
          <Link href='/about' passHref>
            <NavItem>About Me</NavItem>
          </Link>
        </StyledBar>
        <Tip>nav here!</Tip>
      </StyledNavBall>
      <Flex col css={{position: 'absolute', left: 'calc(100% + 10px)', top: -10, gap: 20}}>
        <IconBtn href='https://www.github.com/mgrog'>
          <Github height={35} />
        </IconBtn>
        <IconBtn href='https://t.me/mikegroganchat'>
          <Telegram height={35} fill='#1b60a5' />
        </IconBtn>
        <IconBtn href='https://www.linkedin.com/in/michael-grogan-2a164666/'>
          <LinkedIn height={35} fill='#052b4f' />
        </IconBtn>
      </Flex>
    </Container>
  );
};

export {NavBar};

const Container = styled('div', {
  position: 'absolute',
  right: 60,
  top: 20,
  zIndex: 999,
});

const StyledNavBall = styled('div', {
  borderRadius: 999,
  height: 150,
  width: 150,
  backgroundColor: 'white',
  zIndex: 1000,
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },
  transition: '$bounce',
  '&.open': {
    width: 200,
  },
});

const StyledBar = styled(Flex, {
  position: 'relative',
  opacity: 0,
  top: 0,
  height: 120,
  backgroundColor: 'transparent',
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  padding: '20px 30px',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },
  pointerEvents: 'none',
  '&.open': {
    transition: 'opacity 150ms ease 80ms',
    opacity: 1,
    '& a': {
      pointerEvents: 'auto',
    },
  },
  whiteSpace: 'nowrap',
});

const NavItem = styled('a', {
  position: 'relative',
  padding: 2,
  cursor: 'pointer',
  width: 'fit-content',
  color: 'var(--dark-primary)',
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover::after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: 'var(--primary)',
    height: 3,
    width: '100%',
  },
});

const IconBtn = styled('a', {
  backgroundColor: 'transparent',
  border: 'none',
  transition: 'transform ease 150ms',
  '&:active': {
    opacity: 0.7,
  },
  '&:hover': {
    filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
    transform: 'translateY(-5px)',
  },
});

const Tip = styled('div', {
  position: 'absolute',
  top: 24,
  right: 18,
  fontSize: 13,
  transform: 'rotate(17deg)',
  color: 'Gray',
  fontFamily: 'Indie Flower, cursive',
});