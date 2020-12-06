import { AppThunk } from '../../store';
import {
  BoardRequest,
  CreateListRequest,
  UpdateListRequest,
  MoveRequest,
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
import {
  CreateListAction,
  MoveListAction,
  MoveListActionPending,
} from './entities';
import { getNewPosition, getNextPositionConfig } from './helpers';

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

export const createListAction = (
  createListActionData: CreateListAction,
): AppThunk => async (dispatch, getState) => {
  const { dashboard } = getState();
  const { boardId, name } = createListActionData;
  const newPosition = getNewPosition(dashboard.lists);
  const createListRequest: CreateListRequest = {
    boardId,
    name,
    position: newPosition,
  };

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

export const moveListAction = (
  moveListActionData: MoveListAction,
): AppThunk => async (dispatch, getState) => {
  const { dashboard } = getState();
  const { id, newIndex, oldIndex } = moveListActionData;
  const { position, isPositive, adjacentIndex } = getNextPositionConfig(
    dashboard.lists,
    newIndex,
    oldIndex,
  );
  const moveRequest: MoveRequest = {
    id,
    position,
  };
  const moveListActionPending: MoveListActionPending = {
    ...moveListActionData,
    position,
    isPositive,
    adjacentIndex,
  };

  try {
    dispatch(actions.moveListPending(moveListActionPending));
    // await moveList(moveRequest);
    dispatch(actions.moveListSuccess());
  } catch (e) {
    dispatch(actions.moveListFailure());
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
