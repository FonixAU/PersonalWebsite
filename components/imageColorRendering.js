import React from "react";
import { Center, Box, List, ListItem, Square, Flex } from '@chakra-ui/react';

const ImageColorRender = ({ selectedImage, imageColorData }) => {
    if(!imageColorData){
        return;
    }

    return (
      <div>
            <Center>
              <Box w='30%'>
                <img src={selectedImage} alt="Uploaded Image" />
              </Box>
            </Center>
            <Center>
              <Flex mt={5}>
                <Square size='90px' bg={imageColorData.hex}></Square>
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
                    <Square size='20px' bg={imageColorData.colorPallete[0]}></Square>
                    <Square ml={3} size='20px' bg={imageColorData.colorPallete[1]}></Square>
                    <Square ml={3} size='20px' bg={imageColorData.colorPallete[2]}></Square>
                    <Square ml={3} size='20px' bg={imageColorData.colorPallete[3]}></Square>
                    <Square ml={3} size='20px' bg={imageColorData.colorPallete[4]} ></Square>
                  </Flex>
                </Box>
              </Flex>
            </Center>
            </div>
  );
};

export default ImageColorRender;