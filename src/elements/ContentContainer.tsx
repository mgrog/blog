import {styled} from '~/stitches.config';

export const ContentContainer = styled('div', {
  marginTop: 30,
  variants: {
    size: {
      mobile: {
        width: '100%',
        maxWidth: 500,
        marginX: 'auto',
        padding: '0 20px',
      },
      desktop: {
        width: '100%',
        maxWidth: 1125,
      },
      defaults: {
        '@bp0': {
          width: '100%',
          maxWidth: 500,
          marginX: 'auto',
          padding: '0 20px',
        },
        '@bp2': {
          width: '100%',
          maxWidth: 1125,
        },
      },
    },
  },
  defaultVariants: {
    size: 'defaults',
  },
});
