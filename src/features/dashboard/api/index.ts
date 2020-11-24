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
  currentPosition,
  newPosition,
}: MoveDTO) => {
  return await mainService.put(BOARDS_MOVE(boardId), {
    currentPosition,
    newPosition,
  });
};

export const createColumn = async (createColumnDTO: CreateColumnDTO) => {
  return await mainService.post(COLUMNS, createColumnDTO);
};

export const createTask = async (createTaskDTO: CreateTaskDTO) => {
  return await mainService.post(TASKS, createTaskDTO);
};
