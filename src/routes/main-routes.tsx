import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import FormPage from '../page/form';
import Card from '../components/card';
import List from '../components/list';

export const MainRoutes: React.FC<any> = props => {
  return (
    <>
      <Switch>
        <Route path="/logout">{/* <LogoutPage {...props} /> */}</Route>
        <Route path="/register">{/* <RegisterPage {...props} /> */}</Route>
        <Route path="/form">
          <FormPage {...props} />
        </Route>
        <Route path="/card">
          <Card />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Redirect from="*" to="/" exact={true}></Redirect>
      </Switch>
    </>
  );
};
