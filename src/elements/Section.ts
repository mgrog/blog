import {styled} from '@stitches/react';

export const Section = styled('section', {
  width: '100vw',
  padding: '40px 0',
  '& h1': {
    marginTop: 0,
  },
  variants: {
    color: {
      0: {
        backgroundColor: '$dark-neutral',
      },
      1: {
        backgroundColor: '#18181B',
      },
      2: {
        backgroundColor: '$dark-primary',
      },
      3: {
        backgroundColor: '$darker-primary',
      },
    },
  },
  defaultVariants: {
    color: 0,
  },
});
