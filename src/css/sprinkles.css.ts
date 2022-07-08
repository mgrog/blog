import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './vars.css';

// Ensure reset has lowest specificity
/* DO NOT MOVE THIS LINE */
import './reset.css';
/* DO NOT MOVE THIS LINE */

const responsiveProperties = defineProperties({
  conditions: {
    bp0: { '@media': '(min-width: 0)' },
    bp1: { '@media': '(min-width: 640px)' },
    bp2: { '@media': '(min-width: 1100px)' },
    bpMax: { '@media': '(min-width: 1800px)' },
  },
  defaultCondition: 'bp0',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'grid'],
    flexDirection: ['row', 'column', 'row-reverse'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    textAlign: ['center', 'left', 'right'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    fontSize: vars.fontSizes,
    fontWeight: [300, 400, 500, 600, 700, 800, 900],
    gap: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: { ...vars.space, ...vars.contentSpacing },
    paddingRight: { ...vars.space, ...vars.contentSpacing },
    marginTop: vars.space,
    marginBottom: vars.space,
    marginLeft: { ...vars.space, ...vars.contentSpacing },
    marginRight: { ...vars.space, ...vars.contentSpacing },

    left: vars.space,
    right: vars.space,
    top: vars.space,
    bottom: vars.space,

    h: {
      'full': {
        height: '100%',
      },
      'screen': {
        height: '100vh',
      },
      '700px': {
        height: '700px',
      },
      '1200px': { height: '1200px' },
      'bannerHeight': { height: '600px' },
    },
    visibility: ['hidden', 'visible'],
    transform: vars.bannerTransform,
    w: vars.widths,
    maxWidth: vars.maxWidths,
    minWidth: vars.bannerMinWidth,
    maxHeight: vars.size,
    whiteSpace: ['normal', 'nowrap'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    position: ['absolute', 'relative'],
    zIndex: {
      overlayLevel0: 998,
      overlayLevel1: 999,
      overlayLevel2: 1000,
      level1: 10,
      level2: 11,
    },
    backgroundColor: vars.color,
    overflow: ['hidden'],
    fontFamily: vars.fonts,
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.color,
    background: vars.color,
    // etc.
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  colorProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
