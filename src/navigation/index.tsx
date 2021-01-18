import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../features/dashboard';
import Auth from '../features/auth';
import { LoadingPage } from '../components';
import { hooks } from '../utils';
import { ROUTE_PATHS } from './constants';

const Navigation: React.FC = () => {
  const [hasToken, hasUser] = hooks.useAuth();

  if (hasToken && !hasUser) {
    return <LoadingPage />;
  }

  return (
    <Switch>
      {hasToken ? (
        <React.Fragment>
          <Route path={ROUTE_PATHS.DASHBOARD}>
            <Dashboard />
          </Route>

          <Route path={ROUTE_PATHS.ROOT}>
            <Redirect to={ROUTE_PATHS.DASHBOARD} />
          </Route>
        </React.Fragment>
      ) : (
        <Route path={ROUTE_PATHS.ROOT}>
          <Auth />
        </Route>
      )}
    </Switch>
  );
};

export default Navigation;
