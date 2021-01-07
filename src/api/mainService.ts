import axios from 'axios';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../features/auth/constants';
import { refreshTokens } from '../features/auth/api';
import { Tokens } from '../features/auth/entities';
import { BASE_URL, SECURE, STATUS_CODES } from './constants';

const mainService = axios.create({
  baseURL: `${BASE_URL}${SECURE}`,
});

mainService.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    return config;
  },
  async (error) => {
    throw error;
  },
);

mainService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === STATUS_CODES.UNAUTHORIZED &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const oldRefreshToken = localStorage.getItem(REFRESH_TOKEN);

      if (!oldRefreshToken) {
        throw error;
      }

      localStorage.clear();

      const { data } = await refreshTokens(oldRefreshToken);
      const { accessToken, refreshToken } = data as Tokens;

      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      return mainService(originalRequest);
    }

    throw error;
  },
);

export default mainService;
