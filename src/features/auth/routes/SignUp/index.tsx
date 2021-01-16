import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { GOOGLE_CLIENT_ID } from '../../constants';
import { signUpAction } from '../../thunks';
import {
  Wrapper,
  Title,
  Input,
  SubmitButton,
  DividerWrapper,
  Content,
  Logo,
  Line,
  LinkBlock,
  Link,
} from '../styles';
import { ROUTE_PATHS } from '../../../../navigation/constants';
import { RootState } from '../../../../store/entities';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { pending } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(signUpAction({ email, username, password, confirmPassword }));
  };

  return (
    <Wrapper>
      <Logo />
      <Content>
        <Title>Sign up for your account</Title>
        <form>
          <Input
            name="username"
            value={username}
            onChange={handleInputChange(setUsername)}
            placeholder="Username"
          />
          <Input
            name="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
            placeholder="Password"
          />
          <Input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
            placeholder="Confirm password"
          />
          <SubmitButton
            onClick={handleSubmit}
            text="Sign up"
            pending={pending}
          />
        </form>
        <LinkBlock>
          {'Already have an account?'}
          <Link to={ROUTE_PATHS.SIGN_IN}>Sign in</Link>
        </LinkBlock>
        <DividerWrapper>
          <Line />
          <span>OR</span>
          <Line />
        </DividerWrapper>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText={'Continue with Google'}
          cookiePolicy={'single_host_origin'}
        />
      </Content>
    </Wrapper>
  );
};

export default SignUp;
