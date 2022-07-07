import { Flex, Text } from '@components';
import clsx from 'clsx';
import { format, parse } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';
import { ImgProps, MetaData } from '~/pages/posts';
import * as styles from './Post.css';

type Props = {
  imgProps: ImgProps;
  children?: ReactNode;
} & Omit<MetaData, 'content'>;

let Post = ({ imgProps, title, subtitle, postId, children, tags, published }: Props) => {
  return (
    <Flex
      position='relative'
      flexDirection={{ bp0: 'column', bp2: +postId % 2 ? 'row' : 'row-reverse' }}
      marginY={{ bp2: '14' }}
      maxWidth={{ bp0: 'mobileContentMax', bp2: 'full' }}
      gap={{ bp2: '8' }}>
      <Flex className={styles.postImg}>
        <Image
          {...imgProps}
          placeholder='blur'
          layout={'fill'}
          quality={40}
          alt='post image'
          objectFit='contain'
          objectPosition='left'
        />
      </Flex>
      <PostChildren>
        <Tags tags={tags} />
        <Title>{title}</Title>
        <PublishedDate>{published}</PublishedDate>
        <SubTitle>{subtitle}</SubTitle>
        <Content>{children}</Content>
        <Link href={`/posts/${postId}#content`}>Read Post &rarr;</Link>
      </PostChildren>
    </Flex>
  );
};

const Title = ({ children }: { children: string }) => (
  <Text as='h1' fontSize={4} paddingY='5' dangerouslySetInnerHTML={{ __html: children }} />
);

const PublishedDate = ({ children }: { children: string }) => (
  <Text as='h5' fontSize={1}>
    {format(parse(children, 'M/d/yyyy', Date.now()), "LLL d, ''yy")}
  </Text>
);

const SubTitle = ({ children }: { children: ReactNode }) => (
  <Text as='h2' fontSize={3} fontWeight={400} paddingY='2'>
    {children}
  </Text>
);

const Content = ({ children }: { children: ReactNode }) => (
  <Text as='p' fontSize={1} paddingBottom='2'>
    {children}
  </Text>
);

const Tags = ({ tags }: { tags: string[] }) => (
  <Flex gap='3'>
    {tags.map((tag, i) => (
      <Text as='h3' key={i} fontSize={3} fontWeight={600} paddingY='none'>
        #{tag}
      </Text>
    ))}
  </Flex>
);

type PostChildrenProps = styles.PostChildrenVariants & React.HTMLAttributes<HTMLDivElement>;

const PostChildren = ({ className, layout, children }: PropsWithChildren<PostChildrenProps>) => (
  <Flex col className={clsx(className, styles.postChildrenVariants({ layout }))}>
    {children}
  </Flex>
);

Post = Object.assign(Post, { Title, SubTitle, Content, Tags });

export { Post };
