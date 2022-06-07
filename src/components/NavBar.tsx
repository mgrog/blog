import {Flex} from '@elements';
import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';
import {flushSync} from 'react-dom';
import {Github, LinkedIn, Telegram} from '~/icons';
import {styled} from '~/stitches.config';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [linksDisabled, setLinksDisabled] = useState(true);

  let openClass = open ? 'open' : '';
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        setLinksDisabled(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    function handleTouchEnd() {
      if (linksDisabled) {
        setTimeout(() => setLinksDisabled(false), 450);
      }
    }

    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [linksDisabled]);

  const handleEnter = () => {
    setOpen(true);
    setLinksDisabled(false);
  };

  const handleLeave = () => {
    setOpen(false);
    setLinksDisabled(true);
  };

  return (
    <Container>
      <StyledNavBall
        aria-label='navigation'
        ref={ref}
        tabIndex={0}
        className={openClass}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => setOpen(true)}>
        {!linksDisabled && <PageLinks />}
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

const PageLinks = () => {
  const [visibility, setVisibilty] = useState('');
  const transitionComplete = useRef(false);

  useEffect(() => {
    let timeId: ReturnType<typeof setTimeout>;
    if (!transitionComplete.current) {
      timeId = setTimeout(() => setVisibilty('visible'), 50);
      transitionComplete.current = true;
    }
    return () => {
      clearTimeout(timeId);
      transitionComplete.current = false;
    };
  }, []);

  return (
    <StyledBar col h100 spaceBetween className={visibility}>
      <Link href='/' passHref>
        <NavItem>Home</NavItem>
      </Link>
      <Link href='/posts' passHref scroll={false}>
        <NavItem>Blog Posts</NavItem>
      </Link>
      <Link href='/cv' passHref scroll={false}>
        <NavItem>CV/Resume</NavItem>
      </Link>
      <Link href='/about' passHref scroll={false}>
        <NavItem>About Me</NavItem>
      </Link>
    </StyledBar>
  );
};

export {NavBar};

const Container = styled('div', {
  position: 'absolute',
  right: 60,
  top: 20,
  zIndex: 999,
});

const StyledNavBall = styled('nav', {
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
  transition: 'opacity 150ms ease',
  '&.visible': {
    opacity: 1,
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
  cursor: 'default',
});
