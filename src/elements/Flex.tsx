import {styled} from '~/stitches.config';

export const Flex = styled('div', {
  display: 'flex',
  variants: {
    col: {
      true: {
        flexDirection: 'column',
      },
      false: {
        flexDirection: 'row',
      },
    },
    grow: {
      true: {
        flex: 1,
      },
    },
    w100: {
      true: {
        width: '100%',
      },
    },
    h100: {
      true: {
        height: '100%',
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
    },
    spaceBetween: {
      true: {
        justifyContent: 'space-between',
      },
    },
  },
  compoundVariants: [
    {
      col: true,
      centered: 'horizontal',
      css: {
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    },
    {
      col: true,
      centered: 'vertical',
      css: {
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
    },
  ],
});
