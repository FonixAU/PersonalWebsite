import React, { useState } from 'react';
import { List, ListItem, Center, Heading, Box, Button, Divider, Square, Flex} from '@chakra-ui/react';
import { getStackColour } from './stackColor'; // Import your image color processing module

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
          });
      };

      reader.readAsDataURL(file);
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
        {selectedImage && imageColorData && (
          <div>
        <Center>
        <Box w='30%'>
        <img src={selectedImage} alt="Uploaded Image" />
        </Box>
        </Center>
        <Center>
            <Flex mt={5}>
              <Square size='90px' bg={imageColorData.hex} color='white'></Square>
              <Box ml={3}>
                <List>
                  <ListItem>
                    Hex: {imageColorData.hex}
                  </ListItem>
                  <ListItem>
                    RGB: {imageColorData.rgb}
                  </ListItem>
                </List>
                <Flex mt={4}>
                <Square size='20px' bg={imageColorData.colorPallete[0]} color='white'></Square>
                  <Square ms={3}size='20px' bg={imageColorData.colorPallete[1]} color='white'></Square>
                  <Square ms={3}size='20px' bg={imageColorData.colorPallete[2]} color='white'></Square>
                  <Square ms={3}size='20px' bg={imageColorData.colorPallete[3]} color='white'></Square>
                  <Square ms={3}size='20px' bg={imageColorData.colorPallete[4]} color='white'></Square>

                </Flex>
              </Box>
            </Flex>
            </Center>
            </div>
          )}
    </div>
  );
}

export default ImageUploader;
