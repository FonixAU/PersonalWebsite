import Link from 'next/link'
import { Text, useColorModeValue, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
const LogoBox = styled.span`
    font-weight: BLOCKED_PAGES;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    
    :hover .transform{
        transform: rotate(20deg);
    }
`
const Logo = () => {
    const FootPrintImg = (props) => (
    <Icon viewBox='0 0 400 400' {...props}>
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="400" rx="30" fill={useColorModeValue("#252525", "#E7E7E7")}/>
    <path d="M161.395 54.6719H194.943L72.8105 343.041H39.2617L161.395 54.6719ZM322.354 54.6719H355.902L233.77 343.041H200.221L322.354 54.6719Z" fill={useColorModeValue("#E7E7E7", "#252525")}/>
    </svg>
    </Icon>
    )
    return (
        <Link href="/" legacyBehavior>

                <LogoBox>
                    <div class="transform">
                        <FootPrintImg/>
                    </div>
                        <Text
                            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                            fontFamily="M PLUS Rounded 1c"
                            fontWeight="bold"
                            ml={3}
                            >
                                Felipe Molinari Ortiz
                            </Text>
                </LogoBox>

            </Link>
    );
}
export default Logo
