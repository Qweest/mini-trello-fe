import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignInResponse, SignUpResponse } from './api/entities';
import { Tokens, User } from './entities';

interface InitialState extends Pick<Tokens, 'accessToken'> {
  user?: User;
  pending: boolean;
  error: string;
}

export const initialState: InitialState = {
  user: undefined,
  accessToken: '',
  pending: false,
  error: '',
};

const slice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUpPending(state) {
      state.pending = true;
      state.error = '';
    },
    signUpSuccess(state, action: PayloadAction<SignUpResponse>) {
      const { user, accessToken, refreshToken } = action.payload;

      state.pending = false;
      state.user = user;
      state.accessToken = accessToken;
      localStorage.setItem('refreshToken', refreshToken);
    },
    signUpFailure(state) {
      state.pending = false;
    },
    signInPending(state) {
      state.pending = true;
      state.error = '';
    },
    signInSuccess(state, action: PayloadAction<SignInResponse>) {
      const { user, accessToken, refreshToken } = action.payload;

      state.pending = false;
      state.user = user;
      state.accessToken = accessToken;
      localStorage.setItem('refreshToken', refreshToken);
    },
    signInFailure(state) {
      state.pending = false;
      state.error = '';
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
