import { style } from '@vanilla-extract/css';
import { atoms } from '~/src/css';

export const footerSection = style([
  atoms({
    marginX: '-3',
  }),
  {
    paddingTop: 50,
    paddingBottom: 100,
    zIndex: 11,
    width: '100vw',
  },
]);
