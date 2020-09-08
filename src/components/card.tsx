import { Badge, Box, Button, Icon, Image, Stack, Text } from '@chakra-ui/core';
import React from 'react';

const Card = () => (
  <Box w="400px" rounded="20px" overflow="hidden" boxShadow="sm" bg="gray">
    <Image src="assets/thumb.png" alt="Course Cover" />
    <Box p={5}>
      <Stack isInline align="baseline">
        <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
          NEW!
        </Badge>
        <Badge variant="solid" variantColor="teal" rounded="full" px={2}>
          React
        </Badge>
        <Text textTransform="uppercase" fontSize="sm" color="gray.500" letterSpacing="wide">
          2 Hours &bull; 12 lectures
        </Text>
      </Stack>
      <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
        Introduction to chakra-ui
      </Text>
      <Text isTruncated fontWeight="light" fontSize="md">
        Adipisicing ea pariatur ullamco deserunt amet
        <br /> consequat reprehenderit in duis est velit tempor.
        <br /> Ipsum ea ad duis sint aliquip in ullamco in dolor <br />
        reprehenderit duis ullamco. Irure tempor ullamco voluptate irure quis quis magna sint enim velit esse. Culpa
        excepteur reprehenderit sint ex incididunt reprehenderit deserunt nisi ullamco magna. Officia eiusmod ipsum
        laboris enim irure eu elit. Labore ex esse pariatur aliquip proident ipsum deserunt culpa eiusmod elit
        reprehenderit labore commodo pariatur. Consequat duis velit proident qui ad elit mollit culpa veniam.
      </Text>
      <Stack isInline justify="space-between" color="#000">
        <Text fontWeight="semibold" fontSize="lg">
          $20
        </Text>
        <Box d="flex">
          <Box as="span">
            {Array(4)
              .fill('')
              .map((_, i) => (
                <Icon name="star" color="teal.500" key={i} />
              ))}
            <Icon name="star" mr="2" />
          </Box>
          <Text as="h3" fontSize="lg" fontWeight="semibold">
            34 Reviews
          </Text>
        </Box>
      </Stack>
      <Box textAlign="center">
        <Button
          variantColor="teal"
          size="lg"
          mt={3}
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Sign Up Now!
        </Button>
      </Box>
    </Box>
  </Box>
);

export default Card;
