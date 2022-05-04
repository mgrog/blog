import {Flex, Text} from '@elements';
import React, {ReactNode} from 'react';
import {styled} from '~/stitches.config';

type Props = {
  img: string;
  children?: ReactNode;
};

function Header({img, children}: Props) {
  return (
    <StyledFlex centered css={{background: `url(${img})`, backgroundRepeat: 1}}>
      <Text color='light'>{children}</Text>
    </StyledFlex>
  );
}

const StyledFlex = styled(Flex, {
  width: '100vw',
  height: 300,
});

export {Header};
