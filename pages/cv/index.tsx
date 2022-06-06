import {Flex, SiteText, Section, Box} from '@elements';
import {NextPage} from 'next';
import React, {ReactNode} from 'react';
import {ContentContainer} from '@elements';
import {useScrollTo} from '~/src/hooks/useScrollTo';
import {styled} from '~/stitches.config';

const CV: NextPage<{}> = () => {
  const [scrollRef, parentRef] = useScrollTo<HTMLHeadingElement>();

  return (
    <Flex col ref={parentRef}>
      <Section>
        <ContentContainer>
          <SiteText as='h1' size={3}>
            CV/Resume
          </SiteText>
          <SiteText as='p' size={1} ref={scrollRef}>
            Michael Grogan is a senior fullstack developer with an emphasis on frontend
            technologies. His industry experience spans 7 years and includes react, react-native,
            angular, node, elixir, graphQL, and docker technologies. He has led small teams and
            mentored junior devs, as well as been involved in high-level decision-making in his
            various roles.
          </SiteText>
          <SiteText as='p' size={1}>
            Michael is a strong communicator for both business and technological needs, and takes
            pride in writing concise, testable, and semantic code, as well as aesthetic and
            intuitive UIs. He has received a grant for and subsequently shipped software for a top
            100 crypto project, and is currently working on a React Native app and Elixir API for
            web3 platforms during his time between roles.
          </SiteText>
        </ContentContainer>
      </Section>
      <Section color={1}>
        <ContentContainer>
          <SiteText as='h2'>Skills</SiteText>
          <Flex col css={{gap: 50}}>
            <Skill label='Frontend'>
              React and React Native. Node.js for backend-for-frontends and jamstack. Experience
              with Babel, Webpack, Vite, Next.js, css, sass, css-in-js, svg rendering, react-spring,
              Redux and Jotai state management libraries.
            </Skill>
            <Skill label='Backend'>
              Elixir and Phoenix, PostgreSQL, Docker. Experience with API and liveview/eex
              development.
            </Skill>
            <Skill label='Soft Skills'>
              Years of experience working at both large and small companies with colleagues from
              many different backgrounds. Junior dev mentor. Creative problem-solver, easy to get
              along with, and good collaborator. Usually has an answer for that issue you can&apos;t
              seem to crack.
            </Skill>
          </Flex>
        </ContentContainer>
      </Section>
      <Section color={2}>
        <Flex centered>
          <DlBtn href='/files/Resume.pdf' target='_blank' rel='noopener noreferrer'>
            Download pdf
          </DlBtn>
        </Flex>
      </Section>
    </Flex>
  );
};

const Skill = ({label, children}: {label: string; children: ReactNode}) => {
  return (
    <Box>
      <SiteText as='h3' size={2} weight={700} css={{marginTop: 0, marginBottom: 10}}>
        {label}
      </SiteText>
      <SiteText as='p' size={1} css={{margin: 0}}>
        {children}
      </SiteText>
    </Box>
  );
};

const DlBtn = styled('a', {
  textDecoration: 'none',
  padding: '10px 20px',
  color: 'white',
  backgroundColor: 'var(--primary)',
  fontSize: '1.2em',
  fontFamily: 'Maven Pro, sans-serif',
  borderRadius: 999,
  border: 'solid 3px $sky',
  '&:hover, &:active': {
    backgroundColor: '$darker-primary',
    borderColor: '$primary',
    color: '$primary',
  },
});

export default CV;
