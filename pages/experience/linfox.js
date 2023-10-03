import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta} from '../../components/experienceTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Linfox = () => {
    return (
        <Layout title="Linfox">
            <Container>
                <Title>
                Linfox <Badge>2021</Badge>
                </Title>
                <List>
                <ListItem>
                <P>
                I am still at linfox but will update soon.
                </P>
                </ListItem>
                
                <ListItem mt={3}>
                <P>
                I wil include some of the things I did soon.
               </P>
                </ListItem>
                
                </List>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.Linfox.com">
                        https://www.Linfox.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Skills</Meta>
                        <span>
                           SAP, ABAP ,WebMethods, Warehouse Management, Transport Modeling, Integration
                        </span>
                    </ListItem>
                    </List>
            </Container>
        </Layout>
    )
}
export default Linfox