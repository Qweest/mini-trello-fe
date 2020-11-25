import { mainService } from '../../../api';
import { BOARD, BOARDS_MOVE_COLUMN, COLUMN, COLUMNS, TASKS } from './constants';
import {
  FetchBoardDTO,
  CreateColumnDTO,
  MoveDTO,
  CreateTaskDTO,
  UpdateColumnDTO,
} from './entities';

export const fetchBoard = async ({ boardId }: FetchBoardDTO) => {
  return await mainService.get(BOARD(boardId));
};

export const moveColumn = async (moveDTO: MoveDTO) => {
  const { boardId, newPosition, oldPosition } = moveDTO;

  return await mainService.put(BOARDS_MOVE_COLUMN(boardId), {
    oldPosition,
    newPosition,
  });
};

export const createColumn = async (createColumnDTO: CreateColumnDTO) => {
  return await mainService.post(COLUMNS, createColumnDTO);
};

export const updateColumn = async (updateColumnDTO: UpdateColumnDTO) => {
  const { boardId, id, name } = updateColumnDTO;

  return await mainService.put(COLUMN(id), { boardId, name });
};

export const createTask = async (createTaskDTO: CreateTaskDTO) => {
  return await mainService.post(TASKS, createTaskDTO);
};
