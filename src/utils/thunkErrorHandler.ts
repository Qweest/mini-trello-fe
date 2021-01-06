import { Middleware } from '@reduxjs/toolkit';

import { REFRESH_TOKENS as REFRESH_URL } from '../features/auth/api/constants';
import { STATUS_CODES } from '../api/constants';
import { RootState } from '../store/entities';
import { actions } from '../features/auth/slice';

// TODO: refactor
export const thunkErrorHandlerRefresh: Middleware<null, RootState> = (
  state,
) => (next) => (action) => {
  if (typeof action === 'function') {
    return next(action).then(null, (err: any) => {
      const url = err?.config?.url;
      const status = err?.response?.status;
      if (url === REFRESH_URL && status === STATUS_CODES.UNAUTHORIZED) {
        console.log('dispatch logout');
        state.dispatch(actions.logout());
      }
    });
  }
  return next(action);
};
