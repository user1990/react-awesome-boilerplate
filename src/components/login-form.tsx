import { Input, Stack, Icon, InputGroup, InputLeftElement, Button, FormControl, FormHelperText } from '@chakra-ui/core';
import React from 'react';

const LoginForm = () => (
  <form action="submit">
    <Stack spacing={3}>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="email" />} />
          <Input type="email" placeholder="Email" name="Email" />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="lock" />} />
          <Input type="password" placeholder="Password" name="Password" />
        </InputGroup>
      </FormControl>
      <Button type="submit" boxShadow="sm" _hover={{ boxShadow: 'md' }} _active={{ boxShadow: 'lg' }}>
        Login
      </Button>
      <FormHelperText textAlign="center">
        Welcome Home!
        <br />
        🏠
      </FormHelperText>
    </Stack>
  </form>
);

export default LoginForm;
