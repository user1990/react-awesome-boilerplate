import { Box } from '@chakra-ui/core';
import React from 'react';

export const Form = ({ children, ...props }) => {
  return (
    <Box width="100%" mt="1">
      <form {...props} noValidate>
        {children}
      </form>
    </Box>
  );
};

export default Form;
