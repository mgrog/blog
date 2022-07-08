import { calc } from '@vanilla-extract/css-utils';

export const space = {
  '0': '0',
  'px': '1px',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '103px': '103px',
  '200px': '200px',
  '218px': '218px',
  '260px': '260px',
  '340px': '340px',
  '400px': '400px',
  '500px': '500px',
  '560px': '560px',
  '700px': '700px',
  '19vw': '19vw',
  '24vw': '24vw',
  'min_700_or_32vw': 'min(-700px, -32vw)',
  'auto': 'auto',
  'full': '100%',
  'fullPlus10': `${calc('100%').add('10px')}`,
  'fit': 'fit-content',
  'max': 'max-content',
  'min': 'min-content',
  'viewHeight': '100vh',
  'viewWidth': '100vw',
  'none': '0',
};

type ExcludedKeys =
  | '-auto'
  | '-full'
  | '-fullPlus10'
  | '-fit'
  | '-max'
  | '-min'
  | '-viewHeight'
  | '-viewWid'
  | '-none'
  | '0'
  | 'px'
  | 'min_700_or_32vw';

type NegSpace = Omit<Record<`-${keyof typeof space}`, string>, ExcludedKeys>;

export const negSpace = Object.entries(space)
  .filter(([k]) => !isNaN(Number(k)) || k.includes('px') || k.includes('vw'))
  .reduce((acc, [k, v]) => {
    acc[`-${k}`] = `${calc(v).negate()}`;
    return acc;
  }, {} as { [K: string]: string }) as NegSpace;
