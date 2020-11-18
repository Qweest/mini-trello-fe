import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBoard } from './api';

export const fetchBoardAction = createAsyncThunk(
  'dashboard/fetchBoard',
  async (boardId: string) => {
    const { data } = await fetchBoard(boardId);

    return data;
  },
);
