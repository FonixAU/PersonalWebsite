import { Container, Badge, List, ListItem} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Title, FolioImage, Meta} from '../../components/folioTemplate'

const Wedding = () => {
    return (
        <Layout title="Wedding">
            <Container>
                <Title>
                Wedding <Badge>Live</Badge>
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
                <P>
                Most of the site uses custom components I made so that I can easily customise and re-use them
                to populate the site.
                </P>
                <P>
                I&apos;ve taken up doing most of my solo work on google&apos;s IDX platform, I love the flexibility of
                picking up where I left off from literally anywhere.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>
                        Vercel, Render, Fly.io, Cloudinary, Docker
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            React, Bulma, Handlebars, NextJS, Directus, Python
                        </span>
                    </ListItem>
                    </List>
                    <FolioImage src="\images\folio\weddingMain.png" alt="Wedding"/>
                    <FolioImage src="\images\folio\wedding\main.png" alt="Wedding Example"/>
            </Container>
        </Layout>
    )
}
export default Wedding