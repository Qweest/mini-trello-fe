import { createSlice } from '@reduxjs/toolkit';

import { Board } from './entities';
import { fetchBoardAction } from './thunks';

export const initialState: Board = {
  _id: '',
  name: '',
  taskColumns: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addColumn() {},
  },
  extraReducers: builder => {
    builder.addCase(fetchBoardAction.fulfilled, (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.taskColumns = action.payload.taskColumns;
    })
  },
});

export const { addColumn } = slice.actions;

export default slice.reducer;
