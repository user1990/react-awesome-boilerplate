import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Card from '../components/card';
import List from '../components/list';
import FormPage from '../page/form';
import { FormRoutes } from './form-routes';

export const MainRoutes: React.FC<any> = props => {
  return (
    <>
      <Switch>
        {/* <Route path="/logout" component={LogoutPage} /> */}
        {/* <Route path="/register" component={RegisterPage} /> */}
        <Route path="/card" component={Card} />
        <Route path="/list" component={List} />
        <Route path="/form" component={FormPage} />
        <FormRoutes />
        <Redirect from="*" to="/" exact={true}></Redirect>
      </Switch>
    </>
  );
};
