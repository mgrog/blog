import {styled} from '~/stitches.config';

export const Parallax = styled('div', {
  position: 'absolute',
  overflow: 'visible',
  width: 2500,
  transformOrigin: 'left',
  variants: {
    layer: {
      0: {
        '@bp0': {
          transform: 'translateZ(0px) scale(0.6)',
          top: 400,
        },
        '@bp2': {
          transform: 'translateZ(0px)',
          top: 450,
        },
      },
      1: {
        '@bp0': {
          transform: 'translateZ(-0.5px) scale(0.5)',
          top: 150,
        },
        '@bp2': {
          transform: 'translateZ(-0.5px)',
          top: 100,
        },
      },
      2: {
        '@bp0': {
          transform: 'translateZ(-0.8px) scale(0.5)',
          top: 450,
        },
        '@bp2': {
          transform: 'translateZ(-0.8px)',
          top: 450,
        },
      },
      3: {
        '@bp0': {
          transform: 'translateZ(-1px) scale(0.5)',
          top: 300,
        },
        '@bp2': {
          left: 0,
          transform: 'translateZ(-1px)',
          top: 180,
        },
      },
      4: {
        '@bp0': {
          transform: 'translateZ(-1.3px) scale(0.5)',
          top: 550,
        },
        '@bp2': {
          transform: 'translateZ(-1.3px)',
          top: 310,
        },
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
  backgroundColor: '#7EA6D7',
  minHeight: '100vh',
});

export const Preserve = styled('div', {
  transformStyle: 'preserve-3d',
  height: '$banner-height',
  overflow: 'visible',
});
