import { Box, Button, Flex, Text } from '@components';
import { ContentContainer, Section } from '@layout';
import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

const CV: NextPage<{}> = () => {
  return (
    <Flex col>
      <Head>
        <title>Resume Page</title>
      </Head>
      <Section>
        <ContentContainer>
          <Section.Heading paddingBottom='12'>CV/Resume</Section.Heading>
          <Text as='p' fontSize={1}>
            Michael Grogan is a senior fullstack developer with an emphasis on frontend
            technologies. His industry experience spans 7 years and includes react, react-native,
            angular, node, elixir, graphQL, and docker technologies. He has led small teams and
            mentored junior devs, as well as been involved in high-level decision-making in his
            various roles.
          </Text>
          <Text as='p' fontSize={1}>
            Michael is a strong communicator for both business and technological needs, and takes
            pride in writing concise, testable, and semantic code, as well as aesthetic and
            intuitive UIs. He has received a grant for and subsequently shipped software for a top
            100 crypto project, and is currently working on a React Native app and Elixir API for
            web3 platforms during his time between roles.
          </Text>
        </ContentContainer>
      </Section>
      <Section color='1'>
        <ContentContainer>
          <Flex col gap='12'>
            <Section.Heading as='h2'>Skills</Section.Heading>
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
      <Section color='2'>
        <Flex centered>
          <Button as='a' href='/files/Resume.pdf' target='_blank' rel='noopener noreferrer'>
            Download pdf
          </Button>
        </Flex>
      </Section>
    </Flex>
  );
};

const Skill = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <Box>
      <Text as='h3' fontSize={3} fontWeight={700} marginTop='0' marginBottom='3'>
        {label}
      </Text>
      <Text as='p' fontSize={1} margin='0'>
        {children}
      </Text>
    </Box>
  );
};

export default CV;
