import { Box, Divider, Flex, Image, Text } from '@chakra-ui/core';
import React from 'react';

const List = () => (
  <Flex
    maxW="1000px"
    w={['90vw', '90vw', '90vw', '70vw']}
    direction={['column', 'column', 'row', 'row']}
    justify="center"
    bg="grey"
    boxShadow="md"
    rounded="lg"
    p="4"
  >
    <Flex align="center" mx="2">
      <Image src="assets/icon.png" />
      <Box mx="4">
        <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
          Usability
        </Text>
        <Text as="h3" fontWeight="light" fontSize="lg">
          Sometimes the simples things are the hardest to find. So we created a new line for everday life.
        </Text>
      </Box>
    </Flex>
    <Divider orientation="vertical" borderColor="gray.300" my="2" />
    <Flex align="center" mx="2">
      <Image src="/icon2.png" />
      <Box m="4">
        <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
          Parralax Effect
        </Text>
        <Text as="h3" fontWeight="light" fontSize="lg">
          Sometimes the simples things are the hardest to find. So we created a new line for everday life.
        </Text>
      </Box>
    </Flex>
    <Divider orientation="vertical" borderColor="gray.300" my="2" />
    <Flex align="center" mx="2">
      <Image src="/icon3.png" />
      <Box mx="4">
        <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
          Unlimited Colors
        </Text>
        <Text as="h3" fontWeight="light" fontSize="lg">
          Sometimes the simples things are the hardest to find. So we created a new line for everday life.
        </Text>
      </Box>
    </Flex>
  </Flex>
);

export default List;
