/* eslint-disable @next/next/no-img-element */
import {Ridge0, Ridge1, Ridge2, Ridge3, Sky, Treeline} from '@assets/banner-layers';
import {Parallax, Preserve, Box} from '@elements';
import React from 'react';

function Banner() {
  return (
    <Preserve aria-label='illustration of layers of mountains in the distance, trees are in the foreground, the perspective shifts as you move down the page'>
      <Parallax layer={0} id='top'>
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
        <Box css={{backgroundColor: '$sky', height: 1200, overflow: 'hidden'}} />
      </Parallax>
    </Preserve>
  );
}

export {Banner};
