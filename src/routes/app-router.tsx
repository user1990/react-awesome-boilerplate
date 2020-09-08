import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { TopScroller } from '../hooks/top-scroller';
import SiteLayout from '../layout/site-layout';
import LoginPage from '../page/login';
import { MainRoutes } from './main-routes';

interface RouterProps {}

const AppRouter: React.FC<RouterProps> = props => (
  <Router>
    <TopScroller />
    <SiteLayout {...props}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* <PrivateRoute path="/"> */}
        <MainRoutes {...props} />
        {/* </PrivateRoute> */}
        <Redirect from="*" to="/" exact={true}></Redirect>
      </Switch>
    </SiteLayout>
  </Router>
);

export default AppRouter;
