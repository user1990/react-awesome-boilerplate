import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PublicRouteProps {
  user: any;
  path: string;
  component: React.FC<JSX.Element>;
  exact?: boolean;
}

export const PublicRoute = ({ user, path, component: Component, ...rest }: PublicRouteProps) => {
  console.log(!user);
  return (
    <Route {...rest} render={props => (!!user ? <Component {...props} /> : <Redirect to={{ pathname: path }} />)} />
  );
};
export default PublicRoute;
