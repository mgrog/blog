import {style} from '@vanilla-extract/css';
import {atoms} from '~/src/css';

export const styles = style([
  atoms({zIndex: 'overlayLevel0', position: 'absolute'}),
  {
    top: '40px',
    left: '30px',
  },
]);
