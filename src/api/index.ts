import axios from 'axios';
import { STATUS_CODES } from 'http';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../features/auth/constants';
import { refreshTokens } from '../features/auth/api';
import { AUTH, BASE_URL, SECURE } from './constants';

export const mainService = axios.create({
  baseURL: `${BASE_URL}${SECURE}`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  },
});

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

      mainService.defaults.headers.common['Authorization'] =
        'Bearer ' + accessToken;

      return mainService(originalRequest);
    }

    throw error;
  },
);

export const authService = axios.create({
  baseURL: `${BASE_URL}${AUTH}`,
});
