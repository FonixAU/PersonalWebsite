import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import BackgroundGrain from './backgroundGrain.js'
const Main = ({ children , router}) => {
    return (
        <Box style={{backgroundImage: `url(/svg/noise.svg)`}} as="main" pb ={8}>
            
            <Head>
                <meta name="viewport" content="width=device-width , initial-scale=1" />
                <title>Felipe Ortiz</title>
            </Head>
            
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            <BackgroundGrain></BackgroundGrain>
        </Box>
    )
}

export default Main