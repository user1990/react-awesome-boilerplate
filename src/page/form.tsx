import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core';
import React from 'react';

import LoginForm from '../components/login-form';
import SignUpForm from '../components/sign-up-form';

const FormPage = () => (
  <Box bg={'gray.200'} w="350px" p={3} boxShadow="sm" rounded="lg">
    <Image src="./security.png" w="80px" mx="auto" mt={12} mb={10} />
    <Tabs variant="enclosed-colored" isFitted m={4}>
      <TabList>
        <Tab>Sign Up</Tab>
        <Tab>Login</Tab>
      </TabList>
      <TabPanels mt={3}>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
        <TabPanel>
          <LoginForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
);

export default FormPage;
