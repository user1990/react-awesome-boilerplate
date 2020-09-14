import React from 'react';

import AppRouter from './routes/app-router';
import { Normalize } from './components/normalize';
import CustomThemeProvider from './layout/custom-theme-provider';

import { Provider } from 'react-redux';
import store, { RootState } from './redux/store';

interface RootProps {
  store: RootState;
}

export const Root: React.FC<RootProps> = props => {
  console.log(props);

  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Normalize />
        <AppRouter {...props} />
      </CustomThemeProvider>
    </Provider>
  );
};

export default Root;
