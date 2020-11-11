import axios from 'axios';

import { BASE_URL } from './constants';

const mainService = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
});

export default mainService;
