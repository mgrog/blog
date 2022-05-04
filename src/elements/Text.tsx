import {styled} from '~/stitches.config';
export const Text = styled('h1', {
  padding: 0,
  variants: {
    alternate: {
      true: {
        fontFamily: 'Radio Canada',
      },
      false: {
        fontFamily: 'Quicksand, sans-serif',
      },
    },
    size: {
      1: {
        fontSize: '1em',
      },
      2: {
        fontSize: '1.2em',
      },
      3: {
        fontSize: '2em',
      },
    },
    pad: {
      0: {
        margin: 0,
      },
      1: {
        margin: '0.5rem 0',
      },
    },
    weight: {
      300: {
        fontWeight: 300,
      },
      400: {
        fontWeight: 400,
      },
      500: {
        fontWeight: 500,
      },
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
    },
    color: {
      light: {
        color: '#FFF',
      },
      dark: {
        color: '#000',
      },
    },
  },
  defaultVariants: {
    color: 'dark',
    size: 3,
    weight: 400,
  },
});
