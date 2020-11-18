import axios from 'axios';

import { BASE_URL, SECURE } from './constants';

export const mainService = axios.create({
  baseURL: `${BASE_URL}${SECURE}`,
});

export const authService = axios.create({
  baseURL: `${BASE_URL}`,
});

