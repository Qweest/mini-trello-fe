import { mainService } from '../../../api';
import { BOARD, BOARDS_MOVE_LIST, LIST, LISTS, CARDS } from './constants';
import {
  BoardRequest,
  MoveListRequest,
  CreateListRequest,
  UpdateListRequest,
  CreateCardRequest,
} from './entities';

export const fetchBoard = async (boardRequest: BoardRequest) => {
  const { id } = boardRequest;

  return await mainService.get(BOARD(id));
};

export const moveList = async (moveListRequest: MoveListRequest) => {
  const { boardId, newPosition, oldPosition } = moveListRequest;

  return await mainService.put(BOARDS_MOVE_LIST(boardId), {
    oldPosition,
    newPosition,
  });
};

export const createList = async (createListRequest: CreateListRequest) => {
  return await mainService.post(LISTS, createListRequest);
};

export const updateList = async (updateListRequest: UpdateListRequest) => {
  const { boardId, id, name } = updateListRequest;

  return await mainService.put(LIST(id), { boardId, name });
};

export const createCard = async (createCardRequest: CreateCardRequest) => {
  return await mainService.post(CARDS, createCardRequest);
};
