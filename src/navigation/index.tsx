import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../features/home/route';
import Dashboard from '../features/dashboard';
import Auth from '../features/auth';
import { LoadingPage, Header } from '../components';
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
          <Header />

          <Route exact path={ROUTE_PATHS.ROOT}>
            <Redirect to={ROUTE_PATHS.HOME} />
          </Route>

          <Route path={ROUTE_PATHS.HOME}>
            <Home />
          </Route>

          <Route path={ROUTE_PATHS.DIST_DASHBOARD}>
            <Dashboard />
          </Route>

          <Route exact path={ROUTE_PATHS.DASHBOARD}>
            <Redirect to={ROUTE_PATHS.HOME} />
          </Route>

          {/* TODO: add default page */}
          <Route>Page Not Found</Route>
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
