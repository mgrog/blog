import React, {useState} from 'react';

const EmailObfuscator = () => {
  const [obfuscated, setObfuscated] = useState(true);

  const handleClick = () => {
    window.location.href = 'mailto:mikegroganware@gmail.com';
  };

  return obfuscated ? (
    <a onMouseEnter={() => setObfuscated(false)} href='' onClick={handleClick}>
      email
    </a>
  ) : (
    <a href='mailto:mikegroganware@gmail.com' onMouseLeave={() => setObfuscated(true)}>
      email
    </a>
  );
};

export {EmailObfuscator};
