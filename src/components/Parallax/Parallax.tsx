import { Box } from '@components';
import { PropsWithChildren } from 'react';
import * as styles from './Parallax.css';

const Item = ({ layer, children }: PropsWithChildren<{ layer?: styles.LayerProps }>) => {
  return <Box className={styles.item({ layer })}>{children}</Box>;
};
const Perspective = ({ children }: PropsWithChildren<{}>) => {
  return <Box className={styles.perspective}>{children}</Box>;
};
const Preserve = ({ children }: PropsWithChildren<{}>) => {
  return <Box className={styles.preserve}>{children}</Box>;
};

const Parallax = Object.assign({
  Item,
  Perspective,
  Preserve,
});

export { Parallax };
