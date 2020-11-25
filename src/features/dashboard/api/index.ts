import { mainService } from '../../../api';
import { BOARD, BOARDS_MOVE, COLUMNS, TASKS } from './constants';
import {
  FetchBoardDTO,
  CreateColumnDTO,
  MoveDTO,
  CreateTaskDTO,
} from './entities';

export const fetchBoard = async ({ boardId }: FetchBoardDTO) => {
  return await mainService.get(BOARD(boardId));
};

export const moveColumn = async ({
  boardId,
  oldPosition,
  newPosition,
}: MoveDTO) => {
  return await mainService.put(BOARDS_MOVE(boardId), {
    oldPosition,
    newPosition,
  });
};

export const createColumn = async (createColumnDTO: CreateColumnDTO) => {
  return await mainService.post(COLUMNS, createColumnDTO);
};

export const createTask = async (createTaskDTO: CreateTaskDTO) => {
  return await mainService.post(TASKS, createTaskDTO);
};
