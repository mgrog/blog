import {styled} from '~/stitches.config';

export const ContentContainer = styled('div', {
  $$width: '100%',
  $$mobileMaxWidth: '500px',
  $$desktopMaxWidth: '1100px',
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
          marginX: '$$mobileMx',
          padding: '$$mobilePadding',
        },
        '@bp2': {
          width: '$$width',
          maxWidth: '$$desktopMaxWidth',
          marginLeft: '$$desktopMx',
          marginRight: 'auto',
          padding: '$$desktopPadding',
        },
      },
    },
  },
  defaultVariants: {
    size: 'defaults',
  },
});
