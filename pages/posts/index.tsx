import {Post} from '@components';
import {ContentContainer, SiteText} from '@elements';
import {compareDesc, parse} from 'date-fns';
import fs from 'fs';
import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import {getPlaiceholder} from 'plaiceholder';

export type ImgProps = {
  blurDataURL: string;
  src: string;
  height?: number;
  width?: number;
  type?: string | undefined;
};

export type MetaData = {
  postId: string;
  title: string;
  subtitle: string;
  content: string;
  tags: string[];
  published: string;
  imgProps: ImgProps;
};

const Posts: NextPage<{metadata: MetaData[]}> = ({metadata}: {metadata: MetaData[]}) => {
  return (
    <ContentContainer css={{paddingBottom: 50}}>
      <Head>
        <title>Blog Posts</title>
      </Head>
      <SiteText pad={1}>Posts</SiteText>
      {metadata.map((meta) => (
        <Post
          key={meta.postId}
          postId={meta.postId}
          imgProps={meta.imgProps}
          title={meta.title}
          subtitle={meta.subtitle}
          published={meta.published}
          tags={meta.tags}>
          {meta.content}
        </Post>
      ))}
    </ContentContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let metadata: MetaData[] = [];

  for (let file of fs.readdirSync('./pages/posts')) {
    if (file.includes('.mdx')) {
      let {meta} = await import(`./${file}`);

      let [postNum] = file.split('.');

      const {base64, img} = await getPlaiceholder(`/post-images/${postNum}.jpeg`, {size: 10});

      let map = {
        postId: postNum,
        title: meta?.title || null,
        subtitle: meta?.subtitle || null,
        content: meta?.snippet || null,
        tags: meta?.tags || null,
        published: meta?.published || null,
        imgProps: {
          src: img.src,
          blurDataURL: base64,
        },
      };

      metadata.push(map);
    }
  }
  metadata.sort((a, b) =>
    compareDesc(
      parse(a.published, 'M/d/yyyy', Date.now()),
      parse(b.published, 'M/d/yyyy', Date.now()),
    ),
  );

  return {
    props: {metadata},
  };
};

export default Posts;
