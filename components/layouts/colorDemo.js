import React, { useState } from 'react';
import { Center, Heading, Box, Button, Divider, Square, Flex, border } from '@chakra-ui/react';
import { getStackColour } from './stackColor'; // Import your image color processing module
import LoadingBar from '../loadingbar';
import ImageColorRender from '../imageColorRendering';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageColorData, setImageColorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Set initial loading state to false

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
          .finally(() => {
            setIsLoading(false);
          });

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
              setIsLoading(true); // Set loading state to true when an image is selected
            }             
          }}>
            Upload Image
          </Button>
        </Center>
      </Box>
      <LoadingBar isLoading={isLoading}/>
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
