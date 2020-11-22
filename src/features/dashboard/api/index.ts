import { mainService } from '../../../api';
import { BOARD, BOARDS_MOVE, TASKS } from './constants';
import { BoardDTO, MoveDTO, TaskDTO } from './entities';

export const fetchBoard = async ({ boardId }: BoardDTO) => {
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

export const createTask = async (taskDTO: TaskDTO) => {
  return await mainService.post(TASKS, taskDTO);
};
