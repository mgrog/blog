/* eslint-disable @next/next/no-img-element */
import { Ridge0, Ridge1, Ridge2, Ridge3, Treeline } from '@assets/banner-layers';
import { Box, Parallax } from '@components';

function Banner() {
  return (
    <Parallax.Preserve aria-label='illustration of layers of mountains in the distance, trees are in the foreground, the perspective shifts as you move down the page'>
      <Parallax.BannerLayer layer={0} id='content'>
        <img src={Ridge0.src} alt='layer-0' />
      </Parallax.BannerLayer>
      <Parallax.BannerLayer layer={1}>
        <img src={Treeline.src} alt='layer-1' />
      </Parallax.BannerLayer>
      <Parallax.BannerLayer layer={2}>
        <img src={Ridge1.src} alt='layer-2' />
      </Parallax.BannerLayer>
      <Parallax.BannerLayer layer={3}>
        <img src={Ridge2.src} alt='layer-3' />
      </Parallax.BannerLayer>
      <Parallax.BannerLayer layer={4}>
        <img src={Ridge3.src} alt='layer-4' />
      </Parallax.BannerLayer>
    </Parallax.Preserve>
  );
}

export { Banner };
