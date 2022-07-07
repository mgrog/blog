import { Box, BoxProps } from '@components';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Atoms } from '~/src/css';
import * as styles from './ContentContainer.css';

type Props = Atoms &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: BoxProps['as'];
  };

export const ContentContainer = ({ as = 'div', className, ...props }: PropsWithChildren<Props>) => {
  return <Box as={as} className={clsx(className, styles.container)} {...props} />;
};
