import { Container, Badge, List, ListItem} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, FolioImage, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Nominate = () => {
    return (
        <Layout title="Nominate">
            <Container>
                <Title>
                Nominate <Badge>2024</Badge>
                </Title>
                <P>
                Nominate is a discord bot I created to allow servers to
                self regulate, but adding role promotion pathways to certain roles,
                allowing them to be earned via merit. This is done via a polling system
                where users may nominate other users for certain roles, and others may vote
                and discuss on the outcome.
                </P>
                <P>
                Over time I have also updated it to support other features commonly found in
                industry standard bots such as reaction roles and event threading to support the needs of my server.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>
                            Discord Bot / Heroku
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Javascript, NodeJS, Heroku, Discord.js
                        </span>
                    </ListItem>
                    </List>
                    <FolioImage src="\images\folio\nominateSS.png" alt="Nominate Example"/>
                    <FolioImage src="\images\folio\nominate.png" alt="Nominate"/>
            </Container>
        </Layout>
    )
}
export default Nominate