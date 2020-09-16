import React from 'react';
import { Button } from '@chakra-ui/core';

export const PrimaryButton = ({ children, ...props }) => (
  <Button
    type="submit"
    variantColor="teal"
    borderColor="green.500"
    size="md"
    width="100%"
    border="2px"
    variant="outline"
    color="primary"
    {...props}
  >
    {children}
  </Button>
);

export default PrimaryButton;
