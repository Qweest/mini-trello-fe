import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  BoardResponse,
  CreateListRequest,
  UpdateListRequest,
  ListResponse,
  CreateCardRequest,
  CardResponse,
} from './api/entities';
import {
  Board,
  List,
  Card,
  MoveActionPending,
  MoveAction,
  MoveCardAction,
} from './entities';
import { getListSortedCards, sortByPosition } from './helpers';

export const initialState: Board = {
  id: '',
  name: '',
  lists: [],
  cards: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchBoardPending() {},
    fetchBoardSuccess(state, action: PayloadAction<BoardResponse>) {
      const { id, name, lists, cards } = action.payload;

      state.id = id;
      state.name = name;
      state.lists = sortByPosition(lists);
      state.cards = cards;
    },
    fetchBoardFailure() {},

    createListPending(state, action: PayloadAction<CreateListRequest>) {
      const { name, position } = action.payload;
      const pendingList: List = {
        id: name,
        name,
        boardId: state.id,
        position,
      };

      state.lists.push(pendingList);
    },
    createListSuccess(state, action: PayloadAction<ListResponse>) {
      const { payload } = action;
      const listIndex = state.lists.findIndex(({ id }) => id === payload.name)!;

      state.lists[listIndex] = payload;
    },
    createListFailure() {},

    updateListPending(state, action: PayloadAction<UpdateListRequest>) {
      const { name, id: currentId } = action.payload;
      const list = state.lists.find(({ id }) => id === currentId)!;

      list.name = name;
    },
    updateListSuccess() {},
    updateListFailure() {},

    moveListPending(
      state,
      action: PayloadAction<MoveActionPending<MoveAction>>,
    ) {
      const { oldIndex, position, adjacentIndex } = action.payload;
      const { lists } = state;

      lists[oldIndex].position = position;

      // BEWARE! HIGH QUALITY CODE AHEAD!
      if (position === lists[adjacentIndex]?.position) {
        lists[adjacentIndex].position++;

        for (
          let i = adjacentIndex + 1;
          lists[i]?.position === lists[i - 1].position;
          lists[i++].position++
        ) {}
      }

      state.lists = sortByPosition(lists);
    },
    moveListSuccess() {},
    moveListFailure() {},

    createCardPending(state, action: PayloadAction<CreateCardRequest>) {
      const { listId, title, position, boardId } = action.payload;
      const pendingCard: Card = {
        id: title,
        boardId,
        listId,
        title,
        position,
      };

      state.cards.push(pendingCard);
    },
    createCardSuccess(state, action: PayloadAction<CardResponse>) {
      const { payload } = action;
      const cardIndex = state.cards.findIndex(
        ({ id }) => id === payload.title,
      )!;

      state.cards[cardIndex] = action.payload;
    },
    createCardFailure() {},

    moveCardPending(
      state,
      action: PayloadAction<MoveActionPending<MoveCardAction>>,
    ) {
      const { id, toListId, position, adjacentIndex } = action.payload;
      const { cards } = state;
      const card = cards.find((it) => it.id === id)!;

      // BEWARE! HIGH QUALITY CODE AHEAD!
      const sortedCards = getListSortedCards(cards, toListId);

      if (position === sortedCards[adjacentIndex]?.position) {
        sortedCards[adjacentIndex].position++;

        for (
          let i = adjacentIndex + 1;
          sortedCards[i]?.position === sortedCards[i - 1].position;
          sortedCards[i++].position++
        ) {}
      }

      card.listId = toListId;
      card.position = position;
    },
    moveCardSuccess() {},
    moveCardFailure() {},
  },
});

export const { actions } = slice;

export default slice.reducer;
