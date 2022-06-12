import {Box} from '@elements';
import React, {useState} from 'react';

// hide from bots
const LinkObfuscator = ({href, display}: {href: string; display: string}) => {
  const [obfuscated, setObfuscated] = useState(true);

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Box
      as='span'
      css={{display: 'inline-block', padding: 50, margin: -50}}
      onMouseEnter={() => setObfuscated(false)}
      onMouseLeave={() => setObfuscated(true)}>
      {obfuscated ? (
        <a href='' onClick={handleClick}>
          {display}
        </a>
      ) : (
        <a href={href}>{display}</a>
      )}
    </Box>
  );
};

export {LinkObfuscator};
