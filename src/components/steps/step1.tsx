import { Box, Flex, Text } from '@chakra-ui/core';
import { yupResolver } from '@hookform/resolvers';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import { useData } from '../../hooks/use-data';
import Form from '../form';
import Input from '../input';
import PrimaryButton from '../primary-button';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

const Step1 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data?.firstName, lastName: data?.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { firstName: string; lastName: string }) => {
    history.push('./step2');
    setValues(data);
  };

  return (
    <Flex mt="2" direction="column" alignItems="center">
      <Text fontSize="lg" as="i">
        🦄 STEP 1
      </Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <Box mt={4}>
          <PrimaryButton>Next</PrimaryButton>
        </Box>
      </Form>
    </Flex>
  );
};

export default Step1;
