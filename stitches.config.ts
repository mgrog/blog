import {createStitches} from '@stitches/react';

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} =
  createStitches({
    theme: {
      colors: {
        gray400: 'gainsboro',
        gray500: 'lightgray',
      },
    },
    media: {
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
