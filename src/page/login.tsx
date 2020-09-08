import { Box } from '@chakra-ui/core';
import React from 'react';
import styled from 'styled-components';

import { HeaderOne, HeaderThree } from '../components/typography';
import { MAX_CONTENT_WIDTH_SMALL } from '../data/constants';

interface LoginProps {}

const StyledLink = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const LoginPage: React.FC<LoginProps> = ({}) => {
  return (
    <Box maxWidth={MAX_CONTENT_WIDTH_SMALL} margin="auto" mt={['2', '5']} pt="3" mb="5" pb="3">
      <Box ml="4" mr="4">
        <HeaderOne isBold={true} isUppercase={true}>
          Login
        </HeaderOne>
        <Box ml={['0', '124px']} mr={['0', '124px']}>
          <Box display="flex" alignItems="left" pl={2}>
            <StyledLink>
              <HeaderThree lighter={true}>Create Account</HeaderThree>
            </StyledLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
