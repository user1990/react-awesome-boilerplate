import { Box, Flex, Image, PseudoBox, Stack } from '@chakra-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const { pathname } = history.location;

  return (
    <Flex
      w="100vw"
      bg="gray.600"
      align="center"
      color="#fff"
      justify="center"
      fontSize={['md', 'lg', 'xl', 'xl']}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={['100vw', '100vw', '80vw', '80vw']} justify="space-around">
        <Box>
          <Image h="4vh" src="/assets/logo.svg" alt="Logo of Chakra-ui" />
        </Box>
        <Stack spacing={8} justify="center" align="center" isInline>
          <PseudoBox position="relative" opacity={pathname !== '/' ? 0.4 : 1}>
            <Link to="/">Home</Link>
          </PseudoBox>
          <PseudoBox position="relative" opacity={pathname !== '/form' ? 0.4 : 1}>
            <Link to="/form">Form</Link>
          </PseudoBox>
          <PseudoBox position="relative" opacity={pathname !== '/card' ? 0.4 : 1}>
            <Link to="/card">Card</Link>
          </PseudoBox>
          <PseudoBox position="relative" opacity={pathname !== '/list' ? 0.4 : 1}>
            <Link to="/list">List</Link>
          </PseudoBox>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
