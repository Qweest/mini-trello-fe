import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { required, email, length } from '../../../../utils/formValidation';
import { ROUTE_PATHS } from '../../../../navigation/constants';
import { RootState } from '../../../../store/entities';
import { Form } from '../../../../components';
import { GOOGLE_CLIENT_ID } from '../../constants';
import { signInAction } from '../../thunks';
import {
  Wrapper,
  Logo,
  Title,
  Content,
  Input,
  SubmitButton,
  LinkBlock,
  Link,
  DividerWrapper,
  Line,
  SocialLogin,
} from '../styles';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { pending } = useSelector((state: RootState) => state.auth);
  const [values, setValues] = useState({ email: '', password: '' });

  const handleSubmit = () => {
    dispatch(signInAction(values));
  };

  return (
    <Wrapper>
      <Logo />
      <Content>
        <Title>Sign in for your account</Title>
        <Form values={values} setValues={setValues}>
          <Input
            name="email"
            type="email"
            inputMode="email"
            placeholder="Email"
            validations={[required('The email field is required'), email()]}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            validations={[
              required('The password field is required'),
              length('Invalid password length', 8, 20),
            ]}
          />
          <SubmitButton
            onClick={handleSubmit}
            text="Sign in"
            pending={pending}
          />
        </Form>
        <LinkBlock>
          {"Don't have an account yet?"}
          <Link to={ROUTE_PATHS.SIGN_UP}>Sign up</Link>
        </LinkBlock>
        <DividerWrapper>
          <Line />
          <span>OR</span>
          <Line />
        </DividerWrapper>
        <SocialLogin>
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            cookiePolicy="single_host_origin"
          />
        </SocialLogin>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
