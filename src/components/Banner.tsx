/* eslint-disable @next/next/no-img-element */
import {Ridge0, Treeline, Ridge1, Ridge2, Moon, Ridge3} from '@assets';
import {Parallax, Preserve} from '@elements';
import React, {ReactNode} from 'react';

function Banner() {
  const scaleFactor = 1;

  return (
    <Preserve aria-label='mountain-picture'>
      <Parallax layer={0}>
        <Ridge0
          transform={`scale(${0.8 * scaleFactor})`}
          transform-origin='top left'
          height={300}
        />
      </Parallax>
      <Parallax layer={1}>
        <Treeline
          transform={`scale(${1 * scaleFactor})`}
          transform-origin='top left'
          height={1000}
        />
      </Parallax>
      <Parallax layer={2}>
        <Ridge1
          transform={`scale(${0.8 * scaleFactor})`}
          transform-origin='top left'
          height={700}
        />
      </Parallax>
      <Parallax layer={3}>
        <Ridge2 transform={`scale(${0.7 * scaleFactor})`} transform-origin='top left' />
      </Parallax>
      <Parallax layer={4}>
        <Ridge3 transform={`scale(${0.88 * scaleFactor})`} transform-origin='top left' />
      </Parallax>
    </Preserve>
  );
}

export {Banner};
