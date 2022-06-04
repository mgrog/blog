/* eslint-disable @next/next/no-img-element */
import {Ridge0, Ridge1, Ridge2, Ridge3, Sky, Treeline} from '@assets/banner-layers';
import {Parallax, Preserve} from '@elements';
import React from 'react';

function Banner() {
  const scaleFactor = 1;

  return (
    <Preserve aria-label='layers of mountains in the distance, trees are in the foreground, the perspective shifts as you move down the page'>
      <Parallax layer={0}>
        <Ridge0
          transform={`scale(${0.8 * scaleFactor})`}
          transform-origin='top left'
          height={500}
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
      <Parallax layer={5}>
        <Sky height={1000} />
      </Parallax>
    </Preserve>
  );
}

export {Banner};
