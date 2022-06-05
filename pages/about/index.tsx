import {ContentContainer, Flex, Section, SiteText} from '@elements';
import {NextPage} from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import beachPic from '@assets/me-beach.jpg';
import {useScrollTo} from '~/src/hooks/useScrollTo';

const GetInTouch = dynamic(() => import('@pageMarkdown/GetInTouch.mdx'));

const About: NextPage<{}> = () => {
  const [scrollRef, parentRef] = useScrollTo<HTMLHeadingElement>();

  return (
    <Flex col ref={parentRef}>
      <Section>
        <ContentContainer>
          <SiteText ref={scrollRef} size={3}>
            I&apos;m Mike Grogan, a full stack developer based in the US
          </SiteText>

          <SiteText as='p' size={1}>
            I got my start building spas in angularjs and have been building them ever since.
            Nowadays, I like to use React, but I&apos;m always up for learning new things! Lately
            I&apos;ve been learning a lot of Elixir, but I&apos;ve been dabbling in Rust and
            Rescript here and there too. I like building things, and sometimes those things need
            both frontends and backends, so now I write both! I definitely like to nerd out about
            technology and I sometimes have some strong opinions about them, but I also believe in
            whatever lets you ship!
          </SiteText>

          <SiteText as='p' size={1}>
            Anyway, enough about work, here&apos;s me:
          </SiteText>

          <figure>
            <Image
              placeholder='blur'
              width={400}
              height={300}
              layout='responsive'
              src={beachPic}
              alt='picture of me at the beach'
            />
            <SiteText as='figcaption' size={1}>
              Me trying not to squint on a beach in Mexico
            </SiteText>
          </figure>
        </ContentContainer>
      </Section>
      <Section color={1}>
        <ContentContainer>
          <SiteText size={3}>About me</SiteText>
          <SiteText as='p' size={1}>
            I grew up in Connecticut where I earned a degree in Computer Engineering at UCONN. A few
            years later I moved to Denver, Colorado and stayed there for four years. As an avid
            skier, I&apos;ve been to at least a dozen different mountains in Colorado, Utah, and
            even Japan! I love to travel, and last year I was fortunate enough to be able to go to
            10 different countries. Now, I&apos;m back in the states and looking for a new adventure
            in a new city!
          </SiteText>
        </ContentContainer>
      </Section>
      <Section color={2}>
        <ContentContainer>
          <SiteText size={3}>Get in touch!</SiteText>
          <GetInTouch />
        </ContentContainer>
      </Section>
    </Flex>
  );
};

export default About;
