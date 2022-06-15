import {Box} from '@elements';
import {ReactNode, useState} from 'react';
import {styled} from '~/stitches.config';

type Props = {
  href: string;
  children?: ReactNode;
};

// hide from bots
const LinkObfuscator = ({href, children}: Props) => {
  const [obfuscated, setObfuscated] = useState(true);

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <DetectionBox
      onMouseEnter={() => setObfuscated(false)}
      onMouseLeave={() => setObfuscated(true)}>
      {obfuscated ? (
        <a href='' onClick={handleClick}>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )}
    </DetectionBox>
  );
};

const DetectionBox = styled('span', {
  display: 'inline-block',
  padding: 5,
  margin: -5,
});

export {LinkObfuscator};
