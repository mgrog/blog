import { style } from '@vanilla-extract/css';
import { atoms, vars } from '~/src/css';

export const btnStyle = style([
  atoms({ color: 'text-light', fontFamily: 'primary', fontSize: 2 }),
  {
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: vars.color.primary,
    borderRadius: 999,
    border: `solid 3px ${vars.color['sky-color']}`,
    selectors: {
      '&:hover, &:active': {
        backgroundColor: vars.color['darker-primary'],
        borderColor: vars.color.primary,
        color: vars.color.primary,
      },
    },
  },
]);
