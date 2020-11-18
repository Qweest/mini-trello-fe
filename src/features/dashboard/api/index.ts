import { mainService } from '../../../api';
import { BOARD } from './constants';

export const fetchBoard = async (boardId: string) => {
  return await mainService.get(BOARD(boardId));
};
