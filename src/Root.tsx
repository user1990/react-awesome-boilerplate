import 'normalize.css';

import React from 'react';

import { GlobalStyles } from './GlobalStyles';
import AppRouter from './routes/app-router';

interface RootProps {}

export const Root = (props: RootProps) => {
  return (
    <>
      <GlobalStyles />
      <AppRouter {...props} />
    </>
  );
};

export default Root;
