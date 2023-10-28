import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#F9F6EE', '#202023')(props),
            
        }
    })
}
const components = {
    Heading: {
        variants:{
            'section-title':{
                textDecoration: 'underline',
                fontSize:20,
                textUnderlineOffset:6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset:3
        })
    }
}
const fonts = {
    heading: "'M PLUS Rounded 1c'"  
}
const colors = {
    secondaryLight: '#d7bdfa',
    secondaryDark: '#F4DCB1'
}
const config = {
        initialColorMode: 'dark',
        useSystemColorMode: true
}
const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})
// const realtimeSample ={
//     colors: {
//         'text': '#f8f5ec',
//         'background': '#202022',
//         'primary': '#d7bdfa',
//         'secondary': '#fbd38d',
//         'accent': '#8059d4',
//        },
       
// }

export default theme
