import { Container, Badge, List, ListItem} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, FolioImage, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Nominate = () => {
    return (
        <Layout title="portfolio">
            <Container>
                <Title>
                Portfolio <Badge>Live</Badge>
                </Title>
                <P>
                This site is essentially my web-based resume. It has some of the projects I work on in my spare time,
                and some things that are ok to share from previous employment.
                </P>
                <P>
                Mostly built from scratch, including compnents. My 2 main focuses are always UX and ease of development.
                The hexagon pattern as an example is fully automatic. I made it so all I have to do is add an image
                to a folder, and it will adapt itself.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>
                        Vercel
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            React, Chakra, Emotion, NextJS
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