import { mainService } from '../../../api';
import { BOARD, LIST, LISTS, CARDS, CARD } from './constants';
import {
  BoardRequest,
  CreateListRequest,
  UpdateListRequest,
  MoveRequest,
  CreateCardRequest,
  MoveCardRequest,
  RemoveListRequest,
  UpdateCardRequest,
  CardRequest,
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

export const removeList = async (removeListRequest: RemoveListRequest) => {
  const { id } = removeListRequest;

  return await mainService.delete(LIST(id));
};

export const fetchCard = async (cardRequest: CardRequest) => {
  const { id } = cardRequest;

  return await mainService.get(CARD(id));
};

export const createCard = async (createCardRequest: CreateCardRequest) => {
  return await mainService.post(CARDS, createCardRequest);
};

export const updateCard = async (updateCardRequest: UpdateCardRequest) => {
  const { id, ...body } = updateCardRequest;

  return await mainService.put(CARD(id), body);
};

export const removeCard = async (removeCardRequest: CardRequest) => {
  const { id } = removeCardRequest;

  return await mainService.delete(CARD(id));
};

export const moveCard = async (moveCardRequest: MoveCardRequest) => {
  const { position, id, listId } = moveCardRequest;

  return await mainService.put(CARD(id), {
    position,
    listId,
  });
};
