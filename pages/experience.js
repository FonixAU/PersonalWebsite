import { Container, Heading, SimpleGrid, Divider, AspectRatio } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ExperienceGridItem } from '../components/grid-item'
import LinfoxImage from '../public/images/experience/Linfox_logo.svg.png'
import DTLImage from '../public/images/experience/diversetechlab.png'
import HoneycombGrid from '../components/layouts/honeycombGrid'
import JSLogo from '../public/images/experience/stack/javascript_logo.jpg'
import VueLogo from '../public/images/experience/stack/vuejs_logo.png'
import SAPLogo from '../public/images/experience/stack/SAP_logo.png'

const Experiences = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={8} mt={4}>
                Experience
            </Heading>
            <Section>
                <HoneycombGrid honeycombs={honeycombsData} hexagonWidth="10%" hexagonHeight="115%" />
                <Divider mt={8}/>
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
    {imageUrl: JSLogo, alt:"Javascript"},
    {imageUrl: VueLogo, alt:"VueJS Logo"},
    {imageUrl: SAPLogo, alt:"SAP Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"},
    {imageUrl: JSLogo, alt:"JS Logo"}
]
export default Experiences

