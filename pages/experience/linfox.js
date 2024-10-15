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
                Linfox <Badge>2023</Badge>
                </Title>
                <List>
                <ListItem>
                <P>
                At Linfox, I participated in their 18 month Graduate Program.
                This program gave the opportunity to work on 6 different areas of the business and complete
                an ITIL Foundations certification. 
                </P>
                <P>
                The teams I worked in were the functional and development team for warehousing,
                the tracking and in-cab device support team, the system integration team, 
                the data and analytics team, and the cloud platforms team.
                </P>
                </ListItem>
                <ListItem my={3}>
                <P>
                A lot of my work focused around continuous improvement. So I was given a great opportunity
                 to express my creativity and passion for problem solving to implement
                several initiatives around automation, programming standards, training and documentation.
                </P>
                <P>
                Through my project related tasks, I was able to add value to the teams I was a part of;
                by expediting timelines, adding detail, and working closely on implementation logic and discussions.
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
                        <Meta>Teams</Meta>
                        <span>
                           Warehousing, Transport Support, Operations, 
                           Integration, Data & Analytics, Cloud Platforms
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>
                        SAP EWM & ECC, MTData, Service Now, Power BI, DBT, Airflow, 
                        Snowflake, Fivetran, Terraform, WebMethods, Docker, Postman
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Languages</Meta>
                        <span>
                        Python, SQL, Jinja, ABAP, Javascript, Dax
                        </span>
                    </ListItem>
                    </List>
            </Container>
        </Layout>
    )
}
export default Linfox