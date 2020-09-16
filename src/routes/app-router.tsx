import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { TopScroller } from '../hooks/top-scroller';
import SiteLayout from '../layout/site-layout';
import { FormRoutes } from './form-routes';
import { publicPaths } from './public-routes';

interface RouterProps {}

const publicRoutes = publicPaths.map(({ path, ...props }) => <Route key={path} path={path} {...props} />);

const AppRouter: React.FC<RouterProps> = props => (
  <Router>
    <TopScroller />
    <SiteLayout {...props}>
      <Switch>
        {publicRoutes}
        {/* <PrivateRoute path="/"> */}
        <FormRoutes {...props} />
        <Redirect from="*" to="/" exact={true}></Redirect>
      </Switch>
    </SiteLayout>
  </Router>
);

export default AppRouter;
