import React from 'react';
import Image from 'next/image';
import { TemplateContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const Honeycomb = ({ imageUrl, alt, width, height }) => {
  const hexagonStyles = {
    hexagon: {
      width: width,
      maxWidth: '60.92px',
      height: height,
      position: 'relative',
      margin: '0 10px',
      padding:'5px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      backgroundColor: '#F7F7F7',
      objectFit: 'contain'
    },
    javascript: {
      width: width,
      maxWidth:'60.92px',
      height: height,
      position: 'relative',
      margin: '0 10px',
      padding: '10px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      backgroundColor: '#f0db4f',
      display:'hidden'
    },
  };
  // Conditionally apply the 'javascript' class if 'alt' has a specific value
  if (alt === "javascript") {
    return ( 
        <Image src={imageUrl} alt={alt} style={hexagonStyles.javascript} width={100} height={100} />
      )}
  else{
    return (
      
        <Image src={imageUrl} alt={alt} width={100} height={100} style={hexagonStyles.hexagon}/>
      
    );
  }
  
};

export default Honeycomb;
