import {Flex, SiteText} from '@elements';
import {format, parse} from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, {ReactNode} from 'react';
import {styled} from '~/stitches.config';

type Props = {
  imgProps: ImgProps;
  children?: ReactNode;
} & Omit<MetaData, 'content'>;

let Post = ({imgProps, title, subtitle, postId, children, tags, published}: Props) => {
  return (
    <StyledPost layout={{'@initial': 'col', '@bp2': +postId % 2 ? 'row' : 'reverse'}}>
      <PostImg>
        <Image
          {...imgProps}
          placeholder='blur'
          layout={'fill'}
          quality={40}
          alt='post image'
          objectFit='contain'
          objectPosition='left'
        />
      </PostImg>
      <PostChildren col layout={{'@initial': 'normal', '@bp1': 'w-min', '@bp2': 'h-fixed'}}>
        <Tags tags={tags} />
        <Title>{title}</Title>
        <PublishedDate>{published}</PublishedDate>
        <SubTitle>{subtitle}</SubTitle>
        <Content>{children}</Content>
        <Link href={`/posts/${postId}`}>Read Post &rarr;</Link>
      </PostChildren>
    </StyledPost>
  );
};

const Title = ({children}: {children: string}) => (
  <StyledTitle
    css={{marginBottom: 0}}
    nowrap={{'@initial': false, '@bp1': true}}
    dangerouslySetInnerHTML={{__html: children}}
  />
);

const PublishedDate = ({children}: {children: string}) => (
  <SiteText size={1}>{format(parse(children, 'M/d/yyyy', Date.now()), "LLL d, ''yy")}</SiteText>
);

const SubTitle = ({children}: {children: ReactNode}) => (
  <SiteText weight={400} size={3} pad={0}>
    {children}
  </SiteText>
);

const Content = ({children}: {children: ReactNode}) => (
  <SiteText as='p' size={1} pad={1}>
    {children}
  </SiteText>
);

const Tags = ({tags}: {tags: string[]}) => (
  <Flex css={{gap: 5}}>
    {tags.map((tag, i) => (
      <SiteText as='h3' key={i} size={3} weight={600} pad={0}>
        #{tag}
      </SiteText>
    ))}
  </Flex>
);

Post = Object.assign(Post, {Title, SubTitle, Content, Tags});

export {Post};

// styles

const PostChildren = styled(Flex, {
  width: '100%',
  overflow: 'hidden',
  paddingBottom: 10,
  variants: {
    layout: {
      'w-min': {
        minWidth: 430,
      },
      'h-fixed': {
        height: 292,
      },
      normal: {
        minWidth: 0,
        height: 'auto',
      },
    },
  },
});

const PostImg = styled(Flex, {
  width: '100%',
  position: 'relative',
  height: 310,
  '@media (max-width: 380px)': {
    height: 290,
  },
});

const StyledTitle = styled(SiteText, {
  variants: {
    nowrap: {
      true: {
        whiteSpace: 'nowrap',
      },
      false: {
        whiteSpace: 'normal',
      },
    },
  },
});

const StyledPost = styled('div', {
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  variants: {
    layout: {
      col: {
        flexDirection: 'column',
        maxWidth: 500,
      },
      row: {
        flexDirection: 'row',
        maxWidth: '100%',
        margin: '60px 0',
        [`& ${PostChildren}`]: {
          paddingLeft: 40,
        },
      },
      reverse: {
        maxWidth: '100%',
        flexDirection: 'row-reverse',
        margin: '60px 0',
        [`& ${PostChildren}`]: {
          paddingRight: 40,
        },
      },
    },
  },
});
