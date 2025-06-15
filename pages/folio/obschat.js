import { Container, Badge, List, ListItem} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, FolioImage, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Nominate = () => {
    return (
        <Layout title="OBS Chat Aggregator">
            <Container>
                <Title>
                OBS Chat Aggregator <Badge>2025</Badge>
                </Title>
                <P>
                This OBS Chat Aggregator was a plugin made during the rise of multi-platform
                simulstreams. Due to certain platform specific rules, having a joint live chat
                 plugin for OBS was a common request. 
                </P>
                <P>
                 This links a Twitch.tv API listener, and a Kick.com Webhooks subscription into one;
                 intuitive, live and legible interface for the user to engage with their audience in
                 a more effective manner.
                </P>
                
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>
                            OBS Plugin, Kick.com, Twitch.tv
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Javascript, OBS, Webhooks, RestAPIs
                        </span>
                    </ListItem>
                    </List>
                    <FolioImage src="\images\folio\obslogin.png" alt="Login Screen"/>
                    <FolioImage src="\images\folio\obslive.png" alt="Live Chat"/>
            </Container>
        </Layout>
    )
}
export default Nominate