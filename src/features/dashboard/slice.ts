import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  BoardResponse,
  CreateListRequest,
  UpdateListRequest,
  ListResponse,
  CreateCardRequest,
  CardResponse,
  RemoveListRequest,
  UpdateCardRequest,
} from './api/entities';
import { Board, List, Card, MovePending, Move, MoveCard } from './entities';
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
    createListFailure(state, action: PayloadAction<CreateListRequest>) {
      const { name } = action.payload;
      const listIndex = state.lists.findIndex(({ id }) => id === name);

      state.lists.splice(listIndex, 1);
    },

    updateListPending(state, action: PayloadAction<UpdateListRequest>) {
      const { name, id: currentId } = action.payload;
      const listIndex = state.lists.findIndex(({ id }) => id === currentId)!;

      state.lists[listIndex].name = name;
    },
    updateListSuccess() {},
    updateListFailure() {},

    moveListPending(state, action: PayloadAction<MovePending<Move>>) {
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

    removeListPending(state, action: PayloadAction<RemoveListRequest>) {
      const { id } = action.payload;
      const { lists } = state;
      const listIndex = lists.findIndex((it) => it.id === id);

      lists.splice(listIndex, 1);
    },
    removeListSuccess() {},
    removeListFailure() {},

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

    updateCardPending(state, action: PayloadAction<UpdateCardRequest>) {
      const { id, title } = action.payload;
      const cardIndex = state.cards.findIndex((it) => it.id === id)!;

      state.cards[cardIndex].title = title;
    },
    updateCardSuccess() {},
    updateCardFailure() {},

    moveCardPending(state, action: PayloadAction<MovePending<MoveCard>>) {
      const { id, toListId, position, adjacentIndex } = action.payload;
      const { cards } = state;
      const sortedListCards = getListSortedCards(cards, toListId);

      // BEWARE! HIGH QUALITY CODE AHEAD!
      if (position === sortedListCards[adjacentIndex]?.position) {
        sortedListCards[adjacentIndex].position++;

        for (
          let i = adjacentIndex + 1;
          sortedListCards[i]?.position === sortedListCards[i - 1].position;
          sortedListCards[i++].position++
        ) {}
      }

      const card = cards.find((it) => it.id === id)!;

      card.listId = toListId;
      card.position = position;
    },
    moveCardSuccess() {},
    moveCardFailure() {},
  },
});

export const { actions } = slice;

export default slice.reducer;
