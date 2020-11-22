import { AppThunk } from '../../store';
import { BoardDTO, MoveDTO, TaskDTO } from './api/entities';
import { createTask, fetchBoard, moveColumn } from './api';
import { actions } from './slice';

export const fetchBoardAction = (boardDTO: BoardDTO): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.fetchBoardPending());
    const { data } = await fetchBoard(boardDTO);
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

export const addTaskAction = (taskDTO: TaskDTO): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(actions.addTaskPending(taskDTO));
    const { data } = await createTask(taskDTO);
    dispatch(actions.addTaskSuccess(data));
  } catch (e) {
    dispatch(actions.addTaskFailure());
  }
};
