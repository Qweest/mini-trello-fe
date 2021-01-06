import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { ACCESS_TOKEN } from '../features/auth/constants';
import { fetchMeAction } from '../features/auth/thunks';
import Dashboard from '../features/dashboard';
import { RootState } from '../store/entities';
import Auth from '../features/auth';
import { ROUTE_PATHS } from './constants';

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      dispatch(fetchMeAction());
    } else {
      history.push(ROUTE_PATHS.SIGN_IN);
    }
  }, []);

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
