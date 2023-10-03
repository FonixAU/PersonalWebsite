import React from 'react';
import Image from 'next/image';

const Honeycomb = ({ imageUrl, alt, width, height }) => {
  const hexagonStyles = {
    hexagon: {
      width: width || '60px',
      height: height || '60px',
      position: 'relative',
      margin: '0 10px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      backgroundColor: '#F7F7F7',
    },
    javascript: {
      width: width || '60px',
      height: height || '60px',
      position: 'relative',
      margin: '0 10px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      backgroundColor: '#f0db4f',
    },
  };

  // Conditionally apply the 'javascript' class if 'alt' has a specific value
  if (alt === "JS Logo") {
    return (
      <div style={hexagonStyles.javascript}>
        <Image src={imageUrl} alt={alt}/>
      </div>)}
  else{
    return (
      <div style={hexagonStyles.hexagon}>
        <Image src={imageUrl} alt={alt} fill={true} style={{objectFit: "cover"}}/>
      </div>
    );
  }
  
};

export default Honeycomb;
