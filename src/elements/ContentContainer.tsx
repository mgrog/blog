import {styled} from '~/stitches.config';

export const ContentContainer = styled('div', {
  $$width: '100%',
  $$mobileMaxWidth: '500px',
  $$desktopMaxWidth: '1125px',
  $$mobileMx: 'auto',
  $$desktopMx: 'clamp(50px, 50% - 562px, 400px)',
  $$mobilePadding: '0 20px',
  $$desktopPadding: '0',

  variants: {
    size: {
      defaults: {
        '@bp0': {
          width: '$$width',
          maxWidth: '$$mobileMaxWidth',
          margin: '0 $$mobileMx',
          padding: '$$mobilePadding',
        },
        '@bp2': {
          width: '$$width',
          maxWidth: '$$desktopMaxWidth',
          margin: '0 $$desktopMx',
          padding: '$$desktopPadding',
        },
      },
    },
  },
  defaultVariants: {
    size: 'defaults',
  },
});
