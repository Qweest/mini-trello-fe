import { AppThunk } from '../../store';
import {
  BoardRequest,
  CreateListRequest,
  UpdateListRequest,
  MoveRequest,
  CreateCardRequest,
  MoveCardRequest,
  RemoveListRequest,
} from './api/entities';
import {
  fetchBoard,
  moveList,
  createList,
  updateList,
  createCard,
  moveCard,
  removeList,
} from './api';
import { actions } from './slice';
import {
  CreateCard,
  CreateList,
  Move,
  MovePending,
  MoveCard,
} from './entities';
import {
  getListSortedCards,
  getNewPosition,
  getNextPositionConfig,
} from './helpers';

export const fetchBoardAction = (
  boardRequest: BoardRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.fetchBoardPending());
    const { data } = await fetchBoard(boardRequest);
    dispatch(actions.fetchBoardSuccess(data));
  } catch (e) {
    dispatch(actions.fetchBoardFailure());
    throw e;
  }
};

export const createListAction = (
  createListData: CreateList,
): AppThunk => async (dispatch, getState) => {
  const { dashboard } = getState();
  const { boardId, name } = createListData;
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
    dispatch(actions.createListFailure(createListRequest));
    throw e;
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
    throw e;
  }
};

export const moveListAction = (moveData: Move): AppThunk => async (
  dispatch,
  getState,
) => {
  const { dashboard } = getState();
  const { id, newIndex, oldIndex } = moveData;
  const { position, adjacentIndex } = getNextPositionConfig(
    dashboard.lists,
    newIndex,
    oldIndex,
  );
  const moveListPending: MovePending<Move> = {
    ...moveData,
    position,
    adjacentIndex,
  };
  const moveRequest: MoveRequest = { id, position };

  try {
    dispatch(actions.moveListPending(moveListPending));
    await moveList(moveRequest);
    dispatch(actions.moveListSuccess());
  } catch (e) {
    dispatch(actions.moveListFailure());
    throw e;
  }
};

export const removeListAction = (
  removeListRequest: RemoveListRequest,
): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.removeListPending(removeListRequest));
    await removeList(removeListRequest);
    dispatch(actions.removeListSuccess());
  } catch (e) {
    dispatch(actions.removeListFailure());
  }
};

export const createCardAction = (
  createCardData: CreateCard,
): AppThunk => async (dispatch, getState) => {
  const { dashboard } = getState();
  const { boardId, listId, title } = createCardData;
  const cards = getListSortedCards(dashboard.cards, listId);
  const newPosition = getNewPosition(cards);
  const createCardRequest: CreateCardRequest = {
    boardId,
    listId,
    title,
    position: newPosition,
  };

  try {
    dispatch(actions.createCardPending(createCardRequest));
    const { data } = await createCard(createCardRequest);
    dispatch(actions.createCardSuccess(data));
  } catch (e) {
    dispatch(actions.createCardFailure());
    throw e;
  }
};

export const moveCardAction = (moveCardData: MoveCard): AppThunk => async (
  dispatch,
  getState,
) => {
  const { dashboard } = getState();
  const { id, listId, toListId, newIndex, oldIndex } = moveCardData;
  const cards = getListSortedCards(dashboard.cards, toListId);
  const { position, adjacentIndex } = getNextPositionConfig(
    cards,
    newIndex,
    listId === toListId ? oldIndex : undefined,
  );
  const moveCardPendingData: MovePending<MoveCard> = {
    ...moveCardData,
    position,
    adjacentIndex,
  };
  const moveCardRequest: MoveCardRequest = {
    id,
    listId: toListId,
    position,
  };

  try {
    dispatch(actions.moveCardPending(moveCardPendingData));
    await moveCard(moveCardRequest);
    dispatch(actions.moveCardSuccess());
  } catch (e) {
    dispatch(actions.moveCardFailure());
    throw e;
  }
};
