import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Auth, User } from './entities';

export const initialState: Auth = {
  user: null,
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
    authSuccess(state, action: PayloadAction<User>) {
      const user = action.payload;

      state.pending = false;
      state.user = user;
    },
    authFailure(state) {
      state.pending = false;
    },

    fetchMePending(state) {
      state.pending = true;
      state.error = '';
    },
    fetchMeSuccess(state, action: PayloadAction<User>) {
      const user = action.payload;

      state.pending = false;
      state.user = user;
    },
    fetchMeFailure(state) {
      state.pending = false;
    },

    logout(state) {
      state.user = null;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
