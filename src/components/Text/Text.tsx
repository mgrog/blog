import { Box, BoxProps } from '@components';
import clsx from 'clsx';
import React from 'react';
import { ComponentPropsWithRef, PropsWithChildren } from 'react';
import { Atoms } from '~/src/css';
import * as styles from './Text.css';

type Props = Atoms &
  styles.TextVariants &
  ComponentPropsWithRef<'a' | 'h1'> & {
    as?: BoxProps['as'];
  };

export const Text = React.forwardRef<HTMLElement, PropsWithChildren<Props>>(
  ({ as = 'h1', className, link, responsive, ...props }, ref) => {
    return (
      <Box
        as={as}
        ref={ref}
        className={clsx(className, styles.variants({ link, responsive }))}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';
