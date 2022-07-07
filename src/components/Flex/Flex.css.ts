import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const variants = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    col: {
      true: {
        flexDirection: 'column',
      },
    },
    row: {
      true: {
        flexDirection: 'row',
      },
    },
    reverse: {
      true: {
        flexDirection: 'row-reverse',
      },
    },
    centered: {
      horizontal: {
        justifyContent: 'center',
      },
      vertical: {
        alignItems: 'center',
      },
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        col: true,
        centered: 'horizontal',
      },
      style: {
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    },
    {
      variants: {
        row: true,
        centered: 'vertical',
      },
      style: {
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
    },
  ],
});

export type VariantProps = RecipeVariants<typeof variants>;
