import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const HoneycombCell = ({ title, thumbnail }) => {
  const cellSize = 100; // Adjust the cell size as needed

  return (
    <Box
      w={cellSize}
      h={cellSize}
      display="grid"
      placeItems="center"
      transform="rotate(45deg)"
      borderRadius="50%"
      boxShadow="0 0 8px rgba(0, 0, 0, 0.2)"
    >
      <Image src={thumbnail} alt={title} boxSize="70%" objectFit="cover" />
      <Text fontSize="sm" fontWeight="bold" mt={1}>
        {title}
      </Text>
    </Box>
  );
};

export default HoneycombCell;
