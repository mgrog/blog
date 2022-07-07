import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '~/src/css';

export const variants = recipe({
  variants: {
    link: {
      true: {
        textDecoration: 'underline',
        color: 'white',
        textDecorationColor: '$primary',
        textUnderlineOffset: '0.3rem',
        textDecorationThickness: '3px',
      },
    },
    responsive: {
      mobile: atoms({
        display: {
          bp0: 'block',
          bp1: 'none',
        },
      }),
      desktop: atoms({
        display: {
          bp0: 'none',
          bp1: 'block',
        },
      }),
    },
  },
});

export type TextVariants = RecipeVariants<typeof variants>;
