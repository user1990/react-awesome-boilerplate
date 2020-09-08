import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';

import { customTheme } from '../data/theme';

interface CustomThemeProviderProps {
  children: React.ReactNode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);

export default CustomThemeProvider;
