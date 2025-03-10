import { useState } from 'react';
import { Container, Badge, Link, List, Heading, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon , ChevronDownIcon } from '@chakra-ui/icons'
import { Title, Meta} from '../../components/experienceTemplate'
import P from '../../components/paragraph'
import Section from '../../components/section'
import Layout from '../../components/layouts/article'

const Linfox = () => {
    const [isExpandedPCE, setIsExpandedPCE] = useState(false);
    const [isExpandedGrad, setIsExpandedGrad] = useState(false);

    const toggleExpansionPCE = () => {
        setIsExpandedPCE(!isExpandedPCE);
    };
    const toggleExpansionGrad = () => {
        setIsExpandedGrad(!isExpandedGrad);
    };
    return (
        <Layout title="Linfox">
            <Container>
                <Title>
                Linfox <Badge>2023</Badge>
                </Title>
                <List>
                <Section delay={0.2}>
            <Heading as="h3" variant="section-title" onClick={toggleExpansionPCE} style={{ cursor: 'pointer' }}>
                Cloud & Platform Engineering {isExpandedPCE ? 
                <ChevronDownIcon/>
                :
                <ChevronRightIcon/>}
            </Heading>
                
                {isExpandedPCE &&(
                <>
                <ListItem>
                <P>
                While I&apos;m in the early days at my role as a Cloud & Platform Engineer,
                this section may be a little light.
                </P>
                <P>
                But I&apos;ve been working dilligently on
                learning the necessary skills to perform my role, on top of focusing around
                many continuous improvement initiatives, to improve our engagement with the
                rest of the IT function.
                </P>
                </ListItem>
                {/* <ListItem my={3}>
                <P>
                P1
                </P>
                <P>
                P2
                </P>
                </ListItem> */}
                </>)}
                </Section>
                <Section delay={0.2}>
            <Heading as="h3" variant="section-title" onClick={toggleExpansionGrad} style={{ cursor: 'pointer' }}>
                Graduate Program {isExpandedGrad ? 
                <ChevronDownIcon/>
                :
                <ChevronRightIcon/>}
            </Heading>
                
                {isExpandedGrad &&(
                <>
                <ListItem>
                <P>
                At Linfox, I participated in their 18 month Graduate Program.
                This program gave the opportunity to work on 6 different areas of the business and completed
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
                </>)}
                </Section>
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
                        Cloud  & Platforms Engineering, Warehousing, Transport Support, Operations, 
                           Integration, Data & Analytics
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Technology</Meta>
                        <span>
                        SAP EWM & ECC, MTData, Service Now, Power BI, DBT, Airflow, 
                        Snowflake, Fivetran, Terraform, WebMethods, Docker, Postman,
                        VMWare Suite, Azure Cloud Suite, Cloud & On-Prem AD, AWS, Ansible
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Languages</Meta>
                        <span>
                        Python, SQL, Jinja, ABAP, Javascript, DAX, Powershell
                        </span>
                    </ListItem>
                    </List>
            </Container>
        </Layout>
    )
}
export default Linfox