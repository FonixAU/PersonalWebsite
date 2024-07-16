import { Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const HexagonPatternGenerator = () => {

    return (
        <Layout title="HexagonPatternGenerator">
            <Container>
                <Title>
                Hexagon Pattern Generator <Badge>2023</Badge>
                </Title>
                <P>
                This NPM Package is a component that receives a target folder, and is able to infinitely generate a
                hexagon pattern of all the images present in the folder, dynamcally filling in the background to match
                up with the hexagonal shape. With the dynamic row sizes you may also adjust this based on your viewports.
                </P> 
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Official Release</Meta>
                        <Link href="https://www.npmjs.com/package/HexagonPatternGenerator?activeTab=readme" target='_blank'>
                        npmjs.com/package/HexagonPatternGenerator<ExternalLinkIcon mx="2px"/>
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
                    Hexagon Demo Here
            </Container>
        </Layout>
    )
}
export default HexagonPatternGenerator