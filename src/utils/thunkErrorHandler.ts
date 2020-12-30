import { Middleware } from '@reduxjs/toolkit';

import { REFRESH_TOKENS as REFRESH_URL } from '../features/auth/api/constants';
import { STATUS_CODES } from '../api/constants';
import { RootState } from '../store/entities';

// TODO: refactor
export const thunkErrorHandler: Middleware<null, RootState> = () => (next) => (
  action,
) => {
  if (typeof action === 'function') {
    return next(action).then(null, (err: any) => {
      const url = err?.config?.url;
      const status = err?.config?.response?.status;
      if (url === REFRESH_URL && status === STATUS_CODES.UNAUTHORIZED) {
        console.log('REFRESH FAIL LOGOUT');
      }
    });
  }
  return next(action);
};
