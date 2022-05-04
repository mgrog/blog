import {Box, Flex, Text} from '@elements';
import Image from 'next/image';
import Link from 'next/link';
import React, {ReactNode} from 'react';
import {Snippet} from '~/pages';
import {styled} from '~/stitches.config';

type Props = {
  image: string;
  children?: ReactNode;
} & Omit<Snippet, 'content'>;

let Post = ({image, title, subtitle, postId, children, tags}: Props) => {
  return (
    <StyledPost reverse={!!(+postId % 2)} w-full>
      <StyledChildren col>
        <Tags tags={tags} />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Content>{children}</Content>
        <Link href={`/posts/${postId}`}>Read Post ➔</Link>
      </StyledChildren>
      <Box css={{width: '50%', position: 'relative'}}>
        <Image layout={'fill'} src={image} alt='post image' />
      </Box>
    </StyledPost>
  );
};

const Title = ({children}: {children: ReactNode}) => (
  <Text alternate weight={600} pad={1}>
    {children}
  </Text>
);

const SubTitle = ({children}: {children: ReactNode}) => (
  <Text alternate weight={400} size={2} pad={0}>
    {children}
  </Text>
);

const Content = ({children}: {children: ReactNode}) => (
  <Text as='p' size={1} pad={1}>
    {children}
  </Text>
);

const Tags = ({tags}: {tags: string[]}) => (
  <Flex css={{gap: 5}}>
    {tags.map((tag, i) => (
      <Text as='h3' key={i} size={2} alternate weight={600} pad={0}>
        #{tag}
      </Text>
    ))}
  </Flex>
);

Post = Object.assign(Post, {Title, SubTitle, Content, Tags});

export {Post};

// styles

const StyledChildren = styled(Flex, {
  width: '50%',
});

const StyledPost = styled(Flex, {
  margin: '60px 0',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': {
    flexDirection: 'row',
  },
  variants: {
    reverse: {
      true: {
        flexDirection: 'row-reverse',
        [`& ${StyledChildren}`]: {
          '@initial': {
            paddingLeft: 10,
          },
          '@bp2': {
            paddingLeft: 40,
          },
        },
      },
      false: {
        [`& ${StyledChildren}`]: {
          '@initial': {
            paddingRight: 10,
          },
          '@bp2': {
            paddingRight: 40,
          },
        },
      },
    },
  },
});
