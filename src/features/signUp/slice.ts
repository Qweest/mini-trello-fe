import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const slice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUpPending() {},
    signUpSuccess() {},
    signUpFailure() {},
  },
});

export const { actions } = slice;

export default slice.reducer;
