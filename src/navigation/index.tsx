import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../features/dashboard';
import Auth from '../features/auth';
import { ROUTE_PATHS } from './constants';
import { RootState } from '../store/entities';

const Navigation: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <Switch>
      {!user ? (
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
      ) : (
        <React.Fragment>
          <Route path={ROUTE_PATHS.DASHBOARD}>
            <Dashboard />
          </Route>

          <Route path={ROUTE_PATHS.ROOT}>
            <Redirect to={ROUTE_PATHS.DASHBOARD} />
          </Route>
        </React.Fragment>
      )}
    </Switch>
  );
};

export default Navigation;
