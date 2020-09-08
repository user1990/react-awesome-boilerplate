import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

export const TopScroller: React.FC = () => {
  const routeMatch = useRouteMatch();

  useEffect(() => {
    document.getElementById('header').scrollIntoView();
  }, [routeMatch]);

  return null;
};
