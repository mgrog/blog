import { ReactNode, useState } from 'react';
import * as styles from './LinkObfuscator.css';

type Props = {
  href: string;
  children?: ReactNode;
};

// hide from bots
const LinkObfuscator = ({ href, children }: Props) => {
  const [obfuscated, setObfuscated] = useState(true);

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <span
      className={styles.detectionBox}
      onMouseEnter={() => setObfuscated(false)}
      onMouseLeave={() => setObfuscated(true)}>
      {obfuscated ? (
        <a href='' onClick={handleClick}>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )}
    </span>
  );
};

export { LinkObfuscator };
