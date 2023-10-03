import React from 'react';
import Image  from 'next/image';

const Honeycomb = ({ imageUrl, alt, width, height }) => {
  const hexagonStyles = {
    hexagon: {
      width: width || '60px', // Default width if not provided
      height: height || '60px', // Default height if not provided
      position: 'relative',
      margin: '0 10px', // Spacing between hexagons
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      javascript: {
      width: width || '60px', // Default width if not provided
      height: height || '60px', // Default height if not provided
      position: 'relative',
      margin: '0 10px', // Spacing between hexagons
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        backgroundColor:"#f0db4f"
      },
    },
  };

  return (

    <div style={hexagonStyles.hexagon.javascript}>
    <Image src={imageUrl} alt={alt}/>
    </div>
      );
}

export default Honeycomb;
