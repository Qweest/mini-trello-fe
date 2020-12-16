import { AppThunk } from '../../store';
import {
  BoardRequest,
  CreateListRequest,
  UpdateListRequest,
  MoveRequest,
  CreateCardRequest,
  MoveCardRequest,
} from './api/entities';
import {
  fetchBoard,
  moveList,
  createList,
  updateList,
  createCard,
  moveCard,
} from './api';
import { actions } from './slice';
import {
  CreateCardAction,
  CreateListAction,
  MoveAction,
  MoveActionPending,
  MoveCardAction,
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
    dispatch(actions.createListFailure(createListRequest));
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

export const moveListAction = (moveActionData: MoveAction): AppThunk => async (
  dispatch,
  getState,
) => {
  const { dashboard } = getState();
  const { id, newIndex, oldIndex } = moveActionData;
  const { position, adjacentIndex } = getNextPositionConfig(
    dashboard.lists,
    newIndex,
    oldIndex,
  );
  const moveListActionPending: MoveActionPending<MoveAction> = {
    ...moveActionData,
    position,
    adjacentIndex,
  };
  const moveRequest: MoveRequest = { id, position };

  try {
    dispatch(actions.moveListPending(moveListActionPending));
    await moveList(moveRequest);
    dispatch(actions.moveListSuccess());
  } catch (e) {
    dispatch(actions.moveListFailure());
  }
};

export const createCardAction = (
  createCardActionData: CreateCardAction,
): AppThunk => async (dispatch, getState) => {
  const { dashboard } = getState();
  const { boardId, listId, title } = createCardActionData;
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
  }
};

export const moveCardAction = (
  moveCardAction: MoveCardAction,
): AppThunk => async (dispatch, getState) => {
  const { dashboard } = getState();
  const { id, listId, toListId, newIndex, oldIndex } = moveCardAction;
  const cards = getListSortedCards(dashboard.cards, toListId);
  const { position, adjacentIndex } = getNextPositionConfig(
    cards,
    newIndex,
    listId === toListId ? oldIndex : undefined,
  );
  const moveCardActionPending: MoveActionPending<MoveCardAction> = {
    ...moveCardAction,
    position,
    adjacentIndex,
  };
  const moveCardRequest: MoveCardRequest = {
    id,
    listId: toListId,
    position,
  };

  try {
    dispatch(actions.moveCardPending(moveCardActionPending));
    await moveCard(moveCardRequest);
    dispatch(actions.moveCardSuccess());
  } catch (e) {
    dispatch(actions.moveCardFailure());
  }
};
