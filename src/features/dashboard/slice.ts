import { createSlice } from '@reduxjs/toolkit';

import { State } from './entities';

export const initialState: State = {
  id: '',
  columns: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addColumn() {},
  },
});

export const { addColumn } = slice.actions;

export default slice.reducer;
