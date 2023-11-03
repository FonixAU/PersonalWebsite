import React from 'react';
import { Progress, Box } from '@chakra-ui/react';

const LoadingBar = ({ isLoading }) => {
  return isLoading ? (
    <Box borderWidth='1px' borderRadius='30'>
      <Progress margin={1} size="sm" isIndeterminate />
    </Box>
  ) : null;
};

export default LoadingBar;