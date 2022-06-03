import {Post} from '@components';
import {ContentContainer, SiteText} from '@elements';
import fs from 'fs';
import type {GetStaticProps, NextPage} from 'next';
import {useScrollTo} from '~/src/hooks/useScrollTo';

export type Snippet = {
  postId: string;
  title: string;
  subtitle: string;
  content: string;
  tags: string[];
  published: string;
};

const Posts: NextPage<{snippets: Snippet[]}> = ({snippets}: {snippets: Snippet[]}) => {
  const [ref, parentRef] = useScrollTo<HTMLHeadingElement>();

  return (
    <ContentContainer ref={parentRef} size={{'@initial': 'mobile', '@bp2': 'desktop'}}>
      <SiteText ref={ref} pad={1}>
        Posts
      </SiteText>
      {snippets.map((snip) => (
        <Post
          key={snip.postId}
          postId={snip.postId}
          image={'https://via.placeholder.com/500x300.png/e8e8e8/555'}
          title={snip.title}
          subtitle={snip.subtitle}
          published={snip.published}
          tags={snip.tags}>
          {snip.content}
        </Post>
      ))}
    </ContentContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let snippets: any[] = [];

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

      snippets.push(map);
    }
  }
  return {
    props: {snippets},
  };
};

export default Posts;
