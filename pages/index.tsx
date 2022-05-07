import {Post} from '@components';
import {Flex, Text} from '@elements';
import type {GetStaticProps, NextPage} from 'next';
import fs from 'fs';
import rmMarkdown from 'remove-markdown';

export type Snippet = {
  postId: string;
  title: string;
  subtitle: string;
  content: string;
  tags: string[];
  published: string;
};

const Home: NextPage<{snippets: Snippet[]}> = ({snippets}: {snippets: Snippet[]}) => {
  return (
    <>
      <Text pad={1}>Posts</Text>
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let snippets: any[] = [];

  for (let file of fs.readdirSync('./pages/posts')) {
    let {meta} = await import(`./posts/${file}`);

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
  return {
    props: {snippets},
  };
};

export default Home;
