import {config, styled} from '~/stitches.config';

const themeColors: {
  [k in keyof typeof config.theme.colors]: {color: string};
} = Object.entries(config.theme.colors).reduce<any>(
  (acc, [k, v]) => ((acc[k] = {color: v}), acc),
  {},
);

export const SiteText = styled('h1', {
  padding: 0,
  variants: {
    size: {
      1: {
        fontSize: '1em',
      },
      2: {
        fontSize: '1.2em',
      },
      3: {
        fontSize: '1.4em',
      },
      4: {
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
      ...themeColors,
    },
    link: {
      true: {
        textDecoration: 'underline',
        color: 'white',
        textDecorationColor: '$primary',
        textUnderlineOffset: '0.3rem',
        textDecorationThickness: '3px',
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
    size: 4,
    weight: 400,
  },
});
