import { SECURE } from '../../../api/constants';

export const BOARDS_ENDPOINT = `${SECURE}/boards`;
export const BOARD_ENDPOINT = (id: string) => `${SECURE}/boards/${id}`;
