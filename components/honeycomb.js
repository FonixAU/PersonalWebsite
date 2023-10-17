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
      display: 'flex',
      alignItems: 'center', // Center vertically
      justifyContent: 'center' // Center horizontally
    },
    javascript: {
      width: width || '60px',
      height: height || '60px',
      position: 'relative',
      margin: '0 10px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
    },
  };
  var colorThief = new ColorThief();
    return (
      <div style={hexagonStyles.hexagon} id='hexagon'>
        <Image onLoad={(img)=>{ document.getElementById('hexagon').backgroundColor = "rgb("+ colorThief.getColor(img) + ")" } } src={imageUrl} alt={alt} fill={true} style={{objectFit: "cover"}} id={alt}/>
      </div>
    );  
};

export default Honeycomb;
