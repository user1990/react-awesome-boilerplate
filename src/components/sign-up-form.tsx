import {
  Input,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Divider,
  FormHelperText,
} from '@chakra-ui/core';
import React from 'react';

const SignUpForm = () => (
  <form action="submit">
    <Stack spacing={3}>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="info" />} />
          <Input type="name" placeholder="First name" name="First name" />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <InputGroup>
          <InputLeftElement children={<Icon name="info" />} />
          <Input type="name" placeholder="Last name" name="Last name" />
        </InputGroup>
      </FormControl>
      <Divider borderColor="gray.300" />
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
        Sign up!
      </Button>
      <FormHelperText textAlign="center">
        We will never share your email!
        <br />
      </FormHelperText>
    </Stack>
  </form>
);

export default SignUpForm;
