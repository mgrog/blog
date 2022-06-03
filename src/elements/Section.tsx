import {styled} from '@stitches/react';

export const Section = styled('section', {
  width: '100vw',
  padding: '40px 0',
  variants: {
    color: {
      0: {
        backgroundColor: 'black',
      },
      1: {
        backgroundColor: 'var(--darker-primary)',
      },
    },
  },
  defaultVariants: {
    color: 0,
  },
});
