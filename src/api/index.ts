import axios from 'axios';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../features/auth/constants';
import { refreshTokens } from '../features/auth/api';
import { AUTH, BASE_URL, SECURE, STATUS_CODES } from './constants';

//TODO: refactor and split services
export const mainService = axios.create({
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

      const { data } = await refreshTokens(oldRefreshToken);
      const { accessToken, refreshToken } = data;

      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      return mainService(originalRequest);
    }

    throw error;
  },
);

export const authService = axios.create({
  baseURL: `${BASE_URL}${AUTH}`,
});
