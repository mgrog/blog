/* eslint-disable @next/next/no-img-element */
import {Ridge0, Ridge1, Ridge2, Ridge3, Sky, Treeline} from '@assets/banner-layers';
import {Parallax, Preserve, Box} from '@elements';
import React from 'react';

function Banner() {
  console.log(Ridge0.src, Ridge0);
  return (
    <Preserve aria-label='illustration of layers of mountains in the distance, trees are in the foreground, the perspective shifts as you move down the page'>
      <Parallax layer={0} id='top'>
        {/* <Ridge0 /> */}
        <img src={Ridge0.src} />
      </Parallax>
      <Parallax layer={1}>
        <img src={Treeline.src} />
      </Parallax>
      <Parallax layer={2}>
        <img src={Ridge1.src} />
      </Parallax>
      <Parallax layer={3}>
        <img src={Ridge2.src} />
      </Parallax>
      <Parallax layer={4}>
        <img src={Ridge3.src} />
      </Parallax>
      <Parallax layer={5}>
        <Box css={{backgroundColor: '$sky', height: 1200, overflow: 'hidden'}} />
      </Parallax>
    </Preserve>
  );
}

export {Banner};
