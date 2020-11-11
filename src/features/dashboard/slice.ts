import { createSlice } from '@reduxjs/toolkit';

import { State } from './entities';
import { fetchBoardAction } from './thunks';

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
  extraReducers: builder => {
    builder.addCase(fetchBoardAction.fulfilled, (state, action) => {
      state.id = action.payload._id;
      state.columns = action.payload.taskColumns;
    })
  },
});

export const { addColumn } = slice.actions;

export default slice.reducer;
