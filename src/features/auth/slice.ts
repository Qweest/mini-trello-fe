import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthResponse } from './api/entities';
import { Auth, User } from './entities';

export const initialState: Auth = {
  user: undefined,
  pending: false,
  error: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authPending(state) {
      state.pending = true;
      state.error = '';
    },
    authSuccess(state, action: PayloadAction<AuthResponse>) {
      const { user } = action.payload;

      state.pending = false;
      state.user = user;
    },
    authFailure(state) {
      state.pending = false;
    },

    fetchMePending() {},
    fetchMeSuccess(state, action: PayloadAction<User>) {
      const user = action.payload;

      state.user = user;
    },
    fetchMeFailure() {},

    logout(state) {
      state.user = undefined;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
