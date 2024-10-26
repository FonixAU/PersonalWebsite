import { Container, Badge, Link, List, ListItem, useBreakpointValue, Divider} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta} from '../../components/folioTemplate'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import HoneycombGrid from '../../components/layouts/honeycombGrid';

const HexagonPatternGenerator = () => {
    const isMobile = useBreakpointValue({ base: true, sm: false});
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
                    <Divider mt={3} mb={4}/>
                    {isMobile ? (
        <HoneycombGrid maxHeight={'60.92px'} evenRows={3} oddRows={4} paddingVal={(3*2)*4}/>
        ) : (
        <HoneycombGrid maxHeight={'60.92px'} evenRows={5} oddRows={6} paddingVal={5*2 + 6}/>
        )}
            </Container>
        </Layout>
    )
}
export default HexagonPatternGenerator