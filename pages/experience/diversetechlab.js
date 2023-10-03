import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta} from '../../components/experienceTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DiverseTechLab = () => {
    return (
        <Layout title="Diverse Tech Lab">
            <Container>
                <Title>
                Diverse Tech Lab <Badge>2021</Badge>
                </Title>
                <List>
                <ListItem>
                <P>
                During my time at DTL, I was able to experience a several different areas of development 
                simoutaneously due to the nature of the company and its structure. I was able to absorb a multitude
                of new skills and develop others further. 
                </P>
                </ListItem>
                
                <ListItem mt={3}>
                <P>
                While I had the pleasure of working there, I prototyped new projects, ran client meetings, created
                and managed databases and endpoints, created API&apos;s and integrated others, and worked on the front-end
                of secure, responsive and dynamic web based applications.
                </P>
                </ListItem>
                
                </List>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Badge colorScheme="red" mr={2}>Discontinued</Badge>
                        <Link href="https://www.diversetechlab.com">
                        https://www.diversetechlab.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Skills</Meta>
                        <span>
                            VueJS, TypeScript, .NET, AWS, Postgres, AdobeXD, SQL
                        </span>
                    </ListItem>
                    </List>
            </Container>
        </Layout>
    )
}
export default DiverseTechLab