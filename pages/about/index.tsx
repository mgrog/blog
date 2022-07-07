import beachPic from '@assets/me-beach-2.jpg';
import { Flex, Text } from '@components';
import { ContentContainer, Section } from '@layout';
import GetInTouch from '@pageMarkdown/GetInTouch.mdx';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const About: NextPage<{}> = () => {
  return (
    <Flex col>
      <Head>
        <title>About Page</title>
      </Head>
      <Section>
        <ContentContainer>
          <Section.Heading fontSize={3} paddingBottom='6'>
            I&apos;m Mike Grogan, a full stack developer based in the US
          </Section.Heading>

          <Text as='p' fontSize={1}>
            I got my start building spas in angularjs and have been building them ever since.
            Nowadays, I like to use React, but I&apos;m always up for learning new things! Lately
            I&apos;ve been learning a lot of Elixir, but I&apos;ve been dabbling in Rust and
            Rescript here and there too. I like building things, and sometimes those things need
            both frontends and backends, so now I write both! I definitely like to nerd out about
            technology and I sometimes have some strong opinions about them, but I also believe in
            whatever lets you ship!
          </Text>

          <Text as='p' fontSize={1} paddingY='5'>
            Anyway, enough about work, here&apos;s me:
          </Text>

          <figure>
            <Image
              placeholder='blur'
              width={400}
              height={300}
              layout='responsive'
              src={beachPic}
              alt='picture of me at the beach'
            />
            <Text as='figcaption' fontSize={0}>
              Me trying not to squint on a beach in Mexico
            </Text>
          </figure>
        </ContentContainer>
      </Section>
      <Section color={'1'}>
        <ContentContainer>
          <Section.Heading fontSize={3} paddingBottom='6'>
            About me
          </Section.Heading>
          <Text as='p' fontSize={1}>
            I grew up in Connecticut where I earned a degree in Computer Engineering at UCONN. A few
            years later I moved to Denver, Colorado and stayed there for four years. As an avid
            skier, I&apos;ve been to at least a dozen different mountains in Colorado, Utah, and
            even Japan! I love to travel, and last year I was fortunate enough to be able to go to
            10 different countries. Now, I&apos;m back in the states and looking for a new adventure
            in a new city!
          </Text>
        </ContentContainer>
      </Section>
      <Section color={'2'}>
        <ContentContainer>
          <Section.Heading paddingBottom='none'>Get in touch!</Section.Heading>
          <GetInTouch />
        </ContentContainer>
      </Section>
    </Flex>
  );
};

export default About;
