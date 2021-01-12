import { AxiosResponse } from 'axios';

import { mainService } from '../../../api';
import { BOARDS } from './constants';
import { BoardsResponse } from './entities';

export const fetchBoards = async (): Promise<AxiosResponse<BoardsResponse>> => {
  return await mainService.get(BOARDS);
};
