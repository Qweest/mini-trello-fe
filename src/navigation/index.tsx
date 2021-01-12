import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import LoadingPage from '../components/LoadingPage';
import Dashboard from '../features/dashboard';
import Auth from '../features/auth';
import { hooks } from '../utils';
import { ROUTE_PATHS } from './constants';
import Boards from '../features/home/route';

const Navigation: React.FC = () => {
  const [hasToken, hasUser] = hooks.useAuth();

  if (hasToken && !hasUser) {
    return <LoadingPage />;
  }

  return (
    <Switch>
      {hasToken ? (
        <React.Fragment>
          <Route path={ROUTE_PATHS.ROOT}>
            <Redirect to={ROUTE_PATHS.BOARDS} />
          </Route>

          <Route path={ROUTE_PATHS.BOARDS}>
            <Boards />
          </Route>

          <Route path={ROUTE_PATHS.DASHBOARD}>
            <Dashboard />
          </Route>
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
