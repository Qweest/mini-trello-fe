import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE_PATHS } from '../../../navigation/constants';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import { Wrapper, Ocean, Wave, Logo, Content } from './styles';

const Auth: React.FC = () => {
  return (
    <Wrapper withHeader={false}>
      <Logo />
      <Content>
        <Switch>
          <Route path={ROUTE_PATHS.SIGN_IN}>
            <SignInForm />
          </Route>
          <Route path={ROUTE_PATHS.SIGN_UP}>
            <SignUpForm />
          </Route>

          <Route path={ROUTE_PATHS.ROOT}>
            <Redirect to={ROUTE_PATHS.SIGN_IN} />
          </Route>
        </Switch>
      </Content>
      <Ocean>
        <Wave />
        <Wave />
      </Ocean>
    </Wrapper>
  );
};

export default Auth;
