import React from 'react';
import styled from 'styled-components';
import { setRem } from '../utils/styles-helper';

interface LogoProps {
  url: string;
}

const StyledLogoImageElement = styled.div`
  width: ${setRem(100)};
  img {
    width: 100%;
  }
`;

export const Logo = ({ url }: LogoProps) => {
  return (
    <StyledLogoImageElement>
      <img src={url} alt="logo" />
    </StyledLogoImageElement>
  );
};
