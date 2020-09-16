import { Flex, Text } from '@chakra-ui/core';
import { yupResolver } from '@hookform/resolvers';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';


import { useData } from '../../hooks/use-data';
import Form from '../form';
import Input from '../input';
import PrimaryButton from '../primary-button';

const schema = yup.object().shape({
  email: yup.string().email('Email should have correct format').required('Email is a required field'),
});

const normalizePhoneNumber = (value: string) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const hasPhone = watch('hasPhone');

  const onSubmit = data => {
    history.push('./step3');
    setValues(data);
  };

  return (
    <Flex mt="2" direction="column" alignItems="center">
      <Text fontSize="lg" as="i">
        🦄 STEP 2
      </Text>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />
        {/*
          <FormControlLabel
            control={
              <Checkbox
                defaultValue={data.hasPhone}
                defaultChecked={data.hasPhone}
                color="primary"
                inputRef={register}
                name="hasPhone"
              />
            }
            label="Do you have a phone"
          /> */}

        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone Number"
            name="phoneNumber"
            onChange={event => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </Flex>
  );
};

export default Step2;
