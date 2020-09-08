import { Box } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {}

const StyledHeader = styled.div``;

export const Header: React.FC<HeaderProps> = ({}) => (
  <StyledHeader>
    <Box>
      <Box display="flex" pl="5" pt="2">
        <Link to="/">{/* <Logo url={LOGO_URL} /> */}</Link>
      </Box>
    </Box>
  </StyledHeader>
);
