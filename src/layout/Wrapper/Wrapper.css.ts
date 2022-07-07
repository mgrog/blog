import { style } from '@vanilla-extract/css';
import { atoms, vars } from '~/src/css';

export const styles = style([
  atoms({
    fontSize: { bp0: 'small', bp1: 'medium' },
  }),
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    backgroundColor: vars.color['dark-neutral'],
    zIndex: 10,
    position: 'absolute',
    overflow: 'hidden',
    transform: 'translateZ(0px)',
  },
]);
