import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '~/src/css';

export const navball = style({
  borderRadius: 999,
  height: 150,
  width: 150,
  backgroundColor: 'white',
  zIndex: 1000,
  transition: vars.transitions.bounce,
  selectors: {
    '&.open': {
      width: 200,
    },
  },
});

export const navlinksContainer = style({
  position: 'relative',
  opacity: 0,
  top: 0,
  backgroundColor: 'transparent',
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  padding: '20px 0 20px 50px',
  pointerEvents: 'none',
  touchAction: 'none',
  whiteSpace: 'nowrap',
  selectors: {
    '&.open': {
      transition: 'opacity 150ms ease 300ms',
      opacity: 1,
    },
    '&.enabled': {
      pointerEvents: 'auto',
      touchAction: 'auto',
    },
  },
});

export const navlink = style({
  position: 'relative',
  padding: 2,
  cursor: 'pointer',
  width: 'fit-content',
  color: vars.color['dark-primary'],
  textDecoration: 'none',
  fontWeight: 500,
  selectors: {
    '&:hover::after': {
      content: '',
      position: 'absolute',
      left: 0,
      bottom: 0,
      backgroundColor: vars.color.primary,
      height: 3,
      width: '100%',
    },
  },
});

export const iconbtn = style({
  backgroundColor: 'transparent',
  border: 'none',
  transition: 'transform ease 150ms',
  selectors: {
    '&:active': {
      opacity: 0.7,
    },
    '&:hover': {
      filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
      transform: 'translateY(-5px)',
    },
  },
});

export const tip = style({
  position: 'absolute',
  top: 24,
  right: 18,
  fontSize: 13,
  transform: 'rotate(17deg)',
  color: 'Gray',
  fontFamily: 'Indie Flower, cursive',
  cursor: 'default',
});
