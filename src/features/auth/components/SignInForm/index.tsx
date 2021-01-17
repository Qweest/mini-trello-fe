import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTE_PATHS } from '../../../../navigation/constants';
import { RootState } from '../../../../store/entities';
import { Form } from '../../../../components';
import { GOOGLE_CLIENT_ID } from '../../constants';
import { signInValidator } from '../../validators';
import { signInAction } from '../../thunks';
import {
  Title,
  FormInput,
  FormSubmit,
  LinkBlock,
  Link,
  DividerWrapper,
  Line,
  SocialLogin,
} from '../styles';

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const { pending } = useSelector((state: RootState) => state.auth);
  const [values, setValues] = useState({ email: '', password: '' });

  const handleSubmit = () => {
    dispatch(signInAction(values));
  };

  return (
    <React.Fragment>
      <Title>Sign in for your account</Title>
      <Form
        values={values}
        setValues={setValues}
        formValidator={signInValidator}
      >
        <FormInput
          name="email"
          type="email"
          inputMode="email"
          placeholder="Email"
        />
        <FormInput name="password" type="password" placeholder="Password" />
        <FormSubmit onClick={handleSubmit} text="Sign in" pending={pending} />
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
    </React.Fragment>
  );
};

export default SignInForm;
