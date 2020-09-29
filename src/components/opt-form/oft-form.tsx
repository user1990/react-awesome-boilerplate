import React from 'react';

import { Break, Button, Container, Input, Text } from './opt-form.styles';

interface InputProps {
  placeholder: string;
}

export const OptForm = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;
export default OptForm;

const OptFormInput = ({ ...restProps }: InputProps) => <Input {...restProps} />;
const OptFormText = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;
const OptFormBreak = ({ ...restProps }) => <Break {...restProps} />;
const OptFormButton = ({ children, ...restProps }) => (
  <Button {...restProps}>
    {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
  </Button>
);

OptForm.Input = OptFormInput;
OptForm.Text = OptFormText;
OptForm.Break = OptFormBreak;
OptForm.Button = OptFormButton;
