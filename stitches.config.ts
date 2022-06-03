import {createStitches} from '@stitches/react';

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} =
  createStitches({
    theme: {
      colors: {
        gray400: 'gainsboro',
        gray500: 'lightgray',
      },
      transitions: {
        bounce: 'width 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
    media: {
      bp0: '(min-width: 0)',
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 1100px)',
    },
    utils: {
      marginX: (value: string | number) => ({
        marginLeft: value,
        marginRight: value,
      }),
    },
  });
