import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import sortBy from 'lodash/sortBy';

import {
  BoardResponse,
  CreateListRequest,
  UpdateListRequest,
  ListResponse,
  CreateCardRequest,
  CardResponse,
} from './api/entities';
import { Board, MoveListAction, MoveListActionPending } from './entities';

export const initialState: Board = {
  id: '',
  name: '',
  lists: [],
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchBoardPending() {},
    fetchBoardSuccess(state, action: PayloadAction<BoardResponse>) {
      const { id, name, lists } = action.payload;

      state.id = id;
      state.name = name;
      state.lists = sortBy(lists, 'position');
    },
    fetchBoardFailure() {},

    createListPending(state, action: PayloadAction<CreateListRequest>) {
      const { name, position } = action.payload;
      const pendingList = {
        id: name,
        name,
        cards: [],
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

    moveListPending(state, action: PayloadAction<MoveListActionPending>) {
      const { oldIndex, position, adjacentIndex } = action.payload;
      const { lists } = state;

      lists[oldIndex].position = position;

      if (lists[adjacentIndex] && position === lists[adjacentIndex].position) {
        lists[adjacentIndex].position++;

        for (
          let i = adjacentIndex;
          lists[i].position === lists[i + 1]?.position;
          i++
        ) {
          lists[i + 1].position++;
        }
      }

      state.lists = sortBy(lists, 'position');
    },
    moveListSuccess() {},
    moveListFailure() {},

    createCardPending(state, action: PayloadAction<CreateCardRequest>) {
      const { listId, title } = action.payload;
      const list = state.lists.find(({ id }) => id === listId)!;

      list.cards.push({ id: title, title });
    },
    createCardSuccess(state, action: PayloadAction<CardResponse>) {
      const { listId, title } = action.payload;
      const list = state.lists.find(({ id }) => id === listId)!;
      const cardIndex = list.cards.findIndex(({ id }) => id === title)!;

      list.cards[cardIndex] = action.payload;
    },
    createCardFailure() {},
  },
});

export const { actions } = slice;

export default slice.reducer;
