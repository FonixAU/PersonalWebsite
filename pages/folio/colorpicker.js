import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import ColorDemo from '../../components/layouts/colorDemo'
import { useState } from 'react'

const ImagePathColorPicker = () => {

    return (
        <Layout title="ImagePathColorPicker">
            <Container>
                <Title>
                Image Path Color Picker <Badge>2023</Badge>
                </Title>
                <P>
                This NPM Package is a tool that analyses the pixels in an image provided
                through its path. And returns the most prominent colour in either RGB or Hex formats.
                This tool also ignores transparent pixels since they affect the prominence of the main colour.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Official Release</Meta>
                        <Link href="https://www.npmjs.com/package/imagepathcolorpicker?activeTab=readme" target='_blank'>
                        npmjs.com/package/imagepathcolorpicker<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>
                            NPM Package
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Javascript
                        </span>
                    </ListItem>
                    </List>
                    <ColorDemo/>
            </Container>
        </Layout>
    )
}
export default ImagePathColorPicker