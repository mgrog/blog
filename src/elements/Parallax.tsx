import {styled} from '~/stitches.config';

export const Parallax = styled('div', {
  position: 'absolute',
  left: -1,
  overflowX: 'visible',
  transformOrigin: 'left',
  variants: {
    layer: {
      0: {
        '@bp0': {
          transform: 'translateZ(0px) scale(0.4)',
          top: 300,
        },
        '@bp2': {
          transform: 'translateZ(0px)',
          top: 450,
        },
      },
      1: {
        '@bp0': {
          transform: 'translateZ(-0.4px) scale(0.6)',
          top: 248,
        },
        '@bp2': {
          transform: 'translateZ(-0.4px)',
          top: 242,
        },
      },
      2: {
        '@bp0': {
          transform: 'translateZ(-0.7px) scale(0.4)',
          top: 340,
        },
        '@bp2': {
          transform: 'translateZ(-0.7px)',
          top: 450,
        },
      },
      3: {
        left: -1,
        '@bp0': {
          transform: 'translateZ(-1px) scale(0.4) translateX(-200px)',
          top: 250,
        },
        '@bp2': {
          left: 0,
          transform: 'translateZ(-1px)',
          top: 180,
        },
      },
      4: {
        '@bp0': {
          transform: 'translateZ(-1.3px) scale(0.4)',
          top: 385,
        },
        '@bp2': {
          transform: 'translateZ(-1.3px)',
          top: 380,
        },
      },
      5: {
        transform: 'translateZ(-2px) scale(1.5)',
        top: 0,
      },
    },
  },
});

export const Perspective = styled('div', {
  paddingTop: 100,
  perspective: 1,
  perspectiveOrigin: 'top left',
  overflowY: 'scroll',
  '-webkit-overflow-scrolling': 'touch',
  overflowX: 'hidden',
  width: '100%',
  // backgroundColor: '#7EA6D7',
  backgroundColor: '#121212',
  minHeight: '100vh',
  maxHeight: '100vh',
  backfaceVisibility: 'hidden',
});

export const Preserve = styled('div', {
  transformStyle: 'preserve-3d',
  height: '$banner-height',
  overflow: 'visible',
});
