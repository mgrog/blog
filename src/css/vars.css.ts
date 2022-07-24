import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { negSpace, space } from '~/src/css/tokens/space';

export const vars = createGlobalTheme(':root', {
  color: {
    'light-primary': '#2c77bf',
    'primary': '#1b60a5',
    'dark-primary': '#052b4f',
    'darker-primary': '#001b33',
    'banner-height': '600px',
    'dark-neutral': '#121212',
    'sky-color': '#7ea6d7',
    'near-black': '#18181B',
    'text-light': 'rgb(241 245 249)',
    'text-dark': 'rgb(24 24 27);',
  },
  transitions: {
    bounce: 'width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  size: {
    'px': '1px',
    '400px': '400px',
    '500px': '500px',
  },
  space: { ...space, ...negSpace },
  media: {
    bp0: {},
    bp1: { '@media': 'screen and (min-width: 640px)' },
    bp2: { '@media': 'screen and (min-width: 1100px)' },
    bpMax: { '@media': 'screen and (min-width: 1800px)' },
  },
  bannerTransform: {
    'layer0': 'translateZ(0)',
    'layer1': 'translateZ(-0.4px) scale(1.4)',
    'layer1-lg': 'translateY(80%) translateZ(-0.4px) scale(1.4)',
    'layer2': 'translateZ(-0.7px) scale(1.7)',
    'layer3': 'translateZ(-1.2px) scale(2.4)',
    'layer4-sm': 'translateZ(-1.9px) scale(2.45)',
    'layer4-lg': 'translateZ(-1.9px) scale(1.8)',
    'layer5-sm': 'translateZ(-2.14px) scaleX(5) scaleY(2)',
    'layer5-md': 'translateZ(-2.14px) scaleX(6) scaleY(3)',
  },
  bannerMinWidth: {
    '600px': '600px',
    '800px': '800px',
    '1100px': '1100px',
    '1500px': '1500px',
    '1800px': '1800px',
    'screen': '100vw',
  },
  fonts: {
    primary: 'Maven Pro, sans-serif',
    secondary: 'Montserrat, sans-serif',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    0: '0.8em',
    1: '1em',
    2: '1.2em',
    3: '1.4em',
    4: '2em',
    5: '10em',
  },
  widths: {
    'full': { width: '100%' },
    'screen': { width: '100vw' },
    '1/2': { width: '50vw' },
    '3/4': { width: '75vw' },
    '1800px': { width: '1800px' },
  },
  maxWidths: {
    mobileContentMax: '500px',
    desktopContentMax: '1100px',
    full: '100%',
  },
  contentSpacing: {
    desktopClamp: 'clamp(50px, 50% - 562px, 400px)',
    auto: 'auto',
    mobilePad: '20px',
    desktopPad: '0',
  },
});

globalStyle('html', {
  backgroundColor: vars.color['sky-color'],
});

globalStyle('a', {
  textDecoration: 'underline',
  color: 'white',
  textDecorationColor: vars.color.primary,
  textUnderlineOffset: '0.3rem',
  textDecorationThickness: '3px',
});

globalStyle('a:hover:not(.banner, .autolink-header)', {
  color: vars.color.primary,
});
