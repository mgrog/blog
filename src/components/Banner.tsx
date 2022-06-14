/* eslint-disable @next/next/no-img-element */
import {Ridge0, Ridge1, Ridge2, Ridge3, Treeline} from '@assets/banner-layers';
import {Box, Parallax, Preserve} from '@elements';

function Banner() {
  return (
    <Preserve aria-label='illustration of layers of mountains in the distance, trees are in the foreground, the perspective shifts as you move down the page'>
      <Parallax layer={0} id='top'>
        <img src={Ridge0.src} alt='layer-0' />
      </Parallax>
      <Parallax layer={1}>
        <img src={Treeline.src} alt='layer-1' />
      </Parallax>
      <Parallax layer={2}>
        <img src={Ridge1.src} alt='layer-2' />
      </Parallax>
      <Parallax layer={3}>
        <img src={Ridge2.src} alt='layer-3' />
      </Parallax>
      <Parallax layer={4}>
        <img src={Ridge3.src} alt='layer-4' />
      </Parallax>
      <Parallax layer={5}>
        <Box css={{backgroundColor: '$sky', height: 1200, overflow: 'hidden'}} />
      </Parallax>
    </Preserve>
  );
}

export {Banner};
