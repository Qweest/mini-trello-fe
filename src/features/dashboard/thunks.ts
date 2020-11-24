import { AppThunk } from '../../store';
import {
  FetchBoardDTO,
  CreateColumnDTO,
  MoveDTO,
  CreateTaskDTO,
} from './api/entities';
import { createColumn, createTask, fetchBoard, moveColumn } from './api';
import { actions } from './slice';

export const fetchBoardAction = (
  fetchBoardDTO: FetchBoardDTO,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.fetchBoardPending());
    const { data } = await fetchBoard(fetchBoardDTO);
    dispatch(actions.fetchBoardSuccess(data));
  } catch (e) {
    dispatch(actions.fetchBoardFailure());
  }
};

export const moveColumnAction = (moveDTO: MoveDTO): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.moveColumnPending(moveDTO));
    await moveColumn(moveDTO);
    dispatch(actions.moveColumnSuccess());
  } catch (e) {
    dispatch(actions.moveColumnFailure(moveDTO));
  }
};

export const addColumnAction = (
  createColumnDTO: CreateColumnDTO,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.addColumnPending(createColumnDTO));
    const { data } = await createColumn(createColumnDTO);
    dispatch(actions.addColumnSuccess(data));
  } catch (e) {
    dispatch(actions.addColumnFailure());
  }
};

export const addTaskAction = (createTaskDTO: CreateTaskDTO): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.addTaskPending(createTaskDTO));
    const { data } = await createTask(createTaskDTO);
    dispatch(actions.addTaskSuccess(data));
  } catch (e) {
    dispatch(actions.addTaskFailure());
  }
};
