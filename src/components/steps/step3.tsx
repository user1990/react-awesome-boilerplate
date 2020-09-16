import { Flex, Text } from '@chakra-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useData } from '../../hooks/use-data';
import FileInput from '../file-input';
import Form from '../form';
import PrimaryButton from '../primary-button';

const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = data => {
    // history.push('./result');
    setValues(data);
  };

  return (
    <Flex mt="2" direction="column" alignItems="center">
      <Text fontSize="lg" as="i">
        🦄 STEP 3
      </Text>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </Flex>
  );
};

export default Step3;
