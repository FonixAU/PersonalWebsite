import React from 'react';
import Image from 'next/image';
import ColorThief from 'colorthief'
import { color } from 'framer-motion';


const Honeycomb = ({ imageUrl, alt, width, height }) => {
    const hexagonStyles = {
    hexagon: {
      width: width || '60px',
      height: height || '60px',
      position: 'relative',
      margin: '0 10px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      javascript: {
        width: '100px',
      height: '115px', // Adjust as needed
      position: 'relative',
      margin: '0 10px', // Spacing between hexagons
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        backgroundColor:"#f0db4f"
      },
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Adjust to control how the image fits within the hexagon
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '1',
    },
  };

  return (

    <div style={hexagonStyles.hexagon.javascript}>
    <Image src={imageUrl} alt={alt} />
    </div>
      );
}

export default Honeycomb;