import { Box } from '@components';
import { PropsWithChildren } from 'react';
import * as styles from './Parallax.css';

const BannerLayer = ({ layer, children }: PropsWithChildren<{ layer?: styles.LayerProps }>) => {
  return <Box className={styles.item({ layer })}>{children}</Box>;
};
const Perspective = ({ children }: PropsWithChildren<{}>) => {
  return <Box className={styles.perspective}>{children}</Box>;
};
const Preserve = ({ children }: PropsWithChildren<{}>) => {
  return <Box className={styles.preserve}>{children}</Box>;
};

const Parallax = Object.assign({
  BannerLayer,
  Perspective,
  Preserve,
});

export { Parallax };
