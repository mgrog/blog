/** @type {import('next').NextConfig} */

import rehypePrism from '@mapbox/rehype-prism';
import nextMdx from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import autolinker from 'rehype-autolink-headings';
import { h, s } from 'hastscript';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const nextConfig = {
  reactStrictMode: true,
};

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      () =>
        autolinker({
          behavior: 'append',
          properties: {
            class: 'autolink-header',
            ariaHidden: true,
            tabIndex: -1,
          },
          content: [h('span.sr-only', 'permalink'), h('span.autolink-icon', '#')],
        }),
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: '@mdx-js/react',
  },
});

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(
  withMDX({
    ...nextConfig,
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  }),
);
