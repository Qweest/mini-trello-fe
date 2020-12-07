import { mainService } from '../../../api';
import { BOARD, LIST, LISTS, CARDS, CARD } from './constants';
import {
  BoardRequest,
  CreateListRequest,
  UpdateListRequest,
  MoveRequest,
  CreateCardRequest,
  MoveCardRequest,
} from './entities';

export const fetchBoard = async (boardRequest: BoardRequest) => {
  const { id } = boardRequest;

  return await mainService.get(BOARD(id));
};

export const createList = async (createListRequest: CreateListRequest) => {
  return await mainService.post(LISTS, createListRequest);
};

export const updateList = async (updateListRequest: UpdateListRequest) => {
  const { id, name } = updateListRequest;

  return await mainService.put(LIST(id), { name });
};

export const moveList = async (moveRequest: MoveRequest) => {
  const { position, id } = moveRequest;

  return await mainService.put(LIST(id), {
    position,
  });
};

export const createCard = async (createCardRequest: CreateCardRequest) => {
  return await mainService.post(CARDS, createCardRequest);
};

export const moveCard = async (moveCardRequest: MoveCardRequest) => {
  const { position, id, listId } = moveCardRequest;

  return await mainService.put(CARD(id), {
    position,
    listId,
  });
};
