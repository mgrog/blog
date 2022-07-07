import { globalStyle, style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '~/src/css';

const postChildren = style([atoms({ w: 'full', paddingBottom: '4' })]);

export const postChildrenVariants = recipe({
  base: postChildren,
  variants: {
    layout: {
      'w-min': {
        minWidth: 430,
      },
      'h-fixed': {
        height: 310,
      },
      mobile: {
        minWidth: 0,
        height: 'auto',
      },
    },
  },
});

globalStyle(`${postChildren} a`, {
  width: 'fit-content',
});

export type PostChildrenVariants = RecipeVariants<typeof postChildrenVariants>;

export const postImg = style([
  atoms({ w: 'full', position: 'relative' }),
  {
    height: 310,
    '@media': {
      'screen and (max-width: 380px)': {
        height: 290,
      },
    },
  },
]);
