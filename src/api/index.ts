import axios from 'axios';

import { AUTH, BASE_URL, SECURE } from './constants';

export const mainService = axios.create({
  baseURL: `${BASE_URL}${SECURE}`,
});

mainService.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return config;
  },
  async (error) => {
    throw error;
  },
);

export const authService = axios.create({
  baseURL: `${BASE_URL}${AUTH}`,
});
