import {MutableRefObject, useEffect, useRef} from 'react';

export function useScrollTo<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const parentRef = useRef<any>(null);

  useEffect(() => {
    let scrollHeight = parentRef.current?.scrollHeight || 0;

    if (scrollHeight > window.innerHeight - 600) {
      ref.current?.scrollIntoView({block: 'center'});
    }
  }, [ref, parentRef]);

  return [ref, parentRef];
}
