import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { GOOGLE_CLIENT_ID } from '../../constants';
import {
  Form,
  Wrapper,
  Title,
  Input,
  Button,
  SocialLogin,
  TextDivider,
  Content,
  Header,
} from '../styles';
import { ReactComponent as TrelloLogo } from '../../../../assets/images/trello-logo-blue.svg';
import { signInAction } from '../../thunks';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    dispatch(signInAction({ email, password }));
  };

  return (
    <Wrapper>
      <Header>
        <TrelloLogo width="180" height="100" />
      </Header>
      <Content>
        <Title>Sign up for your account</Title>
        <Form>
          <Input
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder={'Enter email'}
          />
          <Input
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
            placeholder={'Create password'}
          />
          <Button onClick={onSubmit}>Sign In</Button>
        </Form>
        <TextDivider>OR</TextDivider>
        <SocialLogin>
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText={'Continue with Google'}
            cookiePolicy={'single_host_origin'}
          />
        </SocialLogin>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
