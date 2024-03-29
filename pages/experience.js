import React, { useState } from 'react'; // Import useState from React
import { Container, Heading, SimpleGrid, Divider, Progress } from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ExperienceGridItem } from '../components/grid-item';
import LinfoxImage from '../public/images/experience/Linfox_logo.svg.png';
import DTLImage from '../public/images/experience/diversetechlab.png';
import HoneycombGrid from '../components/layouts/honeycombGrid';

const Experiences = () => {
  // Move the useState hook inside the functional component
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={8} mt={4}>
          Experience
        </Heading>
        <Section>
          {isLoading ? (
            <Progress size='sm' isIndeterminate />
          ) : (
            <HoneycombGrid onload={() => setIsLoading(false)} />
            )}

          <Divider mt={8} />
          <SimpleGrid columns={[1, 1, 2]} gap={6} mt={4}>
            <Section>
              <ExperienceGridItem
                id="diversetechlab"
                title="Diverse Tech Lab"
                thumbnail={DTLImage}
                height={50}
              >
                Full-Stack Development Intern
              </ExperienceGridItem>
            </Section>
            <Section>
              <ExperienceGridItem
                id="linfox"
                title="Linfox"
                thumbnail={LinfoxImage}
              >
                IT Graduate
              </ExperienceGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Experiences;
