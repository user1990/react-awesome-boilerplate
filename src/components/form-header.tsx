import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

interface FormHeaderProps {}

export const FormHeader: React.FC<FormHeaderProps> = ({}) => (
  <Flex align="flex-start" justify="center">
    <Text fontSize="lg" as="i">
      Advanced React Hook Form Stepper
    </Text>
  </Flex>
);
