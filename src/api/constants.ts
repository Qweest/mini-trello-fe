const { REACT_APP_API_URL } = process.env;

export const BASE_URL = REACT_APP_API_URL;
export const SECURE = '/secure';
export const AUTH = '/auth';
export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500,
};
