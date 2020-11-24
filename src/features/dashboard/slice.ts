import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CreateColumnDTO,
  MoveDTO,
  CreateTaskDTO,
  TaskLoaded,
  ColumnLoaded,
} from './api/entities';
import { Board } from './entities';

export const initialState: Board = {
  id: '',
  name: '',
  taskColumns: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchBoardPending() {},
    fetchBoardSuccess(state, action: PayloadAction<Board>) {
      const { id, name, taskColumns } = action.payload;

      state.id = id;
      state.name = name;
      state.taskColumns = taskColumns;
    },
    fetchBoardFailure() {},

    moveColumnPending(state, action: PayloadAction<MoveDTO>) {
      const { currentPosition, newPosition } = action.payload;
      const currentColumn = state.taskColumns[currentPosition];
      const filteredColumns = state.taskColumns.filter(
        (it, index) => index !== currentPosition,
      );

      state.taskColumns = [
        ...filteredColumns.slice(0, newPosition),
        currentColumn,
        ...filteredColumns.slice(newPosition),
      ];
    },
    moveColumnSuccess() {},
    moveColumnFailure(state, action: PayloadAction<MoveDTO>) {
      const { currentPosition, newPosition } = action.payload;
      const currentColumn = state.taskColumns[currentPosition];
      const filteredColumns = state.taskColumns.filter(
        (it, index) => index !== currentPosition,
      );

      state.taskColumns = [
        ...filteredColumns.slice(0, newPosition),
        currentColumn,
        ...filteredColumns.slice(newPosition),
      ];
    },

    addColumnPending(state, action: PayloadAction<CreateColumnDTO>) {
      const { name } = action.payload;

      state.taskColumns.push({ name, id: name, tasks: [], boardId: state.id });
    },
    addColumnSuccess(state, action: PayloadAction<ColumnLoaded>) {
      const { payload } = action;
      const currentColumnIndex = state.taskColumns.findIndex(
        ({ id }) => id === payload.name,
      )!;

      state.taskColumns[currentColumnIndex] = payload;
    },
    addColumnFailure() {},

    addTaskPending(state, action: PayloadAction<CreateTaskDTO>) {
      const { taskColumnId, title } = action.payload;
      const currentColumn = state.taskColumns.find(
        ({ id }) => id === taskColumnId,
      )!;

      currentColumn.tasks.push({ id: title, title });
    },
    addTaskSuccess(state, action: PayloadAction<TaskLoaded>) {
      const { taskColumnId, title } = action.payload;
      const currentColumn = state.taskColumns.find(
        ({ id }) => id === taskColumnId,
      )!;
      const currentTaskIndex = currentColumn.tasks.findIndex(
        ({ id }) => id === title,
      )!;

      currentColumn.tasks[currentTaskIndex] = action.payload;
    },
    addTaskFailure() {},
  },
});

export const { actions } = slice;

export default slice.reducer;
