import axios from 'axios';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../features/auth/constants';
import { Tokens } from '../features/auth/entities';
import { AUTH, BASE_URL } from './constants';

const authService = axios.create({
  baseURL: `${BASE_URL}${AUTH}`,
});

authService.interceptors.response.use((response) => {
  const { data } = response;
  const { accessToken, refreshToken } = data as Tokens;

  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);

  return response;
});

export default authService;
