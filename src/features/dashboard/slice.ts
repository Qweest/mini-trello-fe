import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  BoardResponse,
  MoveListRequest,
  CreateListRequest,
  UpdateListRequest,
  ListResponse,
  CreateCardRequest,
  CardResponse,
} from './api/entities';
import { Board } from './entities';

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
      state.lists = lists;
    },
    fetchBoardFailure() {},

    moveListPending(state, action: PayloadAction<MoveListRequest>) {
      const { oldPosition, newPosition } = action.payload;
      const { lists } = state;

      lists.splice(newPosition, 0, lists.splice(oldPosition, 1)[0]);
    },
    moveListSuccess() {},
    moveListFailure(state, action: PayloadAction<MoveListRequest>) {
      const { oldPosition, newPosition } = action.payload;
      const { lists } = state;

      lists.splice(newPosition, 0, lists.splice(oldPosition, 1)[0]);
    },

    createListPending(state, action: PayloadAction<CreateListRequest>) {
      const { name } = action.payload;
      const pendingList = {
        id: name,
        name,
        cards: [],
        boardId: state.id,
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
