import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoadingPage from '../components/LoadingPage';
import Home from '../features/home/route';
import Dashboard from '../features/dashboard';
import Auth from '../features/auth';
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
        <React.Fragment>
          <Route path={ROUTE_PATHS.SIGN_UP}>
            <Auth.SignUp />
          </Route>

          <Route path={ROUTE_PATHS.SIGN_IN}>
            <Auth.SignIn />
          </Route>

          <Route path={ROUTE_PATHS.ROOT}>
            <Redirect to={ROUTE_PATHS.SIGN_IN} />
          </Route>
        </React.Fragment>
      )}
    </Switch>
  );
};

export default Navigation;
