import { AppThunk } from '../../store';
import {
  BoardRequest,
  BoardResponse,
  MoveListRequest,
  CreateListRequest,
  UpdateListRequest,
  CreateCardRequest,
} from './api/entities';
import {
  fetchBoard,
  moveList,
  createList,
  updateList,
  createCard,
} from './api';
import { actions } from './slice';

export const fetchBoardAction = (
  boardRequest: BoardRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.fetchBoardPending());
    const { data } = await fetchBoard(boardRequest);
    dispatch(actions.fetchBoardSuccess(data));
  } catch (e) {
    dispatch(actions.fetchBoardFailure());
  }
};

export const moveListAction = (
  moveListRequest: MoveListRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.moveListPending(moveListRequest));
    await moveList(moveListRequest);
    dispatch(actions.moveListSuccess());
  } catch (e) {
    dispatch(actions.moveListFailure(moveListRequest));
  }
};

export const createListAction = (
  createListRequest: CreateListRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.createListPending(createListRequest));
    const { data } = await createList(createListRequest);
    dispatch(actions.createListSuccess(data));
  } catch (e) {
    dispatch(actions.createListFailure());
  }
};

export const updateListAction = (
  updateListRequest: UpdateListRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.updateListPending(updateListRequest));
    await updateList(updateListRequest);
    dispatch(actions.updateListSuccess());
  } catch (e) {
    dispatch(actions.updateListFailure());
  }
};

export const createCardAction = (
  createCardRequest: CreateCardRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.createCardPending(createCardRequest));
    const { data } = await createCard(createCardRequest);
    dispatch(actions.createCardSuccess(data));
  } catch (e) {
    dispatch(actions.createCardFailure());
  }
};
