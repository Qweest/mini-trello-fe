import mainService from '../../../api';
import { BOARD_ENDPOINT } from './constants';

export const fetchBoard = async (boardId: string) => {
  return await mainService.get(BOARD_ENDPOINT(boardId));
};
