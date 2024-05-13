import React from 'react'; // Import useState from React
import { Container, Heading, SimpleGrid, Divider, useBreakpointValue} from '@chakra-ui/react';
import Section from '../components/section';
import Layout from '../components/layouts/article';
import { ExperienceGridItem } from '../components/grid-item';
import LinfoxImage from '../public/images/experience/Linfox_logo.svg.png';
import DTLImage from '../public/images/experience/diversetechlab.png';
import HoneycombGrid from '../components/layouts/honeycombGrid';

const Experiences = () => {

  const isMobile = useBreakpointValue({ base: true, sm: false});
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={8} mt={4}>
          Experience
        </Heading>
        <Section>
        {isMobile ? (
        <HoneycombGrid maxHeight={'60.92px'} evenRows={3} oddRows={4} paddingVal={(3*2)*4}/>
        ) : (
        <HoneycombGrid maxHeight={'60.92px'} evenRows={5} oddRows={6} paddingVal={5*2 + 6}/>
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
