import {styled} from '~/stitches.config';

export const Parallax = styled('div', {
  position: 'absolute',
  left: -1,
  overflowX: 'visible',
  transformOrigin: 'left bottom',
  width: '100%',
  pointerEvents: 'none',
  $$midDesktop: '1800px',
  $$largeDesktopWidth: '100vw',
  $$largeDesktopHeight: '600px',
  variants: {
    layer: {
      0: {
        $$transform: 'translateZ(0px)',
        '@bp0': {
          transform: '$$transform',
          minWidth: 1500,
          bottom: -200,
        },
        '@bp2': {
          transform: '$$transform',
          minWidth: '$$midDesktop',
        },
        '@bpMax': {
          minWidth: '$$largeDesktopWidth',
          maxHeight: 400,
        },
      },
      1: {
        $$transform: 'translateZ(-0.4px) scale(1.4)',
        '@bp0': {
          transform: '$$transform',
          width: '100vw',
          minWidth: 1100,
          bottom: -200,
        },
        '@bp2': {
          transform: '$$transform',
          top: 352,
          width: '$$midDesktop',
          bottom: 0,
        },
        '@bpMax': {
          width: '$$largeDesktopWidth',
          transform: 'translateY(80%) $$transform',
          maxHeight: 500,
        },
      },
      2: {
        $$transform: 'translateZ(-0.7px) scale(1.7)',
        '@bp0': {
          transform: '$$transform',
          width: '100vw',
          bottom: -218,
          minWidth: 800,
        },
        '@bp2': {
          transform: '$$transform',
          bottom: -400,
          width: '$$midDesktop',
        },
        '@bpMax': {
          width: '$$largeDesktopWidth',
          bottom: '-19vw',
        },
      },
      3: {
        $$transform: 'translateZ(-1.2px) scale(2.4)',
        '@bp0': {
          transform: '$$transform',
          bottom: -340,
          width: '100vw',
          minWidth: 800,
        },
        '@bp2': {
          left: 0,
          bottom: -500,
          transform: '$$transform',
          width: '$$midDesktop',
        },
        '@bpMax': {
          width: '$$largeDesktopWidth',
          bottom: '-24vw',
        },
      },
      4: {
        '@bp0': {
          transform: 'translateZ(-1.9px) scale(2.45)',
          bottom: -560,
          minWidth: 600,
          width: '75vw',
        },
        '@bp2': {
          transform: 'translateZ(-1.9px) scale(1.8)',
          left: 103,
          bottom: -700,
          width: '$$midDesktop',
        },
        '@bpMax': {
          width: '$$largeDesktopWidth',
          bottom: 'min(-700px, -32vw)',
        },
      },
      5: {
        bottom: -500,
        '@bp0': {
          transform: 'translateZ(-2.14px) scaleX(5) scaleY(2)',
        },
        '@bp2': {
          transform: 'translateZ(-2.14px) scaleX(6) scaleY(3)',
        },
      },
    },
  },
});

export const Perspective = styled('div', {
  perspective: 1,
  perspectiveOrigin: 'top left',
  overflowY: 'scroll',
  '-webkit-overflow-scrolling': 'touch',
  overflowX: 'hidden',
  width: '100vw',
  // backgroundColor: '#7EA6D7',
  backgroundColor: '#121212',
  minHeight: '100vh',
  maxHeight: '100vh',
  backfaceVisibility: 'hidden',
  scrollBehavior: 'smooth',
});

export const Preserve = styled('div', {
  transformStyle: 'preserve-3d',
  height: 500,
  '@bpMax': {
    height: 700,
  },
  width: '100vw',
  overflowX: 'visible',
});
