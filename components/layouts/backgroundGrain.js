import {Box, useColorModeValue} from  '@chakra-ui/react'
import React from 'react';
const BackgroundGrain = () => {
    return(
    <Box as="main" pb ={8} >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 700 700" width="700" height="700" id="nnnoise" opacity="0.35"><defs>
      <filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
      <feSpecularLighting surfaceScale="40" specularConstant="0.2" specularExponent="20" lighting-color="#f9f6ee" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
      <feDistantLight azimuth="3" elevation="200"></feDistantLight>
      </feSpecularLighting>
      </filter>
      </defs>
        <rect width="700" height="700" fill={useColorModeValue("#202023", "#f9f6ee")} filter="url(#nnnoise-filter)">
        </rect> 
      </svg>
    </Box>
    )
}
export default BackgroundGrain