import { Box, BoxProps } from '@components';
import clsx from 'clsx';
import { Atoms } from '~/src/css';
import * as styles from './Flex.css';

type Props = Atoms &
  styles.VariantProps &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: BoxProps['as'];
  };

export const Flex = ({
  as = 'div',
  children,
  row,
  col,
  centered,
  className,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <Box as={as} {...props} className={clsx(className, styles.variants({ col, row, centered }))}>
      {children}
    </Box>
  );
};
