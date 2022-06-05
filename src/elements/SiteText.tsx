import {styled} from '~/stitches.config';
export const SiteText = styled('h1', {
  padding: 0,
  variants: {
    size: {
      1: {
        fontSize: '1em',
      },
      2: {
        fontSize: '1.4em',
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
      800: {
        fontWeight: 800,
      },
      900: {
        fontWeight: 900,
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
    responsive: {
      mobile: {
        '@bp0': {display: 'block'},
        '@bp1': {display: 'none'},
      },
      desktop: {
        '@bp0': {display: 'none'},
        '@bp1': {display: 'block'},
      },
    },
  },
  defaultVariants: {
    color: 'light',
    size: 3,
    weight: 400,
  },
});
