import {Post} from '@components';
import {ContentContainer, SiteText} from '@elements';
import fs from 'fs';
import type {GetStaticProps, NextPage} from 'next';
import {useScrollTo} from '~/src/hooks/useScrollTo';

const Posts: NextPage<{metadata: MetaData[]}> = ({metadata}: {metadata: MetaData[]}) => {
  const [ref, parentRef] = useScrollTo<HTMLHeadingElement>();

  return (
    <ContentContainer ref={parentRef} css={{paddingBottom: 50}}>
      <SiteText ref={ref} pad={1}>
        Posts
      </SiteText>
      {metadata.map((meta) => (
        <Post
          key={meta.postId}
          postId={meta.postId}
          image={`/post-images/${meta.postId}.jpeg`}
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
  let metadata: any[] = [];

  for (let file of fs.readdirSync('./pages/posts')) {
    if (file.includes('.mdx')) {
      let {meta} = await import(`./${file}`);

      let [postNum] = file.split('.');

      let map = {
        postId: postNum,
        title: meta?.title || null,
        subtitle: meta?.subtitle || null,
        content: meta?.snippet || null,
        tags: meta?.tags || null,
        published: meta?.published || null,
      };

      metadata.push(map);
    }
  }
  return {
    props: {metadata},
  };
};

export default Posts;
