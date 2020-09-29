import React from 'react';

import { Base, Container, Error, Title, Input, Link, Submit, Text, TextSmall } from '../form/form.styles';

interface FormInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
}

export const Form = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;

const FormError = ({ children, ...restProps }) => <Error {...restProps}>{children}</Error>;
const FormTitle = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
const FormBase = ({ children, ...restProps }) => <Base {...restProps}>{children}</Base>;
const FormText = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;
const FormTextSmall = ({ children, ...restProps }) => <TextSmall {...restProps}>{children}</TextSmall>;
const FormLink = ({ children, ...restProps }) => <Link {...restProps}>{children}</Link>;
const FormInput = ({ ...restProps }: FormInputProps) => <Input {...restProps} />;
const FormSubmit = ({ children, ...restProps }) => <Submit {...restProps}>{children}</Submit>;

Form.Title = FormTitle;
Form.Error = FormError;
Form.Base = FormBase;
Form.Text = FormText;
Form.TextSmall = FormTextSmall;
Form.Link = FormLink;
Form.Input = FormInput;
Form.Submit = FormSubmit;

export default Form;
