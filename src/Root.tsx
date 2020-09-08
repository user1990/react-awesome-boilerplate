import React from 'react';

import AppRouter from './routes/app-router';
import { Normalize } from './components/normalize';
import CustomThemeProvider from './layout/custom-theme-provider';

// import { Provider } from 'react-redux';
// import { Store } from 'redux';

interface RootProps {
  // store: Store;
}

export const Root: React.FC<RootProps> = props => (
  // <Provider store={props.store}>
  <CustomThemeProvider>
    <Normalize />
    <AppRouter {...props} />
  </CustomThemeProvider>
  // </Provider>
);

export default Root;
