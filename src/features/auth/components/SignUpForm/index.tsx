import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';

import { ROUTE_PATHS } from '../../../../navigation/constants';
import { RootState } from '../../../../store/entities';
import { Form } from '../../../../components';
import { signUpValidator } from '../../validators';
import { GOOGLE_CLIENT_ID } from '../../constants';
import { signUpAction } from '../../thunks';
import {
  Title,
  FormInput,
  FormSubmit,
  DividerWrapper,
  Line,
  LinkBlock,
  Link,
} from '../styles';

const SignUpForm: React.FC = () => {
  const dispatch = useDispatch();
  const { pending } = useSelector((state: RootState) => state.auth);
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    dispatch(signUpAction(values));
  };

  return (
    <React.Fragment>
      <Title>Sign up for your account</Title>
      <Form
        values={values}
        setValues={setValues}
        formValidator={signUpValidator(values.password)}
      >
        <FormInput name="username" placeholder="Username" />
        <FormInput
          name="email"
          type="email"
          inputMode="email"
          placeholder="Email"
        />
        <FormInput name="password" type="password" placeholder="Password" />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
        />
        <FormSubmit onClick={handleSubmit} text="Sign up" pending={pending} />
      </Form>
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
    </React.Fragment>
  );
};

export default SignUpForm;
