import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles, vars } from '~/src/css';

const imageWidth = createVar();
const imageTransform = createVar();

const layer = {
  0: style([
    sprinkles({
      transform: 'layer0',
      minWidth: {
        bp0: '1500px',
        bp2: '1800px',
        bpMax: 'screen',
      },
      bottom: '-200px',
      maxHeight: { bpMax: '400px' },
    }),
  ]),
  1: style([
    sprinkles({
      transform: {
        bp0: 'layer1',
        bpMax: 'layer1-lg',
      },
      minWidth: {
        bp0: '1100px',
        bp2: '1800px',
        bpMax: 'screen',
      },
      w: { bp0: 'screen' },
      bottom: { bp0: '-260px' },
      maxHeight: { bpMax: '500px' },
    }),
  ]),
  2: style([
    sprinkles({
      transform: 'layer2',
      minWidth: {
        bp0: '800px',
      },
      w: {
        bp0: 'screen',
        bp2: '1800px',
        bpMax: 'screen',
      },
      bottom: {
        bp0: '-218px',
        bp2: '-400px',
        bpMax: '-19vw',
      },
    }),
  ]),
  3: style([
    sprinkles({
      transform: {
        bp0: 'layer3',
      },
      bottom: {
        bp0: '-340px',
        bp2: '-500px',
        bpMax: '-24vw',
      },
      w: {
        bp0: 'screen',
        bp2: '1800px',
        bpMax: 'screen',
      },
      minWidth: {
        bp0: '800px',
      },
      left: {
        bp2: 'none',
      },
    }),
  ]),
  4: style([
    sprinkles({
      transform: {
        bp0: 'layer4-sm',
        bp2: 'layer4-lg',
      },
      bottom: {
        bp0: '-560px',
        bp2: '-700px',
        bpMax: 'min_700_or_32vw',
      },
      w: {
        bp0: '3/4',
        bp2: '1800px',
        bpMax: 'screen',
      },
      minWidth: {
        bp0: '600px',
      },
      left: {
        bp2: '103px',
      },
    }),
  ]),
  5: style([
    { bottom: 500 },
    sprinkles({
      transform: {
        bp0: 'layer5-sm',
        bp2: 'layer5-md',
      },
    }),
  ]),
};

export const item = recipe({
  base: {
    position: 'absolute',
    left: -1,
    overflowX: 'visible',
    transformOrigin: 'left bottom',
    pointerEvents: 'none',
  },
  variants: {
    layer,
  },
});

export const perspective = style({
  perspective: 1,
  perspectiveOrigin: 'top left',
  overflowX: 'hidden',
  overflowY: 'scroll',
  WebkitOverflowScrolling: 'touch',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#121212',
  backfaceVisibility: 'hidden',
  scrollBehavior: 'smooth',
});

export const preserve = style([
  {
    transformStyle: 'preserve-3d',
    height: 500,
    width: '100vw',
    overflowX: 'visible',
  },
  sprinkles({
    h: {
      bpMax: '700px',
    },
  }),
]);

export type LayerProps = keyof typeof layer;
