import {createStitches} from '@stitches/react';

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} =
  createStitches({
    theme: {
      colors: {
        'dark-neutral': 'var(--dark-neutral)',
        primary: 'var(--primary)',
        'dark-primary': 'var(--dark-primary)',
        'darker-primary': 'var(--darker-primary)',
        'light-primary': '#2c77bf',
        sky: 'var(--sky-color)',
      },
      transitions: {
        bounce: 'width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      sizes: {
        'banner-height': '600px',
      },
    },
    media: {
      bp0: '(min-width: 0)',
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 1100px)',
      bpMax: '(min-width: 1800px)',
    },
    utils: {
      marginX: (value: string | number) => ({
        marginLeft: value,
        marginRight: value,
      }),
    },
  });
