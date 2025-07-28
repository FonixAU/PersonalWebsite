import { Container, Badge, List, ListItem, SimpleGrid} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Title, FolioImage, Meta} from '../../components/folioTemplate'
import { GridItem } from '../../components/grid-item'
import mobile from '../../public/images/folio/wedding/main.jpg'
import gallery from '../../public/images/folio/wedding/gallery.jpg'
import honeymoon from '../../public/images/folio/wedding/honeymoon.jpg'
import invites from '../../public/images/folio/wedding/invite.jpg'
import savethedate from '../../public/images/folio/wedding/savedate.jpg'

const Wedding = () => {
    return (
        <Layout title="Wedding">
            <Container>
                <Title>
                Wedding <Badge>Live</Badge>
                </Title>
                <P>
                This is a collection of all the parts of a wedding I thought could be digitised in an
                effort to save costs and put a modern spin on the whole thing.
                </P>
                <P>
                I built a simple Vercel hosted NextJS site, but leveraged Cloudinary&apos;s robust api and
                (most importantly) free capabilities to add a dynamic gallery to the site, so we can spice up its functionality
                and also make sure we capture many memories without needing a whole camera crew.
                </P>
                <P>
                I then used a combination of Directus&apos; user friendly CMS capabilities as a GUI-fied data-base that even
                my non-techie wife could use, to manage the invites and guest list. Along with handlebars&apos; powerful templating,
                where I had the freedom to pair it with any css frameworks I wanted to bring the invites to the modern age.
                The database is hosted on fly.io where the low usage keeps costs under the $5 limit, and Render for the invites which is capable
                of spinning up in a few seconds from idle.
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
                            React, Bulma, Handlebars, NextJS, Directus, Python, Express
                        </span>
                    </ListItem>
                    </List>
                    <FolioImage src="\images\folio\weddingMain.png" alt="Wedding"/>
                    <SimpleGrid columns={[1,2,5]} gap={6}>
                    <GridItem id="mobile" title="Mobile"thumbnail={mobile}/>
                    <GridItem id="gallery" title="Gallery"thumbnail={gallery}/>
                    <GridItem id="honeymoon" title="Honeymoon"thumbnail={honeymoon}/>
                    <GridItem id="invites" title="Invites"thumbnail={invites}/>
                    <GridItem id="savethedate" title="Save the dates"thumbnail={savethedate}/>

                    </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Wedding