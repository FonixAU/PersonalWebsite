import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, FolioImage, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Zanitee = () => {
    return (
        <Layout title="Zanitee">
            <Container>
                <Title>
                Zanitee <Badge>2021</Badge>
                </Title>
                <P>
                A gifting suggestion and cataloguing web application. I was involved in its development during my time at Diverse Tech Lab as an intern.
                While working on this project I was able to learn a multitude of new skills so that I could contribute. My involvement ranged from creating the 
                database and its functions, making 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Badge colorScheme="red" mr={2}>Discontinued</Badge>
                        <Link href="https://www.zanitee.com/">
                        https://www.zanitee.com/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>
                            Responsive Website / Browser
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            VueJS, TypeScript, .NET, AWS, Postgres
                        </span>
                    </ListItem>
                    </List>
                    <FolioImage src="\images\folio\zanitee.jpg" alt="Zanitee"/>
                    <FolioImage src="\images\folio\zanitee2.jpg" alt="Zanitee"/>
            </Container>
        </Layout>
    )
}
export default Zanitee