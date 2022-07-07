import { Box } from '@components';
import { PropsWithChildren } from 'react';
import { styles } from './HomeLink.css';

export const HomeLink = ({ children }: PropsWithChildren<{}>) => {
  return <Box className={styles}>{children}</Box>;
};
