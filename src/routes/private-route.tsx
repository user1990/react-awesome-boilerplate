import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  user: any;
  path: string;
  component: React.FC<JSX.Element>;
}

export const PrivateRoute = ({ user, component: Component, ...rest }: PrivateRouteProps) => (
  <Route
    {...rest}
    render={props =>
      !!user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: 'signin',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
