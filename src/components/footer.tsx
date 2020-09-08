import { Box } from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { setBorder } from '../utils/styles-helper';
import { HeaderFour, HeaderSix } from './typography';

interface FooterProps {}

const StyledFooter = styled.div`
  background: #fff;
  padding: 1rem 0 3.5rem;
  margin: 0 auto;
  width: 100%;

  svg {
    width: 1.5rem;
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 100%;
    ${setBorder({ color: '#333029' })}
  }

  a:first-child svg {
    margin-left: 0;
  }
`;

export const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Box>
        <HeaderFour style={{ letterSpacing: '0.05rem' }}>
          <Link to="/">Terms & Conditions</Link>
        </HeaderFour>
      </Box>
      <Box>
        <HeaderSix>
          @ {currentYear} Project <span className="powered-by">Powered by</span>
        </HeaderSix>
      </Box>
    </StyledFooter>
  );
};
