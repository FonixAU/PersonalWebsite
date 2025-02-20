import React, {useEffect , useState} from 'react';
import Image from 'next/image';
import { getColorSimple } from './layouts/stackColor';
const Honeycomb = ({ imageUrl, alt, width, height ,maxWidth}) => {
    const [HexColor, setHexColor] = useState('');

    useEffect(() => {
      // Call the function with the image path and handle the Promise
      getColorSimple(imageUrl)
        .then((result) => {
          const hexColor = result.rgb;
          
          setHexColor(hexColor);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  const hexagonStyles = {
    hexagon: {
      width: width,
      maxWidth: maxWidth,
      height: height,
      position: 'relative',
      margin: '0 10px',
      padding:'1.2%',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      alignItems: 'center', // Center vertically
      justifyContent: 'center', // Center horizontally
      backgroundColor: HexColor,
      objectFit: 'contain'
    }
  };
  // Conditionally apply the 'javascript' class if 'alt' has a specific value
  
    return (
      
        <Image src={imageUrl} alt={alt} width={100} height={100} style={hexagonStyles.hexagon}/>
      
    );  
};

export default Honeycomb;
