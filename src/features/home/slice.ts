import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BoardsResponse } from './api/entities';

import { Home } from './entities';

export const initialState: Home = {
  boards: [],
  pending: false,
  error: '',
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchBoardsPending(state) {
      state.pending = true;
      state.error = '';
    },
    fetchBoardsSuccess(state, action: PayloadAction<BoardsResponse>) {
      state.pending = false;
      state.boards = action.payload;
    },
    fetchBoardsFailure(state) {
      state.pending = false;
      state.error = '';
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
