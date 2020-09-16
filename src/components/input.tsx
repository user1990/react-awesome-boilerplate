import { Box, Input as StyledInput, Text } from '@chakra-ui/core';
import React, { forwardRef } from 'react';

interface InputProps {
  swatch?: string;
  inputRef?: any;
  label?: string;
  errors?: any;
  iconUrl?: string;
}

export const Input: React.FC<InputProps | (any & React.InputHTMLAttributes<HTMLInputElement>)> = forwardRef(
  (props, ref) => (
    <>
      {props.label && (
        <Box display="flex" alignItems="center" mb="2">
          <label>
            <Text>{props.label}</Text>
          </label>
        </Box>
      )}
      <Box width="100%" mt="1">
        <StyledInput variant="outline" margin="normal" inputRef={ref} {...props} />
      </Box>
    </>
  ),
);

export default Input;
