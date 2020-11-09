import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../features/dashboard';
import { ROUTE_PATHS } from './constants';

const Navigation = () => {
  return (
    <Switch>
      <Route path={ROUTE_PATHS.DASHBOARD}>
        <Dashboard />
      </Route>

      <Route path={ROUTE_PATHS.ROOT}>
        <Redirect to={ROUTE_PATHS.DASHBOARD} />
      </Route>
    </Switch>
  );
};

export default Navigation;
