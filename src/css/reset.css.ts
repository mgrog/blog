import { style as resetStyles } from '@vanilla-extract/css';

export const base = resetStyles({
  // Prevent padding and border from affecting element width
  boxSizing: 'border-box',

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  verticalAlign: 'baseline',
});

// resets for specific elements
const button = resetStyles({
  background: 'none',
});

const a = resetStyles({
  textDecoration: 'none',
});

const heading = resetStyles({
  padding: 0,
  fontWeight: 400,
});

export const element = {
  button,
  a,
  div: undefined,
  h1: heading,
  h2: heading,
  h3: heading,
  h4: heading,
  h5: heading,
  h6: heading,
};

export type Element = keyof typeof element;
