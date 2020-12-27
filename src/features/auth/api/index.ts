import { AxiosResponse } from 'axios';
import { authService } from '../../../api';
import { SIGN_IN, SIGN_UP } from './constants';
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from './entities';

export const signUp = async (
  signUpRequest: SignUpRequest,
): Promise<AxiosResponse<SignUpResponse>> => {
  return await authService.post(SIGN_UP, signUpRequest);
};

export const signIn = async (
  signInRequest: SignInRequest,
): Promise<AxiosResponse<SignInResponse>> => {
  return await authService.post(SIGN_IN, signInRequest);
};
