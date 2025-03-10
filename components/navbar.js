import Logo from './logo.js'
import NextLink from 'next/link'
import{
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200','whiteAlpha.900')
    const activeColor = useColorModeValue('secondaryLight','secondaryDark')
    return (
        <NextLink href={href} legacyBehavior>
            <Link
            p={2}
            bg={active ? activeColor : undefined}
            color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    );
}
const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter:'blur(10px'}}
        zIndex={1}
        {...props}
        >
            <Container display="flex" 
            p={2} maxW="container.md" 
            wrap="wrap" align="center" 
            justify="space-between">
                <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={'tighter'} href="/">
                <Logo />
                </Heading>
                </Flex>

                <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, nmd: 0 }}
                >
                <LinkItem href="/folio" path={path}>
                    Portfolio
                </LinkItem>
                <LinkItem href="/experience" path={path}>
                    Experience
                </LinkItem>
                <LinkItem href="/contact" path={path}>
                    Contact
                </LinkItem>
                <LinkItem href="https://github.com/FonixAU" path={path}>
                    Github
                </LinkItem>
                </Stack>
                
            <Box flex={1} align="right">
            <Box ml={2} display={{base: 'inline-block'}}>
                <ThemeToggleButton />
                </Box>
                <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                <Menu>
                    <MenuButton as={IconButton} 
                        icon={<HamburgerIcon/>} 
                        variant="outline" 
                        aria-label="Options"
                     />
                <MenuList>
                <NextLink href="/folio" passHref legacyBehavior>
                    <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/experience" passHref legacyBehavior>
                    <MenuItem as={Link}>Experience</MenuItem>
                </NextLink>
                <NextLink href="/contact" passHref legacyBehavior>
                    <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <NextLink href='https://github.com/FonixAU' target="_blank" passHref legacyBehavior>
                    <MenuItem as={Link}>Github</MenuItem>
                </NextLink>
                </MenuList>
                </Menu>                 
                </Box>
            </Box>
            </Container>
        </Box>
    );
}

export default Navbar
