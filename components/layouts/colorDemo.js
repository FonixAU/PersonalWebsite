import React, { useState } from 'react';
import { Center, Heading, Box, Button, Divider } from '@chakra-ui/react';
import { getColorSimple, getStackColour } from './stackColor'; // Import your image color processing module

import ImageColorRender from '../imageColorRendering';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageColorData, setImageColorData] = useState(null);
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      const reader = new FileReader();

      reader.onload = (event) => {
        setSelectedImage(event.target.result);

        // Run the getStackColour function when an image is selected
        getStackColour(event.target.result)
          .then((colorData) => {
            setImageColorData(colorData);
          })
          .catch((error) => {
            console.error('Error processing image:', error);
          })
          
      };

      reader.readAsDataURL(file)

      
    }

  };

  return (
    <div>
      <Box>
        <Center>
          <Heading mb={3} size="s">Interactive Example</Heading>
        </Center>
        <Divider />
        <Center>
          <Button m={4} onClick={() => {
            const fileInput = document.getElementById('imageInput');
            if (fileInput) {
              fileInput.click();
            }             
          }}>
            Upload Image
          </Button>
        </Center>
      </Box>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="imageInput"
      />
     <ImageColorRender selectedImage={selectedImage} imageColorData={imageColorData}/>
    </div>
  );
}

export default ImageUploader;
