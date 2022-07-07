import { Box, BoxProps, Text } from '@components';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { Atoms } from '~/src/css';
import * as styles from './Section.css';

type Props = Omit<Atoms, 'color'> &
  styles.VariantProps &
  React.HTMLAttributes<HTMLDivElement> & {
    as?: BoxProps['as'];
  };

const SectionComponent = ({
  as = 'section',
  children,
  color = '0',
  className,
}: PropsWithChildren<Props>) => {
  return (
    <Box as={as} paddingY='20' className={clsx(className, styles.variants({ color }))}>
      {children}
    </Box>
  );
};

type HeadingProps = Atoms &
  React.HTMLAttributes<HTMLHeadingElement> & {
    as?: BoxProps['as'];
  };

const Heading = ({ as = 'h1', fontSize = 3, ...props }: HeadingProps) => (
  <Text as={as} fontSize={fontSize} {...props} />
);

const Section = Object.assign(SectionComponent, { Heading });

export { Section };
