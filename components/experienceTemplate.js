import NextLink from 'next/link'
import { Heading, Box, Link, Badge} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/experience" legacyBehavior>
            <Link>Experience</Link>
    </NextLink>
    <span>
    &nbsp;
    <ChevronRightIcon/>
    &nbsp;
    </span>
    <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
        { children }
    </Heading>
    </Box>
)
export const Meta = ({ children }) =>(
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)