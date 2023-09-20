import React from "react";
import { Flex } from "@chakra-ui/react";
import HoneycombCell from "../honeycombCell";

const StackGrid = () => {
  const honeycombData = [
    {
      id: 1,
      title: "Item 1",
      thumbnail: "/folio/zaniteelogo.png",
    },
    {
      id: 2,
      title: "Item 2",
      thumbnail: "/folio/zaniteelogo.png",
    },
    // Add more items as needed
  ];

  return (
    <Flex flexWrap="wrap" justify="center" align="center" w="100%" p={4}>
      {honeycombData.map((item) => (
        <HoneycombCell
          key={item.id}
          title={item.title}
          thumbnail={item.thumbnail}
        />
      ))}
    </Flex>
  );
};

export default StackGrid;
