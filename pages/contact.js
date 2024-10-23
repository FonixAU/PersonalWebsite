import { Container, Heading, Input, Textarea, Divider, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={3} mt={4}>
                Contact Me
            </Heading>
            <Divider mb={2}/>
            <Section>
            <Input mb={2} bgColor='Background' placeholder='Email Address'/>
            <Input mb={2} bgColor='Background' placeholder='Title'/>
            <Textarea mb={2} bgColor='Background' placeholder='Tell me anything :)'/>
            <Button>Submit</Button>
            </Section>
        </Container>
        </Layout>
    )
}
export default Works