import { AxiosResponse } from 'axios';

import { authService, mainService } from '../../../api';
import { Tokens, User } from '../entities';
import { FETCH_ME, SIGN_IN, SIGN_UP, REFRESH_TOKENS } from './constants';
import { SignInRequest, AuthResponse, SignUpRequest } from './entities';

export const signUp = async (
  signUpRequest: SignUpRequest,
): Promise<AxiosResponse<AuthResponse>> => {
  return await authService.post(SIGN_UP, signUpRequest);
};

export const signIn = async (
  signInRequest: SignInRequest,
): Promise<AxiosResponse<AuthResponse>> => {
  return await authService.post(SIGN_IN, signInRequest);
};

export const refreshTokens = async (
  refreshToken: string,
): Promise<AxiosResponse<Tokens>> => {
  return await authService.post(REFRESH_TOKENS, {
    refreshToken,
  });
};

export const fetchMe = async (): Promise<AxiosResponse<User>> => {
  return await mainService.get(FETCH_ME);
};
