import { Box, Flex, Grid } from '@chakra-ui/core';
import React from 'react';

import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Navbar from '../components/navbar';

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = props => {
  return (
    <Grid>
      <Box id="header">
        <Flex direction="column" align="center" justify="center">
          <Navbar />
          <Header {...props} />
        </Flex>
      </Box>
      <Flex w="100%" h="93vh">
        <>{props.children}</>
      </Flex>
      <Box mb={80}>
        <Footer />
      </Box>
    </Grid>
  );
};

export default SiteLayout;
