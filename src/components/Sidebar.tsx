import {CSS} from '@stitches/react/types/css-util';
import React from 'react';
import {styled} from '~/stitches.config';

type Props = {
  children: React.ReactNode;
  side?: 'left' | 'right';
  css?: CSS;
};

function Sidebar({children, side, css}: Props) {
  return (
    <StyledSidebar side={side} size={{'@initial': 'mobile', '@bp1': 'desktop'}} css={css}>
      <StyledContent side={side}>{children}</StyledContent>
    </StyledSidebar>
  );
}

export {Sidebar};

const StyledSidebar = styled('div', {
  height: '100vh',
  lineHeight: '1.8em',
  padding: '20px 0px',
  minWidth: 60,

  variants: {
    size: {
      mobile: {
        maxWidth: '40px',
      },
      desktop: {
        maxWidth: '200px',
      },
    },
    side: {
      left: {
        width: 75,
      },
      right: {},
    },
  },
});

// styles

const StyledContent = styled('div', {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  variants: {
    side: {
      left: {
        paddingBottom: 50,
      },
      right: {},
    },
  },
});
