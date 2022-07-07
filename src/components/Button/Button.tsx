import { Box, BoxProps } from '@components';
import clsx from 'clsx';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Atoms } from '~/src/css';
import * as styles from './Button.css';

type Props = Atoms &
  ComponentPropsWithoutRef<'button' | 'a'> & {
    as?: BoxProps['as'];
  };

export const Button = ({ as = 'button', className, ...props }: PropsWithChildren<Props>) => (
  <Box as={as} className={clsx(className, styles.btnStyle)} {...props} />
);
