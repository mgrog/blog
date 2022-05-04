import { styled } from "~/stitches.config";

export const Box = styled('div', {
  variants: {
    size: {
      mobile: {
        width: '100%',
      },
      desktop: {
        width: '80%',
      },
    },
  },
});