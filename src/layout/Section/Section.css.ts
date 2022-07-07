import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms, vars } from '~/src/css';

const color = {
  '0': {
    backgroundColor: vars.color['dark-neutral'],
  },
  '1': {
    backgroundColor: vars.color['near-black'],
  },
  '2': {
    backgroundColor: vars.color['dark-primary'],
  },
  '3': {
    backgroundColor: vars.color['darker-primary'],
  },
};

const section = style([
  atoms({
    w: 'screen',
  }),
]);

export const variants = recipe({
  base: [section],
  variants: {
    color,
  },
  defaultVariants: {
    color: '0',
  },
});

export const sectionHeading = style({
  selectors: {
    [`${section} &`]: {
      marginTop: 0,
    },
  },
});

export type VariantProps = { color?: keyof typeof color };
