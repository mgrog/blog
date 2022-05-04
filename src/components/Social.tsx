import React from 'react';
import { styled } from '~/stitches.config';

type Props = {
  href: string;
  path: string;
  size: number;
};

const Social = ({ href, path, size }: Props) => {
  return (
    <StyledSocial>
      <a href={href}>
        <img src={path} height={size} width={size} />
      </a>
    </StyledSocial>
  );
};

export { Social };

// styles

const StyledSocial = styled('div', {
  padding: '10px 20px',
});
