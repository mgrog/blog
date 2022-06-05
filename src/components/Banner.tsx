/* eslint-disable @next/next/no-img-element */
import {Ridge0, Ridge1, Ridge2, Ridge3, Sky, Treeline} from '@assets/banner-layers';
import {Parallax, Preserve} from '@elements';
import React from 'react';

function Banner() {
  return (
    <Preserve aria-label='layers of mountains in the distance, trees are in the foreground, the perspective shifts as you move down the page'>
      <Parallax layer={0}>
        <Ridge0 height={500} />
      </Parallax>
      <Parallax layer={1}>
        <Treeline height={800} />
      </Parallax>
      <Parallax layer={2}>
        <Ridge1 height={800} />
      </Parallax>
      <Parallax layer={3}>
        <Ridge2 height={1000} />
      </Parallax>
      <Parallax layer={4}>
        <Ridge3 height={1000} />
      </Parallax>
      <Parallax layer={5}>
        <Sky height={1000} />
      </Parallax>
    </Preserve>
  );
}

export {Banner};
