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
            Michael Grogan is a senior full-stack engineer with a decade of experience. Throughout
            his career he has worked with a broad range of industry tools and languages, including
            Typescript, Rust, Elixir, Python, React, React Native, Tailwinds, AWS, Docker, Axum,
            GraphQL, Postgres, and MongoDB. He has taken projects from zero to production
            deployments. He most recently worked for a venture funded DeFi company as a Dev Lead,
            shipping three projects while owning the full development process, architecting both the
            client-side applications and the Rust-based backends, and ultimately deploying them to
            AWS. During his time there he worked with a number of blockchain ecosystems such as
            Cosmos, Solana, and Ethereum. As a veteran engineer he is adaptable to any team or solo
            project and capable of delivering immediate business value to an organization in need of
            his skillset.
          </Text>
        </ContentContainer>
      </Section>
      <Section color='1'>
        <ContentContainer>
          <Flex col gap='12'>
            <Section.Heading as='h2'>Skills</Section.Heading>
            <Skill label='Languages'>Typescript/Javascript, Rust, Elixir, Python</Skill>
            <Skill label='Frontend'>
              React, React Native, Vite, Next.js, PWAs, css, sass, css-in-js, react-spring,
              framer-motion, tailwindcss, multiple state management libraries.
            </Skill>
            <Skill label='Blockchain'>Cosmos, Solana, Ethereum toolsets.</Skill>
            <Skill label='Backend'>
              Rust, Axum, Elixir, PostgreSQL, MongoDB, Docker. Experience with API design, REST,
              GraphQL.
            </Skill>
            <Skill label='Infrastructure'>
              AWS, Cloud Formation Templating, Docker, CI/CD, Github Actions, Turborepo.
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
