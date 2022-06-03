import {styled} from '~/stitches.config';

export const Parallax = styled('div', {
  position: 'absolute',
  overflowX: 'visible',
  width: 2500,
  variants: {
    layer: {
      0: {
        '@bp0': {
          transform: 'translateZ(0px) scale(0.5) translateX(-50%)',
          top: '70%',
        },
        '@bp2': {
          transform: 'translateZ(0px)',
          top: 450,
        },
      },
      1: {
        '@bp0': {
          transform: 'translateZ(-0.5px) scale(0.5) translateX(-50%)',
          top: '25%',
        },
        '@bp2': {
          transform: 'translateZ(-0.5px)',
          top: 100,
        },
      },
      2: {
        '@bp0': {
          transform: 'translateZ(-0.8px) scale(0.5) translateX(-50%)',
          top: '80%',
        },
        '@bp2': {
          transform: 'translateZ(-0.8px)',
          top: 450,
        },
      },
      3: {
        '@bp0': {
          transform: 'translateZ(-1px) scale(0.5) translateX(-66%)',
          top: '60%',
        },
        '@bp2': {
          left: 0,
          transform: 'translateZ(-1px)',
          top: 180,
        },
      },
      4: {
        '@bp0': {
          transform: 'translateZ(-1.5px) scale(0.5) translateX(-66%)',
          top: '98%',
        },
        '@bp2': {
          transform: 'translateZ(-1.5px)',
          top: 310,
        },
      },
    },
  },
});

export const Perspective = styled('div', {
  perspective: 1,
  perspectiveOrigin: 'top left',
  overflowY: 'scroll',
  overflowX: 'hidden',
  width: '100%',
  height: 'calc(100vh - 2px)',
  backgroundColor: '#7EA6D7',
});

export const Preserve = styled('div', {
  transformStyle: 'preserve-3d',
  height: 600,
});
