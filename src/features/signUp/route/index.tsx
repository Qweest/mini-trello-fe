import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { GOOGLE_CLIENT_ID } from '../constants';
import {
  SignUpForm,
  Wrapper,
  Title,
  Input,
  SignUpButton,
  SocialLogin,
  TextDivider,
  Content,
  Header,
} from './styles';
import { ReactComponent as TrelloLogo } from '../../../assets/images/trello-logo-blue.svg';
import { signUpAction } from '../thunks';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (
    setValue: React.Dispatch<React.SetStateAction<string>>,
  ) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    dispatch(signUpAction({ email, username, password }));
  };

  return (
    <Wrapper>
      <Header>
        <TrelloLogo width="180" height="100" />
      </Header>
      <Content>
        <Title>Sign up for your account</Title>
        <SignUpForm>
          <Input
            value={email}
            onChange={handleInputChange(setEmail)}
            placeholder={'Enter email'}
          />
          <Input
            value={username}
            onChange={handleInputChange(setUsername)}
            placeholder={'Enter username'}
          />
          <Input
            value={password}
            onChange={handleInputChange(setPassword)}
            placeholder={'Create password'}
          />
          <SignUpButton onClick={onSubmit}>Sign Up</SignUpButton>
        </SignUpForm>
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

export default SignUp;
