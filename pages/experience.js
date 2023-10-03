import { Container, Heading, SimpleGrid, Divider, AspectRatio } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ExperienceGridItem } from '../components/grid-item'
import LinfoxImage from '../public/images/experience/Linfox_logo.svg.png'
import DTLImage from '../public/images/experience/diversetechlab.png'
import HoneycombGrid from '../components/layouts/honeycombGrid'
import JSLogo from '../public/images/experience/javascript_logo.jpg'
const Experiences = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={4}>
                Experience
            </Heading>
            <Section>
                <HoneycombGrid honeycombs={honeycombsData} hexagonWidth="150px" hexagonHeight="173px" />
                <Divider/>
                <SimpleGrid columns={[1,1,2]} gap={6} mt={4}>
            <Section>
            <AspectRatio maxW='560px' ratio={4 / 3}>
                <ExperienceGridItem id="diversetechlab" title="Diverse Tech Lab" thumbnail={DTLImage} height={50}>
                    Full-Stack Development Intern
                </ExperienceGridItem>
            </AspectRatio>
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
const honeycombsData = [
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"}
]
export default Experiences

