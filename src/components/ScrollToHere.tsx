import React from 'react';
import {useScrollTo} from '~/src/hooks/useScrollTo';

const ScrollToHere = () => {
  const [ref, parentRef] = useScrollTo<HTMLDivElement>();
  parentRef.current = 800;

  return <div ref={ref} />;
};

export {ScrollToHere};