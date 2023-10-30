import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import zaniteeImage from '../public/images/folio/zaniteelogo.png'
import npmImage from '../public/images/folio/npm.png'
const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={4}>
                Portfolio
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                <WorkGridItem id="zanitee" title="Zanitee" thumbnail={zaniteeImage}>
                Gift suggestion and cataloguing web application
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="colorpicker" title="Image Path Color Picker" thumbnail={npmImage}>
                NPM package for analysing and returning image color distribution
                </WorkGridItem>
            </Section>
            </SimpleGrid>
            <Section>
                <Divider/>
            </Section>
        </Container>
        </Layout>
    )
}
export default Works