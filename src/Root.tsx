import React from 'react';
import { Provider } from 'react-redux';

import { Normalize } from './components/normalize';
import { DataProvider } from './hooks/use-data';
import CustomThemeProvider from './layout/custom-theme-provider';
import store, { RootState } from './redux/store';
import AppRouter from './routes/app-router';

interface RootProps {
  store: RootState;
}

export const Root: React.FC<RootProps> = props => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Normalize />
        <DataProvider>
          <AppRouter {...props} />
        </DataProvider>
      </CustomThemeProvider>
    </Provider>
  );
};

export default Root;
