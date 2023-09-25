import { Container, Heading} from '@chakra-ui/react'
// , SimpleGrid, Divider, Box, Flex, ChakraProvider
// import Section from '../components/section'
import Layout from '../components/layouts/article'
// import StackGrid from '../components/layouts/stackgrid'
const Experiences = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Experience
            </Heading>
        </Container>
        </Layout>
    )
}
export default Experiences
//             {/* <SimpleGrid columns={[1,1,2]} gap={6}>
//             <Section>
//                 <StackGrid/>
//             </Section>
//             </SimpleGrid>
//             <Section>
//                 <Divider/>
//             </Section> */}
