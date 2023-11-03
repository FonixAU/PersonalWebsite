import dynamic from 'next/dynamic';
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import React from 'react'
import Layout from '../components/layouts/article'
import LoadingBar from '../components/loadingbar'
import { ExperienceGridItem } from '../components/grid-item'
import LinfoxImage from '../public/images/experience/Linfox_logo.svg.png'
import DTLImage from '../public/images/experience/diversetechlab.png'
const HoneycombGrid = dynamic(() => import('../components/layouts/honeycombGrid'), {
    loading: () => <LoadingBar/>, // You can customize the loading component
  });
const Experiences = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={8} mt={4}>
                Experience
            </Heading>
            <Section >
                <HoneycombGrid />
                <Divider mt={8}/>
            <SimpleGrid columns={[1,1,2]} gap={6} mt={4}>
            <Section>
                <ExperienceGridItem id="diversetechlab" title="Diverse Tech Lab" thumbnail={DTLImage} height={50}>
                    Full-Stack Development Intern
                </ExperienceGridItem>
            </Section>
            <Section>
                <ExperienceGridItem id="linfox" title="Linfox" thumbnail={LinfoxImage}>
                    IT Graduate
                </ExperienceGridItem>
            </Section>
            </SimpleGrid>
            </Section>
             </Container>
        </Layout>
    )
}

export default Experiences

