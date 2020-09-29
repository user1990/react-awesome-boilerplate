import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { useAuthListener } from '../hooks/use-auth-listener';
import { privatePaths } from './private-paths';
import PrivateRoute from './private-route';
import { publicPaths } from './public-paths';
import PublicRoute from './public-route';

const AppRouter = () => {
  const { user } = useAuthListener();

  console.log(user);

  const publicRoutes = publicPaths.map(({ path, component, ...props }) => (
    <PublicRoute key={path} user={user} path={path} component={component} {...props} />
  ));
  const privateRoutes = privatePaths.map(({ path, component, ...props }) => (
    <PrivateRoute key={path} user={user} path={path} component={component} {...props} />
  ));

  return (
    <Router>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <Redirect from="*" to="/" exact={true}></Redirect>
      </Switch>
    </Router>
  );
};

export default AppRouter;
