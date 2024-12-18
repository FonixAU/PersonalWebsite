import React, { useState } from 'react';
import NextLink from 'next/link'
import { 
    Container , 
    Button,
    Box, 
    Heading, 
    Image, 
    Link,
    Icon,
    SimpleGrid
    // List,
    // ListItem,
    //useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon , ChevronDownIcon } from '@chakra-ui/icons'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem} from '../components/grid-item'
import {
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () =>{
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
    return (
        <Layout>
        <Container>            
            <Box display={{ md:'flex'}} mt={3} >
                <Box flexGrow = {1}>
                    <Heading as="h2" variant="page-title">
                        Felipe Molinari Ortiz
                    </Heading>
                    <p>IT Graduate ( Designer / Developer )</p>
                </Box>
                {/* <Box
                flexShrink={0}
                mt={{base: 4, md: 0}}
                ml={{md: 6}}
                align="center"
                >
                <Image
                // borderColor="whiteAlpha.800" 
                // borderWidth={2}
                // borderStyle="solid"
                maxWidth="100px"
                // display="inline-block"
                borderRadius="full"
                src="/images/me.gif"
                alt="Profile Image"
                />
                </Box> */}
            </Box>
        <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Currently
        </Heading>
        <Paragraph>I am elevating my career working at Linfox under their IT graduate program so that I can utilise 
            the experience I have gained so far in a corporate setting, and gain an abundance of new skills that I will be 
            able to apply into anything the future holds for me. My latest professional experience has been in the creation 
            and short term support of a web application during my internship at Diverse Tech Lab called{' '}
            <NextLink href="/folio/zanitee" legacyBehavior>
                <Link>Zanitee</Link>
            </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
            <NextLink href="/folio" legacyBehavior>
                <Button rightIcon={<ChevronRightIcon />} colorScheme='purple'>
                My work
                </Button>
            </NextLink>
        </Box>
        </Section>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
            Find me here
            </Heading>
            <SimpleGrid columns={[1,2,2]} gap={6}> 
                <Link href="https://www.linkedin.com/in/felipemolinariortiz/" target="_blank">
                    <Button variant="ghost" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={IoLogoLinkedin}/>}>
                        @fmolinariortiz
                    </Button>
                </Link>
                <Link href="https://github.com/FonixAU" target="_blank">
                    <Button variant="ghost" 
                    colorScheme="purple" 
                    leftIcon={<Icon as={IoLogoGithub}/>}>
                        @FonxiAU
                    </Button>
                </Link>
            </SimpleGrid>
        </Section>
        <Section delay={0.2}>
            <Heading as="h3" variant="section-title" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>
                Biography {isExpanded ? 
                <ChevronDownIcon/>
                :
                <ChevronRightIcon/>}
            </Heading>
            {isExpanded &&(
            <>
            <BioSection>
                <BioYear>2001</BioYear>
                Born in Joinville, Brazil.
            </BioSection>
            <BioSection>
            <BioYear>2011</BioYear>
            Moved to Australia and lived my Highschool years here.
            I learned English from scratch and consider my proficiency to be native.
            During this time I was also sponsored by Rotary International to become an exchange student in Sweden for a year.
            </BioSection>
            <BioSection>
            <BioYear>2021</BioYear>
            Did a development internship at a small company to gain valuable experience in full-stack development, application design and prototyping, client negotiations and QA testing.
            </BioSection>
            <BioSection>
            <BioYear>2022</BioYear>
            Graduated from Deakin University with a Bachelors in Information Technology, with two majors; Cybersecurity and Cloud Computing.
            </BioSection>
            <BioSection>
            <BioYear>2023</BioYear>
            Began my Graduate Program at Linfox
            </BioSection>
            </>)}
        </Section>
        </Container>
        </Layout>
    )
}
export default Page

{/* <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={1} align="center">
Message Banner Template
</Box> */}