import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, FolioImage, Meta} from '../components/folioTemplate'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'

const Experience = () => {
    return (
        <Layout title="Diverse Tech Lab">
            <Container>
                <Title>
                Diverse Tech Lab <Badge>2021</Badge>
                </Title>
                <P>
                I worked as a development intern for 6 months under a small close knit team,
                where I was able to work with a plethora of different technologies and learn a multitude of different skills
                by being able to work alongside and independently in each team member's different roles
                </P>
                <List ml={4} my={4}>
                    
                </List>
            </Container>
        </Layout>
    )
}