import { style } from '@vanilla-extract/css';
import { atoms } from '~/src/css';

export const container = style([
  atoms({
    w: {
      bp0: 'full',
    },
    maxWidth: {
      bp0: 'mobileContentMax',
      bp2: 'desktopContentMax',
    },
    marginLeft: {
      bp0: 'auto',
      bp2: 'desktopClamp',
    },
    marginRight: {
      bp0: 'auto',
      bp2: 'auto',
    },
    paddingX: {
      bp0: 'mobilePad',
      bp2: 'desktopPad',
    },
  }),
]);
