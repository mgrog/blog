import { Box } from '@components';
import { PropsWithChildren } from 'react';
import { styles } from './Wrapper.css';

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  return <Box className={styles}>{children}</Box>;
};
